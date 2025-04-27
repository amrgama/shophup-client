import React, { useEffect, useRef, useState } from 'react'
import {IoIosArrowDropdownCircle} from "react-icons/io"
import {motion, AnimatePresence} from "framer-motion"
import data from '../../../assets/data';
import Category from './Category';
import { useShow } from '../../../hooks/useShow';

const Categories = () => {
  const buttonRef = useRef();
  const {show, handleShowOnClick} = useShow(buttonRef.current);
  // console.log("categories", data.categories)
  const renderedCategoriesItems= data.categories.map((category, i)=>{
    return <Category key={i} category={category} />
  })

  return (
    <div className='col h-fit position-relative' style={{minWidth: "100px", maxWidth: "150px"}}>
        <button 
          ref={buttonRef}
          onClick={handleShowOnClick}
          className={`btn-toggler ${show? "show": ""} w-100 d-flex align-items-center p-0 bg-transparent`}
        >
            <span className='text-dark fs-7 me-auto'>All Category</span>
              <IoIosArrowDropdownCircle className="arrow bg-primary rounded-circle" />
        </button>
        <div className={`main-dropdown border-0 shadow rounded-3 p-1 ${show? "show": ""} mt-2`} style={{maxHeight: "300px"}}>
          <ul className="navbar-nav flex-column">
            {renderedCategoriesItems}
          </ul>
        </div>
    </div>
  )
}

export default Categories