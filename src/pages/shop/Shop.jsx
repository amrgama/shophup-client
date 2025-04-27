import React from 'react'
import ShopBody from '../../components/shop/ShopBody'
import TopSelling from '../../components/top-selling/TopSelling'

const Shop = () => {
  return (
    <div id='shop' className='d-flex flex-column gap-5 py-5'>
        <ShopBody />
        <TopSelling />
    </div>
  )
}

export default Shop