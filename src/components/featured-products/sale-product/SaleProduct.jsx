import React from 'react'
import SaleProductCard from './SaleProductCard'
import MainHeader from '../../UI-kits/MainHeader'

const SaleProduct = () => {
  return (
    <div className="col-12 col-xl-4 h-auto d-flex flex-column">
        <MainHeader text={"Sale Product"} extraClasses={"mb-5"} />
        <SaleProductCard />
    </div>
  )
}

export default SaleProduct