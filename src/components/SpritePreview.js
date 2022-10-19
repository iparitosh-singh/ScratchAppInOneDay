import { useStoreState } from 'easy-peasy';
import React from 'react';
import { useDrag } from 'react-dnd';
import { getClasses } from '../animateStripe';

const spriteInPreviewStyles = {
  position: 'absolute'
}

const SpritePreview = ({children, id, left, top, onClick}) => {
    const {stripes} = useStoreState(state => state)
    const [{isDragging}, drag ] = useDrag(() => ({
        type: 'SPRITE',
        item: {id, left, top},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [top, left, id])
    
    const handleClick = () => {
        const stripe = stripes.find((stripe) => stripe.id === id)
        getClasses(stripe.buttons)

    }
    
    if(isDragging){
        return <div ref={drag} />
    }
    return (
        <div ref={drag} style={{...spriteInPreviewStyles, left, top}} onClick={handleClick}>
            {children}
        </div>
    )
}

export default SpritePreview