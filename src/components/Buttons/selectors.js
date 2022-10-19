import React from 'react'
import { MotionButtonTypes, EventButtonTypes, ControlButtonTypes, LooksButtonTypes } from '../constants'

import {MoveSteps, TurnLeft, TurnRight} from './MotionButtons'
import { StartClicked, StripeClicked } from './EventButtons'
import {Wait, Repeat} from './ControlButtons'
import { NextCostume, Say } from './LookButtons'


export const MotionSelectors = (name, props) => {
    switch (name) {
        case MotionButtonTypes.MOVE:
            return <MoveSteps {...props} />
        case MotionButtonTypes.RIGHT:
            return <TurnLeft {...props}/>
        case MotionButtonTypes.LEFT:
            return <TurnRight {...props}/>
    }
}

export const EventSelctors = (name, props) => {
    switch(name) {
        case EventButtonTypes.STARTCLICKED:
            return <StartClicked {...props}/>
        case EventButtonTypes.STRIPCLICKED:
            return <StripeClicked {...props}/>
    }
}

export const ControlSelector = (name, props) => {
    switch(name){
        case ControlButtonTypes.REPEAT:
            return <Repeat {...props}/>
        case ControlButtonTypes.WAIT:
            return <Wait {...props}/>
    }
}

export const LooksSelector = (name, props) => {
    switch(name) {
        case LooksButtonTypes.SAY:
            return <Say {...props}/>
        case LooksButtonTypes.NEXTCOSTUME:
            return <NextCostume {...props}/>
    }
}