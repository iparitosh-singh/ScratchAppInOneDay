import React, { useState } from 'react';
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
        case ButtonTypes.LOOKS:
            return selectors.LooksSelector;
    }
}

const Button = ({
    type,
    name, 
    pos = {top: 0, left: 0}, 
    isInside=false,
    id = 0,
    ...props
}) => {
    const selector = selectSelector(type)
    const [value, setValue] = useState(props.value)
    const [{isDragging}, drag] = useDrag(() => ({
        type: type,
        item: {
            name: name,
            id: id,
            isInside,
            top: pos.top,
            left: pos.left,
            value
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [value, setValue])
    if(isInside && isDragging) 
        return <div ref={drag}></div>
    return (
        <div ref={drag} style={{ maxWidth: '200px', ...pos, position: isInside ? 'absolute' : ''}}>
            {selector(name, {value, setValue})}
        </div>
    )
}

export default Button