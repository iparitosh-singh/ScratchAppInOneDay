import React from 'react'
import { action, createStore } from "easy-peasy";
import CatSprite from "./components/Sprites/CatSprite";

const store = createStore({
    stripes: [{
        id: 0,
        component: <CatSprite />,
        top: 0, 
        left: 0,
        buttons: {} 
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
    updateStripePosition: action((state, payload) => {
        const {left, top, id} = payload
        
        state.stripes.forEach(stripe => {
            if(id === stripe.id){
                stripe.left = left
                stripe.top = top 
            }
            return stripe  
        })

    }) 
})

export default store