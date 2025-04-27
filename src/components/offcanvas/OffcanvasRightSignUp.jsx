import React from 'react'
import OffcanvasRight from './OffcanvasRight'
import SignUp from '../auth/Singup'
import { createPortal } from 'react-dom'

const OffcanvasRightSignUp = ({title, target, show, children}) => {
    
    // if(!show) return <></>;

    // return createPortal(
    //     <OffcanvasRight title={"Create Your Account"} target={target}>
    //         {children}
    //     </OffcanvasRight>,
    //     document.getElementById("portal")
    // )
    return (
        <div className={`offcanvas offcanvas-end show`} tabIndex="-1" id={target} aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header py-4 main-bg">
                <h5 className="offcanvas-title text-primary" id="offcanvasRightLabel">{title}</h5>
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="offcanvas" 
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body py-5">
                {children}
            </div>
            <div className="offcanvas-footer"></div>
        </div>
    )
}

export default OffcanvasRightSignUp