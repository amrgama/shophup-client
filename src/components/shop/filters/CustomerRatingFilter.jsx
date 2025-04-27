import React, { useRef, useState } from 'react'
import Accordian from './Accordian'
import {ImStarFull, ImStarHalf, ImStarEmpty} from "react-icons/im"

const CustomerRatingFilter = ({customerRating, extraClasses}) => {
    
    const className=`col d-flex flex-column border bg-white ${extraClasses}`
    const [activeIndex, setActiveIndex] = useState(undefined);
    const renderedLiItems = customerRating.map((rate, i)=>{      
        return (
            <li key={i} className='nav-items py-1 m-0'>
                <button 
                    onClick={e => {
                        // index.current = i;
                        setActiveIndex(i);
                    }}
                    className={`nav-link btn btn-light w-100 px-2 py-1 border-0 text-warning text-start ${(activeIndex === i)? "bg-light": ""}`}
                >
                    {
                        Array.from({length: rate}).map((item, i)=>{
                            return <ImStarFull key={i} className='fs-5' />
                        })
                    }
                    {
                        Array.from({length: (5-rate)}).map((item, i)=>{
                            return <ImStarEmpty key={i} />
                        })
                    }
                </button>
            </li>
        )
    })

    return (
        <div className={className} style={{minWidth: "180px"}}>
            <span className="d-flex align-items-center justify-content-center fw-500 border-bottom p-3" style={{height: "50px"}}>
                Customer Rating
            </span>
            <div className="p-3 text-start">
                <span className='fw-500 mb-2'>Rate</span>
                <ul className='navbar-nav bg-red'>
                    {renderedLiItems}
                </ul>
            </div>
        </div>
    )
}

export default CustomerRatingFilter