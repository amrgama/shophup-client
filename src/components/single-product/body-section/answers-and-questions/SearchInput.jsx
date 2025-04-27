import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import ActionButton from '../../../UI-kits/ActionButton';

const SearchInput = () => {
  return (
    <div className='d-flex align-items-center justify-content-center gap-5' style={{height: "55px"}}>
        <div className="col h-100 d-flex align-items-center gap-1 p-3 main-bg rounded-3" style={{maxWidth: "800px"}}>
            <IoSearchOutline className='fs-5' />
            <input type="search" placeholder='search' className='text-dark bg-transparent border-0'/>
        </div>
        <ActionButton text={"Search"} extraClasses={"w-fit h-100 text-white fw-500 px-4"} />
    </div>
  )
}

export default SearchInput