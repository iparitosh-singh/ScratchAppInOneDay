import React from 'react';
import Icon from '../Icon';
import { useDefault } from './utilHooks';


export const MoveSteps = (props) => {
    const value = useDefault(props.value, 10, props.setValue)
    return (
    <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
      Move 
        {value !== undefined && <input 
        value={value}
        onChange={(e) => props.setValue(e.target.value)}
        type='number'
        className='
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
        ' />}
      steps
    </div>
    )
}

export const TurnLeft = (props) => {
    const value = useDefault(props.value, 15, props.setValue)
    return (
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {value !== undefined && <input 
        value={value}
        onChange={(e) => props.setValue(e.target.value)}
        type='number'
        className='
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
        ' />} degrees
      </div>
    )
}

export const TurnRight = (props) => {
    const value = useDefault(props.value, 15, props.setValue)
    return (
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {value !== undefined && <input 
        value={value}
        onChange={(e) => props.setValue(e.target.value)}
        type='number'
        className='
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
        ' />} degrees
      </div>
    )
}
