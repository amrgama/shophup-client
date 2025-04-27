import React, { useEffect, useRef, useState } from 'react'
import ActionButton from './ActionButton'
import {addToCart} from "../../features/cart/cartSlice"
import { useDispatch } from 'react-redux'

const AddToCartButton = ({product, qty, ...props}) => {
  qty = qty ?? 1;
  const [isAdded, setIsAdded]= useState(false);
  const dispatch= useDispatch();
  const timeOutId= useRef();
  function action(){
    dispatch(addToCart(product, qty))
    setIsAdded(true);
  }
  console.log("isAdded", isAdded);
  useEffect(()=>{
    if(isAdded){
      timeOutId.current= setTimeout(()=>{
        setIsAdded(false);
      }, 1200)
    }
    else{
      clearTimeout(timeOutId.current);
    }
  }, [isAdded])
  console.log("props", props);
  return (
    <ActionButton
      action={action}
      text={"Add To Cart"}
      {...props}
      isAdded={isAdded}
      extraClasses={`rounded-pill ${!!props?.extraClasses && props?.extraClasses}`}
    />
  )
}

export default AddToCartButton