import React from 'react'
import Accordian from './Accordian'

const CategoriesFilter = ({categories, extraClasses}) => {
    
    const className=`col d-flex flex-column border bg-white ${extraClasses}`
    const renderedCategories = categories.values.map((category, i)=>{
        return (
            <dd key={i} className='m-0 px-2 py-1'>{category}</dd>
        )
    })

    return (
        <div className={className} style={{minWidth: "180px"}}>
            <span className="d-flex align-items-center justify-content-center fw-500 border-bottom p-3" style={{height: "50px"}}>
                Categories
            </span>
            <div className="p-3 text-start">
                <span className="cat-main-label fw-500">{"<"} {categories.mainLabel}</span>
                <dl className='m-0'>
                    <dt className='cat-sub-label fw-500 mb-2'>{"<"} {categories.subLabel}</dt>
                    {renderedCategories}
                </dl>
            </div>
        </div>
    )
}

export default CategoriesFilter