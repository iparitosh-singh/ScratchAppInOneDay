import React, {useState} from 'react';
import { useStoreState } from 'easy-peasy';
import { useDrag } from 'react-dnd';
import { getClasses } from '../animateStripe';

const spriteInPreviewStyles = {
  position: 'absolute'
}

const SpritePreview = ({children, id, left, top}) => {
    const {stripes} = useStoreState(state => state)
    const [styles, setStyles] = useState({
        transition: 'transform .8s ease-in-out'
    })
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
        console.log(newStyles)
        setStyles({...styles, ...newStyles})
    }
    
    if(isDragging){
        return <div ref={drag} />
    }
    return (
        <div ref={drag} style={{...spriteInPreviewStyles, left, top, ...styles}} onClick={handleClick}>
            {children}
        </div>
    )
}

export default SpritePreview