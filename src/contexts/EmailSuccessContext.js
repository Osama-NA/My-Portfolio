import { createContext, useReducer } from 'react';

const emailSuccessReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMAIL_SENT':
            return action.success;
        default:
            return state;
    }
}

export const EmailSuccessContext = createContext(false);

export const EmailSuccessProvider = ({ children }) => {
    const [state, dispatch] = useReducer(emailSuccessReducer, false);

    // Context action dispatcher function
    const setEmailSuccess = (success) => dispatch({ type: 'SET_EMAIL_SENT', success: success });

    return (
        <EmailSuccessContext.Provider value={{
            emailSuccessState: state,
            setEmailSuccess: setEmailSuccess
        }}>
            {children}
        </EmailSuccessContext.Provider>
    )
}