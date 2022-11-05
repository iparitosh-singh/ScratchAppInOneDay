import React from 'react'
import { action, createStore } from "easy-peasy";
import CatSprite from "./components/Sprites/CatSprite";

const store = createStore({
    stripes: [{
        id: 0,
        component: <CatSprite />,
        top: 0, 
        left: 0,
        buttons: {},
        classes: {transition: 'transform .8s ease-in-out'} 
    }],
    selectedStripeId: 0,

    addStripe: action((state, stripe) => {
        state.stripes.unshift(stripe)
    }),
    setSelectedStripe: action((state, id) => {
        state.selectedStripeId = id 
    }),

    setStripeButtons: action((state, payload) => {
        const {id, button} = payload;
        state.stripes.forEach(stripe => {
            return id === stripe.id ? (stripe.buttons = {...stripe.buttons, ...button }) : stripe
        })
    }),
    changeButtonValue: action((state, payload) => {
        const {value, stripeId, buttonId} = payload
        state.stripes.forEach(stripe => {
            return stripeId === stripe.id ? (stripe.buttons[buttonId].value = value) : stripe
        })
    }),
    updateStripePosition: action((state, payload) => {
        const {left, top, id} = payload
        
        state.stripes.forEach(stripe => {
            if(id === stripe.id){
                stripe.left = left
                stripe.top = top 
            }
            return stripe  
        })

    }),
    updateStripeClasses: action((state, payload) => {
        const {stripeId, classes} = payload
        state.stripes.forEach(stripe => {
            return stripeId === stripe.id ? (stripe.classes = {...stripe.classes, ...classes}) : stripe
        })
    })
})

export default store