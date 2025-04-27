import React, { useState } from 'react'
import {AiOutlineMinus} from "react-icons/ai"
import {FiPlus} from "react-icons/fi"
import AddToCartButton from '../../../UI-kits/AddToCartButton'
import WishlistButton from '../../../UI-kits/WishlistButton'
import trukImg from '../../../../assets/images/truck.png'
import returnImg from '../../../../assets/images/return.png'
import soldByImg from '../../../../assets/images/sold-by.png'
import CompareButton from '../../../UI-kits/CompareButton'
import { BsStar } from 'react-icons/bs';

const AddToCartCard = ({productData}) => {
  const [count, setCount]= useState(productData?.qty ?? 0);
  const [selectedColor, setSelectedColor]= useState(null);
  const arrayLength = Math.floor(productData?.rating?.rate);
  const renderedStars = Array.from({length: arrayLength}).map((item, i)=>{
    return <BsStar key={i} className='text-warning'/>
  })
  const renderedColors= productData?.colors?.map((color)=>{
    return (
      <button 
        key={color}
        type="button" 
        onClick={(e)=> setSelectedColor(color)}
        className={`btn d-flex p-0 rounded-circle border shadow ${selectedColor == color? "border-2 border-white": ""}`} 
        style={{width: "30px", transform: selectedColor == color? "scale(0.8)": "scale(1)", height:"30px", transform: selectedColor == color? "scale(0.8)": "scale(1)", backgroundColor: color ?? "", transitionDuration: "100ms"}}
      />
    )
  })
  const minusCount= (e)=> setCount(prev=> (prev >= 0)? --prev: prev);
  const increaseCount= (e)=> setCount(prev=> ++prev);
  return (
    <div className='card gap-4 col main-bg border-0' style={{minWidth: "270px"}}>
      <div className="reviews d-flex align-items-center gap-3">
        <div className='d-flex gap-1'>
          {renderedStars}
        </div>
        <span className="text-muted">{productData?.rating?.count} reviews</span>
      </div>
      <div className="availability d-flex align-items-center gap-4 fw-500">
        Availability
        <span className="py-1 px-4 bg-danger rounded-pill text-white lh-medium">{productData?.inStock? "in stock": "out of stock"}</span>
      </div>
      <div className="colors d-flex align-items-center gap-3">
        {renderedColors}
      </div>
      <span className="d-block fs-3 fw-bold text-start text-dark">${productData?.price || "4,500.00"} <strike className="fs-5 text-muted">${((productData?.discount ?? 0) * productData?.price) || "5,000"}</strike> </span>
      <div className="countity w-100 d-flex align-items-center py-2 px-3 bg-white rounded-pill mt-auto">
        <button 
          onClick={minusCount}
          className="minus-btn btn btn-white border rounded-circle d-flex flex-wrap p-0 shadow-sm"
          style={{width: "30px", height: "30px"}}
        >
          <AiOutlineMinus className='shrink-0 m-auto' />
        </button>
          <hr className='col m-auto'/>
          <span className="fw-500 text-dark mx-2">{count || "0"}</span>
          <hr className='col m-auto'/>
        <button 
          onClick={increaseCount}
          className="plus-btn btn btn-white border rounded-circle d-flex flex-wrap p-0 shadow-sm"
          style={{width: "30px", height: "30px"}}
        >
          <FiPlus className='shrink-0 m-auto' />
        </button>
      </div>
      <AddToCartButton product={productData} qty={count} isDisabled={!!!count} />
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
        <WishlistButton text={"WishList"}  product={productData} extraClasses={"border-0"} />
        <CompareButton text={"Compare"} extraClasses={"border-0"} />
      </div>
    </div>
  )
}

export default AddToCartCard