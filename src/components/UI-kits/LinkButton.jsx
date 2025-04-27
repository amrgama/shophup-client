import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({link, text, icon, extraClasses, style}) => {
    
    const className= `btn btn-secondary w-100 d-flex fw-500 py-2 border ${extraClasses ?? ""}`

    return (
        <Link
            to={link}        
            className={className}
            style={style || {}}
        >
            <span className="m-auto">
                {
                    text && text
                }
                
                {
                    !!icon && icon
                }
            </span>
        </Link>
    )
}

export default LinkButton