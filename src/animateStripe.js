import { ButtonTypes, LooksButtonTypes, MotionButtonTypes } from "./components/constants"

export const getClasses = (buttons) => {
    return Object.values(buttons)
    .map(button => {
        return button
    })
    .slice().sort((button) => button.top)
    .reduce((styles, button) => {
        switch(button.type) {
            case ButtonTypes.MOTION:
            {
                switch(button.name) {
                    case MotionButtonTypes.MOVE:
                        return {
                            ...styles, 
                            transform: styles.transform ? styles.transform + ` translate(${button.value * 10}px)` :`translate(${button.value}px)`  
                        }
                    case MotionButtonTypes.LEFT:
                        return {
                            ... styles,
                            transform: styles.transform ? styles.transform + ` rotate(${button.value}deg)` : `rotate(${button.value}deg)`
                        }
                    case MotionButtonTypes.RIGHT:
                        return {
                            ... styles,
                            transform: styles.transform ? styles.transform + ` rotate(${-button.value}deg)` : `rotate(${-button.value}deg)`
                        }
                    default:
                        return styles
                }
            }
            case ButtonTypes.LOOKS:
                case LooksButtonTypes.SAY:
                    setTimeout(() => {
                        alert(`Stipe said ${button.value}`)
                    }, 1000)
                    return {
                        ...styles,
                    }
            default:
                return styles
        }
    }, {})
}