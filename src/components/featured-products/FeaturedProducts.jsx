import React from 'react'
// import SaleProduct from './sale-product/SaleProduct'
import SaleProduct from './sale-product/SaleProduct'
import BestSeller from './best-seller/BestSeller'
import Section from '../UI-kits/Section'

const FeaturedProducts = () => {
  return (
    <Section>
        <div className="container">
            <div className="d-flex flex-wrap gap-5 m-0">
                <SaleProduct />
                <BestSeller />
            </div>
        </div>
    </Section>
  )
}

export default FeaturedProducts