import React, { useState } from 'react'
import {BsPerson} from "react-icons/bs"

const SignUpButton = ({extraClasses, children}) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = "offcanvasRightSignUp";

  return (
    <>
        <button 
            type="button" 
            onClick={e => setShow(!show)}
            
            className={`btn-toggler bg-transparent d-inline-flex px-1 text-dark fw-500 ${extraClasses? extraClasses : ""}`} 
            
            data-bs-toggle="offcanvas" 
            data-bs-target={`#${"offcanvasRightSignUp"}`}
            aria-controls="offcanvasRight"
        >
            <span className='singin-icon my-auto me-1'>
                <BsPerson />
            </span>
            <span className="m-auto">{children? children: "create your account"}</span>
        </button>
        {/* { show &&
            createPortal(
                <OffcanvasRight title={"Create Your Account"} target={"offcanvasRightSignUp"} show={show}>
                    <SignUp />
                </OffcanvasRight>,
                document.getElementById("portal")
            )
        } */}
        
    </>
  )
}

export default SignUpButton