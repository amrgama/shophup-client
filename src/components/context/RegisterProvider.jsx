import React, { useState } from 'react'
import SignUp from '../registration/Singup';
import Login from '../registration/Login';
import OffcanvasRight from '../offcanvas/OffcanvasRight';

export const RegisterContext = React.createContext();

const RegisterProvider = ({signIn, signUp, children}) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    
    const initialValue = {
        "signIn": {
            showSignIn,
            setShowSignIn
        },
        "signUp": {
            showSignUp,
            setShowSignUp
        }
    }

    return (
        <RegisterContext.Provider value={initialValue}>
            {children}

            {   (showSignIn && !showSignUp) && 
                {signIn}
            }
            {   (showSignUp && !showSignIn) &&
                {signUp}
            }
        </RegisterContext.Provider>
    )
}

export default RegisterProvider