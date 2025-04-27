import React from 'react'
import CategoriesFilter from './CategoriesFilter'
import BrandsFilter from './BrandsFilter'
import PriceFilter from './PriceFilter'
import ColorFilter from './color-filter/ColorFilter'
import CustomerRatingFilter from './CustomerRatingFilter'
import { IoFilter } from "react-icons/io5";
import MainHeader from '../../UI-kits/MainHeader'

const categories = {
  mainLabel: "Electronics",
  subLabel: "Computers & Accessories",
  values: ["Desktops", "Laptops", "Tablets"]
}
const brands = ["Nike", "Sony", "adidas", "Apple"]
const customerRating = [2, 3, 4, 5]

const ShopFiltersLG = () => {
  return (
    <div className='row gap-4 g-0 m-0'>
      <div className="w-fit d-flex gap-3 align-items-center p-0">
        <MainHeader text={"Filters"} extraClasses={"w-fit"} />
        <span className="d-flex rounded-circle main-bg" style={{width: "30px", height: "30px"}}>
          <IoFilter className='text-primary m-auto' />
        </span>
      </div>
      <div className="d-flex flex-wrap p-0" id="accordionExample">
        <CategoriesFilter categories={categories}/>
        <BrandsFilter brands={brands}/>
        <PriceFilter />
        <ColorFilter />
        <CustomerRatingFilter customerRating={customerRating} />
      </div>
    </div>
  )
}

export default ShopFiltersLG