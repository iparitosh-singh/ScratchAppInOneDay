import React, { useCallback,  useState }  from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import * as Sprites from './Sprites'
import SpritePreview from "./SpritePreview";
import { useDrop } from "react-dnd";
const STRIPES = Object.keys(Sprites).map(sprite => {
  const Comp = Sprites[sprite];
  return <Comp />
});

const preveiwAreaStyles = {
  height: '70%', 
  border: '1px blue solid', 
  margin: '5px 5px 50px 0',
  borderRadius: '2px',
  position: 'relative',
  overflow: 'hidden'
}

const spriteInPreviewStyles = {
  width: '100px', 
  height: '100px',
  position: 'absolute',
  borderRadius: '20px'

}


export default function PreviewArea() {
  const stripes = useStoreState((state) => state.stripes)
  const {selectedStripeId} = useStoreState((state) => state)
  const {addStripe, setSelectedStripe, updateStripePosition} = useStoreActions((actions) => actions)

  const [, drop] = useDrop(() => ({
    accept: 'SPRITE',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveSprite(left, top, item.id)
      return undefined
    }
  }), [stripes, updateStripePosition])

  const moveSprite = (left, top, id) => {
    updateStripePosition({
      id, left, top
    })
  }
  const handleAddStripe = () => {
    const randomIdx = Math.floor(Math.random() * (STRIPES.length))
    const id = Math.floor(Math.random() * 1000)
    const newStripe = {
      component: STRIPES[randomIdx],
      buttons: {},
      top: 0, left: 0,
      id,
    }
    addStripe(newStripe)
    setSelectedStripe(id)
    moveSprite(0, 0, id)
  }
  return (
    <div className="w-100 flex-1 h-full overflow-y-auto p-2 flex-col" >
      <div style={preveiwAreaStyles} ref={drop}>
        {stripes.map(stripe => 
          <SpritePreview
            id={stripe.id}
            left={stripe.left}
            top={stripe.top}
            key={stripe.id}
            onClick={() => setSelectedStripe(stripe.id)}
            >
            {React.cloneElement(stripe.component, { key: stripe.id, style: spriteInPreviewStyles })}
          </SpritePreview>
        )}
      </div>
      Click on the Stripe to Start animation
      <br />
      <br />
      <button 
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
        onClick={handleAddStripe}
      > Add Random Stripe</button>
      <div style={{display: 'flex', marginTop: '3px'}}>
        {stripes.map((stripe, key) => {
          return (
          <div
            style={{
              width: '50px', 
              height: '50px',
              border: stripe.id === selectedStripeId ? '1px solid blue': '',
              borderRadius: '5px'
            }}
            key={key}
            onClick = {() => setSelectedStripe(stripe.id)}
          >
          {React.cloneElement(stripe.component, {style: {width: '50px', height: '50px'}, key: stripe.id })}
          </div>)
        })}
      </div>
    </div>
  );
}
