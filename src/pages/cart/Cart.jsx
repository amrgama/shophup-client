import React from 'react'
import CartTable from '../../components/cart/cart-table/CartTable'
import CartLargCard from '../../components/cart/CartLargCard'
import ActionButton from '../../components/UI-kits/ActionButton'
import Features from '../../components/features/Features'
import Coupon from '../../components/cart/Coupon'
import bar from "../../assets/images/bar.png"

const Cart = () => {
  return (
    <div id='cart'>
        <div className="container py-5">
            <span className="fs-3 fw-500 lh-lg">Shipping Cart</span>
            <div className="w-100 p-2 mt-3">
              <p className="w-100 text-center text-dark fw-500">Buy $98.00 more to enjoy FREE Shipping</p>
              <img src={bar} alt="bar" style={{width: "400px"}} />
            </div>
        </div>
        <div className="container py-5">
            <div className="row gap-5 m-0 m-lg-1">
                <div className="col-12 col-lg d-flex flex-column justify-content-between gap-3 p-0">
                    <CartTable />
                    {/* <div className="d-flex justify-content-between mt-auto">
                        <ActionButton text="Update cart" />
                    </div> */}
                    <Coupon />
                </div>
                <CartLargCard />
            </div>
        </div>
        <Features className={"border-top border-1"}/>
    </div>
  )
}

export default Cart