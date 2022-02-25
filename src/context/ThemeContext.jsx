import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

// first argumet- current up to date state, second argument- action object from the dispatch call
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            // spread existing state and override the color property
            return { ...state, color: action.payload}
        default:
            return state
    }
}

export function ThemeProvider({ children }) {
    // first argument- reducer func, second argument- initial state. 
    // useReducer returns a state, and dispatch. the dispatch call the function inside useReducer, themeReducer in this case
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c'
    })

    const changeColor = (color) => {
        // the dispatch will fire themeReducer, it takes as argument an action object that contains type and payload
        dispatch({ type: 'CHANGE_COLOR', payload: color})
    }

    return (        
        <ThemeContext.Provider value={{ ...state, changeColor }}>
            {children}
        </ThemeContext.Provider>
    )
}