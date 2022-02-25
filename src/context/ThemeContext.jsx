import { createContext } from 'core-js/library/fn/reflect/es7/metadata'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    return (
        <ThemeContext.Provider value={{ color: 'blue' }}>
            {children}
        </ThemeContext.Provider>
    )
}