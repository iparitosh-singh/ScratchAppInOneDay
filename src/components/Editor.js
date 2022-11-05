import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import {useDrop} from 'react-dnd'

import Button from './Buttons'
import { ButtonTypes } from './constants'
import { getClasses } from '../animateStripe'

const getButton = (button, id) => {
    const {left, top, name, type, value, stripeId} = button
    const props = {
        name,
        pos: {left, top},
        id,
        isInside: true,
        value,
        stripeId
    }
    switch(type) {
        case ButtonTypes.MOTION:
            return <Button type={ButtonTypes.MOTION} {...props} />
        case ButtonTypes.EVENT:
            return <Button type={ButtonTypes.EVENT} {...props} />
        case ButtonTypes.CONTROL:
            return <Button type={ButtonTypes.CONTROL} {...props} />
        case ButtonTypes.LOOKS:
            return <Button type={ButtonTypes.LOOKS} {...props} />
    }
}

const Editor = () => {
    const { stripes, selectedStripeId} = useStoreState(state => state)
    const {setStripeButtons, updateStripeClasses} = useStoreActions(action => action)
    const buttons = stripes.find(stripe => stripe.id === selectedStripeId).buttons;

    const addButtonToEditor = (item, pos, type) => {
        const id = Math.floor(Math.random() * 10000)
        const newItem = {...item, id}
        moveButton(newItem, pos, type)
    }

    const moveButton = (item, pos, type) => {
        const buttonPosition= {
             [item.id]: {
                left: pos.left, 
                top: pos.top,
                type: type,
                name: item.name,
                value: item.value,
                stripeId: selectedStripeId
            }
        }
        setStripeButtons({
            id: selectedStripeId,
            button: {
                ...buttonPosition,
            }
        })
    }

    const handleButtonClick = (buttonId) => {
        const stripe = stripes.find((stripe) => stripe.id === selectedStripeId)
        const button = stripe.buttons[buttonId]
        console.log({[`${buttonId}`]: button})
        updateStripeClasses({
            classes: getClasses({[`${buttonId}`]: button}, stripe.classes),
            stripeId: selectedStripeId 
        })
    }

    const [_, drop] = useDrop(() => ({
        accept: Object.keys(ButtonTypes).map(type => ButtonTypes[type]),
        drop: (item, monitor) => {
            const {x: left, y: top} = monitor.getSourceClientOffset();
            const pos = {
                left: left - 216,
                top: top - 20
            }

            if(!item.isInside)
                addButtonToEditor(item, pos, monitor.getItemType())
            else
                moveButton(item, pos, monitor.getItemType())
        }
    }), [selectedStripeId, stripes, setStripeButtons])


    return (
        <div style = {{
                height: '100%',
                width: 'auto',
                position: 'relative',
                border: '1px black solid'

            }}
            ref={drop}
        >
        {buttons && Object.keys(buttons).map((button) => {
            return(
                <div onClick={() => handleButtonClick(button)} key={button}>
                {getButton(buttons[button], button)}
                </div>
                )
        })}
        </div>
    )
}

export default Editor;