import React from 'react'
import {FiSearch} from "react-icons/fi"
import Categories from './Categories'

const SearchInput = () => {
  return (
    <div className='search-wrapper w-100 position-relative'>
        <div className="search-box d-flex align-items-center position-relative" style={{padding: "0.5rem 65px 0.5rem 1rem"}}>
            <Categories />
            <div className="vr mx-2"></div>
            <input type="search" className='col-6 col-sm d-inline-block text-dark'/>
            <span 
                className="search-icon d-flex position-absolute top-0 end-0 rounded-pill bg-secondary"
                style={{width: "65px", height: "100%"}}
            >
                <span className='m-auto'>
                    <FiSearch className="fs-4 text-primary" />
                </span>
            </span>
        </div>
    </div>
  )
}

export default SearchInput