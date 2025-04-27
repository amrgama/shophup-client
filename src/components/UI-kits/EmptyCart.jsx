import Lottie from 'lottie-react'
import React from 'react'
import emptyCartAnimation from "../../assets/animation/empty-cart-animation.json"

const EmptyCart = () => {
  return (
    <div className='w-100 d-flex flex-column align-itemd-center gap-4 flex-grow-1'>
        <span className="fs-5 fw-500 text-muted text-center">There is no products in your cart yet.</span>
        <Lottie animationData={emptyCartAnimation} loop={true} />
    </div>
  )
}

export default EmptyCart