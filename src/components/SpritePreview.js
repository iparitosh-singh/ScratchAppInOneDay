import React, {useState} from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useDrag } from 'react-dnd';
import { getClasses } from '../animateStripe';

const spriteInPreviewStyles = {
  position: 'absolute'
}

const SpritePreview = ({children, id, left, top}) => {
    const {stripes} = useStoreState(state => state)
    const {updateStripeClasses} = useStoreActions(state => state)
    const [{isDragging}, drag ] = useDrag(() => ({
        type: 'SPRITE',
        item: {id, left, top},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [top, left, id])
    
    const handleClick = () => {
        const stripe = stripes.find((stripe) => stripe.id === id)
        const newStyles = getClasses(stripe.buttons)
        updateStripeClasses({classes: newStyles, stripeId: stripe.id})
    }
    
    if(isDragging){
        return <div ref={drag} />
    }
    return (
        <div ref={drag} style={{...spriteInPreviewStyles, left, top, ...stripes.find(stripe => stripe.id === id).classes}} onClick={handleClick}>
            {children}
        </div>
    )
}

export default SpritePreview