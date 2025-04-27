import React, { useState } from 'react'
import {ImStarFull, ImStarHalf, ImStarEmpty} from "react-icons/im"

const RatingField = () => {

    const [activeIndex, setActiveIndex] = useState(undefined);
    const ratingValues = [1, 2, 3, 4, 5]

    const renderedLiItems = ratingValues.map((rate, i)=>{      
        return (
            <li key={i} className='nav-items py-1 m-0'>
                <button 
                    onClick={e => {
                        // index.current = i;
                        setActiveIndex(i);
                    }}
                    type='button'
                    className={`nav-link btn btn-light d-flex px-2 py-1 border-0 text-warning text-start ${(activeIndex === i)? "main-bg": ""}`}
                >
                    {
                        Array.from({length: rate}).map((item, i)=>{
                            return <ImStarFull key={i} className='fs-5' />
                        })
                    }
                    {
                        Array.from({length: (5-rate)}).map((item, i)=>{
                            return <ImStarEmpty key={i} className='fs-5' />
                        })
                    }
                </button>
            </li>
        )
    })
    
  return (
    <div className="accordion-body text-start">
        <span className='fw-500 mb-3'>Your rating <span className="text-danger fs-5">*</span></span>
        <ul className='navbar-nav w-fit'>
            {renderedLiItems}
        </ul>
    </div>
  )
}

export default RatingField