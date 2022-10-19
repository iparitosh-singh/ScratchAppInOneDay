import { ButtonTypes } from "./components/constants"
export const getClasses = (buttons) => {
    const buttonArr = Object.values(buttons).map(button => {
        return button
    }).slice().sort((button) => button.top)
    const classes = buttonArr.map(button => {
        switch(button.type) {
            case ButtonTypes.MOTION:
                return {
                    transition: '3s',
                    
                }
                
        }
    })
}