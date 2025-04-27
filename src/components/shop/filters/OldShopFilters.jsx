import React from 'react'
import CategoriesFilter from './CategoriesFilter'
import BrandsFilter from './BrandsFilter'
import PriceFilter from './PriceFilter'
import ColorFilter from './color-filter/ColorFilter'
import CustomerRatingFilter from './CustomerRatingFilter'

const categories = {
  mainLabel: "Electronics",
  subLabel: "Computers & Accessories",
  values: ["Desktops", "Laptops", "Tablets"]
}

const brands = ["Nike", "Sony", "adidas", "Apple"]

const customerRating = [2, 3, 4, 5]
const ShopFilters = () => {
  return (
    <aside className='col-lg-3 p-3'>
      <div className="accordion" id="accordionExample">
        <CategoriesFilter categories={categories}/>
        <BrandsFilter brands={brands}/>
        <PriceFilter />
        <ColorFilter />
        <CustomerRatingFilter customerRating={customerRating} />
      </div>
    </aside>
  )
}

export default ShopFilters