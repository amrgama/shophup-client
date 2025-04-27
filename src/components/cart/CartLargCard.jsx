import React from 'react'
import ActionButton from '../UI-kits/ActionButton'
import LinkButton from '../UI-kits/LinkButton'

const CartLargCard = () => {
  return (
    <div 
      className='card col-12 col-lg-4 col-xl-3 text-start gap-3 px-4 py-4 rounded-4'
      style={{minWidth: "370px"}}
    >
      <span className="fs-5 fw-500 mb-4 me-auto">Cart totals</span>
      <div className="d-flex justify-content-between">
        <span className="fw-500">Subtotal</span>
        <span>$4,515.99</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="fw-500">Shipping method</span>
        <span>Free shipping</span>
      </div>
      <div className="d-flex justify-content-between mb-auto">
        <span className="fw-500">Shipping destination</span>
        <span>Shipping to CA.</span>
      </div>
      <hr className='my-2' />
      <div className="d-flex justify-content-between">
        <span className="fw-500">Total</span>
        <span>$4,615.00</span>
      </div>
      <LinkButton link={"#"} text="Proceed to checkout" extraClasses={"text-muted py-3"} />
    </div>
  )
}

export default CartLargCard