import React from 'react'
import SmallVerticalCard from '../../products-card/SmallVerticalCard'
import { combineWithBaseURL } from '../../../utilities/helper'

const ProductCards = ({products}) => {

    return products?.map((prod, i)=>{
        console.log("prod.image", prod?.image, combineWithBaseURL(prod?.image))
        return (
            <div 
                key={i} 
                className="col-12 col-sm-6 col-md-4 col-lg-3 p-0 border border-1 border-light" 
            >
                <SmallVerticalCard product={prod} />
            </div>
        )
    })
}

export default ProductCards