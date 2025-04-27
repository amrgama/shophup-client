import React, { useState } from 'react'

const PriceFilter = ({extraClasses}) => {
    
    const className=`col d-flex flex-column border bg-white ${extraClasses}`
    const price = {
        min: 50,
        max: 200
    }

    const [inputPrice, setInputPrice] = useState(price?.min ?? 0);

    return (
        <div className={className} style={{minWidth: "180px"}}>
            <span className="d-flex align-items-center justify-content-center fw-500 border-bottom p-3" style={{height: "50px"}}>
                Price
            </span>
            <div className="p-3 text-start">
                <div className="form-check d-flex flex-wrap align-items-center px-0 py-1">
                    {/* <label className="form-check-label me-auto" htmlFor="reverseCheck1">
                        {brand}
                    </label>
                    <input className="form-check-input" type="checkbox" value={brand} id="reverseCheck1"/> */}
                    <label htmlFor="customRange1" className="form-label me-2 fw-500">Price</label>
                    <input 
                        type="range"
                        onChange={e => setInputPrice(e.currentTarget.value)} 
                        id="customRange1" 
                        className="form-range" 
                        min={price.min} 
                        max={price.max}
                    ></input>
                    <div className="price w-100 text-center text-muted fw-500">${price.min} - <span className={`${(price.max === inputPrice)? "text-secondary" : ""}`}>${inputPrice}</span></div>
                </div>
            </div>
        </div>
    )
}

export default PriceFilter