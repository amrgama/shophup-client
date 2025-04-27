import React, { useRef, useState } from 'react'
import CategoriesFilter from './CategoriesFilter'
import BrandsFilter from './BrandsFilter'
import PriceFilter from './PriceFilter'
import ColorFilter from './color-filter/ColorFilter'
import CustomerRatingFilter from './CustomerRatingFilter'
import { IoFilter } from "react-icons/io5";
import { useShow } from '../../../hooks/useShow'
import MainHeader from '../../UI-kits/MainHeader'

const categories = {
  mainLabel: "Electronics",
  subLabel: "Computers & Accessories",
  values: ["Desktops", "Laptops", "Tablets"]
}
const brands = ["Nike", "Sony", "adidas", "Apple"]
const customerRating = [2, 3, 4, 5]

const ShopFiltersSM = () => {
    const buttonRef = useRef();
    const {show, handleShowOnClick} = useShow(buttonRef.current)

  return (
    <div>
        <div className='position-relative p-0'>
        <button 
            ref={buttonRef}
            onClick={handleShowOnClick}
            className={`btn-toggler ${show? "show": ""} w-100 d-flex gap-3 align-items-center justify-content-between px-4 py-0 rounded-pill main-bg`}
            type="button" 
            data-toggle="dropdown" 
            aria-expanded="false"
        >
            <MainHeader text={"Filters"} />
            <IoFilter className='text-primary ms-auto' />
        </button>
        <div 
            className={`filter-dropdown shadow p-4 rounded-3 mt-3 main-bg ${show? "show": ""}`}
            style={{height: "400px"}}
        >
            <div 
                className="d-flex flex-wrap p-0"
            >
                <CategoriesFilter categories={categories} extraClasses={"order-0 main-bg"}/>
                <BrandsFilter brands={brands} extraClasses={"order-0 main-bg"}/>
                <PriceFilter extraClasses={"order-0 main-bg"} />
                <ColorFilter extraClasses={"order-0 main-bg"} />
                <CustomerRatingFilter customerRating={customerRating} extraClasses={"order-0 main-bg"} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShopFiltersSM