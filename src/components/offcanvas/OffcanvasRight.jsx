import React from 'react'
import { createPortal } from 'react-dom'

const OffcanvasRight = ({title, target, children}) => {

    return createPortal(
        <div className={`offcanvas offcanvas-end`} tabIndex="-1" id={target} aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header py-3 border-bottom">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">{title}</h5>
                <button 
                    type="button"
                    // onClick={e => setShow(!show)} 
                    className="btn-close" 
                    data-bs-dismiss="offcanvas" 
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body py-4">
                {children}
            </div>
            <div className="offcanvas-footer"></div>
        </div>,
        document.getElementById("portal")
     )
}

export default OffcanvasRight