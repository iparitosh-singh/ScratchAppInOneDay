import React from 'react';
import { useDrag } from 'react-dnd';

const spriteInPreviewStyles = {
  position: 'absolute'
}

const SpritePreview = ({children, id, left, top, onClick}) => {
    const [{isDragging}, drag ] = useDrag(() => ({
        type: 'SPRITE',
        item: {id, left, top},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [top, left, id])
    
    if(isDragging){
        return <div ref={drag} />
    }
    return (
        <div ref={drag} style={{...spriteInPreviewStyles, left, top}} onClick={onClick}>
            {children}
        </div>
    )
}

export default SpritePreview