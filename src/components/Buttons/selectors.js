import React from 'react'
import { MotionButtonTypes, EventButtonTypes, ControlButtonTypes, LooksButtonTypes } from '../constants'

import {MoveSteps, TurnLeft, TurnRight} from './MotionButtons'
import { StartClicked, StripeClicked } from './EventButtons'
import {Wait, Repeat} from './ControlButtons'
import { NextCostume, Say } from './LookButtons'


export const MotionSelectors = (name) => {
    switch (name) {
        case MotionButtonTypes.MOVE:
            return <MoveSteps />
        case MotionButtonTypes.RIGHT:
            return <TurnLeft />
        case MotionButtonTypes.LEFT:
            return <TurnRight />
    }
}

export const EventSelctors = (name) => {
    switch(name) {
        case EventButtonTypes.STARTCLICKED:
            return <StartClicked />
        case EventButtonTypes.STRIPCLICKED:
            return <StripeClicked />
    }
}

export const ControlSelector = (name) => {
    switch(name){
        case ControlButtonTypes.REPEAT:
            return <Repeat />
        case ControlButtonTypes.WAIT:
            return <Wait />
    }
}

export const LooksSelector = (name) => {
    switch(name) {
        case LooksButtonTypes.SAY:
            return <Say />
        case LooksButtonTypes.NEXTCOSTUME:
            return <NextCostume />
    }
}