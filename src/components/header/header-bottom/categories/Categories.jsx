import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {motion, AnimatePresence} from "framer-motion"
import data from '../../../../assets/data';
import Category from './Category';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { useLocation } from 'react-router-dom';

const Categories = () => {
  const {pathname}= useLocation();
  const matches_lg= useMediaQuery("(min-width: 992px");
  const [show, setShow]= useState(matches_lg && pathname === "/")
  const renderedCategoriesItems= data.categories.map((category, i)=>{
    return <Category key={i} category={category} />
  })
  // console.log("matches_lg", matches_lg)
  useEffect(()=>{
    setShow(matches_lg && pathname === "/")
  },[matches_lg, pathname])

  function handleOnClick(){
    setShow(prev => !prev)
  }
  return (
    <div 
        className='col-lg-3 h-100 position-relative'
        style={{minWidth: "200px", maxWidth: "250px"}}
    >
        <button 
          onClick={handleOnClick}
          className={`btn-toggler ${show? "show": ""} w-100 h-100 d-flex align-items-center p-3 bg-primary`}
          style={{borderRadius: "0.25rem 0.25rem 0rem 0rem"}}
        >
            <span 
                className='text-white fw-bold me-3'
            >
                All Category
            </span>
            <HiOutlineMenuAlt3 className="ms-auto fs-5 bg-primary rounded-circle" />
        </button>
        <div className={`main-dropdown dropdown-top-100 border border-1 border-light ${show? "show": ""}`} 
          style={{height: "500px", borderRadius: "0 0 1rem 1rem"}}
        >
          <ul className="navbar-nav flex-column h-100 overflow-y-auto">
            {renderedCategoriesItems}
          </ul>
        </div>
    </div>
  )
}

export default Categories