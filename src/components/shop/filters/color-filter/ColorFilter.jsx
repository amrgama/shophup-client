import React from 'react'
import Colors from './colors/Colors'

const ColorFilter = ({brands, extraClasses}) => {
   
    const className=`col d-flex flex-column border bg-white ${extraClasses}`
   
    return (
        <div className={className} style={{minWidth: "180px"}}>
            <span className="d-flex align-items-center justify-content-center fw-500 border-bottom p-3" style={{height: "50px"}}>
                Colors
            </span>
            <div className="p-3 text-start">
                <Colors />
            </div>
        </div>
    )
}

export default ColorFilter