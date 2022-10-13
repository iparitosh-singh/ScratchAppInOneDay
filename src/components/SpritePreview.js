import React from 'react';
import { useStoreActions } from 'easy-peasy';
import { useDrag } from 'react-dnd';

const styles = {
    position: 'absolute',
}

const SpritePreview = ({children, id, left = 0, top = 0}) => {
    const {setSelectedStripe} = useStoreActions(state => state)
    const [{isDragging}, drag ] = useDrag(() => ({
        type: 'SPRITE',
        item: {id, left, top},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    const handleOnClick = () => {
        setSelectedStripe(id);
    }
    
    if(isDragging){
        return <div ref={drag} />
    }
    return (
        <div ref={drag} onClick={handleOnClick} onDrag={handleOnClick} style={{...styles, left, top}}>
            {children}
        </div>
    )
}

export default SpritePreview