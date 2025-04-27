import React from 'react'
import Products from './products/Products'
import ShopFilters from './filters/ShopFilters'

const ShopBody = () => {
  return (
    <section>
      <div className="container">
        <div className="row gap-5 m-0 g-0">
          <ShopFilters />
          <Products />
        </div>
      </div>
    </section>
  )
}

export default ShopBody