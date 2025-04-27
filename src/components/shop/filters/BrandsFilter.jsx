import React from 'react'

const BrandsFilter = ({brands, extraClasses}) => {

    const className=`col d-flex flex-column border bg-white ${extraClasses}`
    const renderedBrands = brands.map((brand, i)=>{
        return (
            <div key={i} className="form-check d-flex px-0 py-1">
                <label className="form-check-label me-auto" htmlFor="reverseCheck1">
                    {brand}
                </label>
                <input className="form-check-input" type="checkbox" value={brand} id="reverseCheck1"/>
            </div>
        )
    })

    return (
        <div className={className} style={{minWidth: "180px"}}>
           <span className="d-flex align-items-center justify-content-center fw-500 border-bottom p-3" style={{height: "50px"}}>
                Brands
            </span>
            <div className="p-3">
                {renderedBrands}
            </div>
        </div>
    )
}

export default BrandsFilter