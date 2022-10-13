import React from 'react';
import { useDrag } from 'react-dnd';
import { ButtonTypes } from '../constants';
import * as selectors from './selectors';

const selectSelector = (type) => {
    switch(type){
        case ButtonTypes.MOTION:
            return selectors.MotionSelectors;
        case ButtonTypes.EVENT:
            return selectors.EventSelctors;
        case ButtonTypes.CONTROL:
            return selectors.ControlSelector;
    }
}

const Button = ({
    type,
    name, 
    pos = {top: 0, left: 0}, 
    isInside=false,
    id = 0
}) => {
    const selector = selectSelector(type)
    const [{isDragging}, drag] = useDrag(() => ({
        type: type,
        item: {
            name: name,
            id: id,
            isInside,
            top: pos.top,
            left: pos.left 
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    if(isInside && isDragging) 
    return <div ref={drag}></div>
    return (
        <div ref={drag} style={{ maxWidth: '200px', ...pos, position: isInside ? 'absolute' : ''}}>
            {selector(name)}
        </div>
    )
}

export default Button