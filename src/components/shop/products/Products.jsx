import React, { useEffect, useState } from 'react'
import SmallVerticalCard from '../../products-card/SmallVerticalCard';
import { FaBriefcase } from "react-icons/fa6";
import useFetch from '../../../hooks/useFetch';
import ProductCards from './ProductCards';
import MainHeader from '../../UI-kits/MainHeader';
import { getUrl } from '../../../helper/helper.js';

const Products = () => {
    const {callApi, response: products, isloading, isSuccess, isError, errorMsg} = useFetch();
    console.log("getUrl()", getUrl())
    useEffect(()=>{
        callApi(`${getUrl()}/products?_limit=16`)
    }, [])

  return (
    <div className="d-flex flex-column gap-4 m-0 col">
        <div className='row g-0 gap-2 m-0 h-fit w-100 text-start'>
            <div className="w-fit d-flex gap-3 align-items-center">
                <MainHeader text={"Mobile & Tablet"} />
                <span className="d-flex rounded-circle main-bg" style={{width: "30px", height: "30px"}}>
                    <FaBriefcase className='fs-7 text-primary m-auto' />
                </span>
            </div>
            <p className="w-100 text-dark">Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</p>
        </div>
        <div className='row g-0 m-0 col'>
            {isSuccess && <ProductCards products={products} />}
        </div>
    </div>
  )
}

export default Products