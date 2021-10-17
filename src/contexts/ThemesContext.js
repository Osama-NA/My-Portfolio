import {createContext, useReducer} from 'react';
import { lightPinkTheme } from '../utils/themes';

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return action.theme;
        default:
            return state;
    }
}

export const ThemesContext = createContext(lightPinkTheme);

export const ThemesProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, lightPinkTheme);

    const setTheme = (theme) => dispatch({ type: 'SET_THEME', theme });

    return(
        <ThemesContext.Provider value={{
            theme: state,
            setTheme: setTheme
        }}>
            {children}
        </ThemesContext.Provider>
    )
}