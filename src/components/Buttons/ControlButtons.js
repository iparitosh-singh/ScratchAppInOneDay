import React from 'react'
import { useDefault } from './utilHooks'

export const Wait= (props) => {
    const value = useDefault(props.value, 1, props.setValue)

    return (
        <div className="flex flex-row flex-wrap bg-indigo-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            Wait
            {value && <input
                value={value}
                onChange={(e) => props.setValue(e.target.value)}
                type='number'
                className='
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                '
            />}
            Seconds
        </div>
    )
}

export const Repeat = (props) => {
    const value = useDefault(props.value, 2, props.setValue)
    return (
      <div className="flex flex-row flex-wrap bg-indigo-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            Repeat 
            {value && <input
                value={value}
                onChange={(e) => props.setValue(e.target.value)}
                type='number'
                className='
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                '
            />}
            Times
        </div>
    )
}