import React from 'react'
import { useDefault } from './utilHooks'

export const Say = (props) => {
    const value = useDefault(props.value, 'Hello', props.setValue)
    return (
        <div className="flex flex-row flex-wrap bg-black text-white px-2 py-1 my-2 text-sm cursor-pointer">
        Say
        {value !== undefined && 
        <input 
            value={value}
            onChange={(e) => props.setValue(e.target.value)}
            className='
                    px-5
                    w-24
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                '
        />}
        </div>
    )
      
}
export const NextCostume = () => {
    return (
        <div className="flex flex-row flex-wrap bg-black text-white px-2 py-1 my-2 text-sm cursor-pointer">
            Next costume
        </div>
    )
      
}