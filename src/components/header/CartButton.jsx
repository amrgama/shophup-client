import React, { useEffect, useState } from 'react'
import {BsCart4} from "react-icons/bs"
import OffcanvasRight from '../offcanvas/OffcanvasRight'
import CartCard from '../cart/CartCard'
import { Link } from 'react-router-dom'
import bar from "../../assets/images/bar.png"
import LinkButton from '../UI-kits/LinkButton'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, setCart } from '../../features/cart/cartSlice'
import initialCartConfig from '../../config/initialCartConfig'
import EmptyCart from '../UI-kits/EmptyCart'


const CartButton = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector(selectCart)
  console.log("cart>>", cart)
  const [renderedCartProds, setRenderedCartProds]= useState([]);
  // const renderedCartProducts = setRenderedCartProds(cart?.items?.map((item, i)=>{
  //   console.log("item", item)
  //   return <CartCard key={i} {...item} product={item?.product} />
  // }))
  
  console.log("cartincartbutton", cart);
  useEffect(()=>{
    dispatch(setCart(initialCartConfig))
  }, [])
  useEffect(()=>{
    setRenderedCartProds(cart?.items?.map((item, i)=>{
      console.log("item", item)
      return <CartCard key={i} {...item} product={item?.product} />
    }))
  }, [cart?.totalPrice])
  return (
    <div className="box-cart d-flex align-items-center">
        <button 
          type="button" 
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="btn btn-cart d-flex p-0 bg-transparent rounded-circle border border-1 border-light" 
          style={{width: "40px", height:"40px"}}
        >
          <BsCart4 className="fs-5 m-auto"/>
        </button>
        <span className="cart-total-price ms-2 fs-7 text-dark">{Number(cart.totalPrice).toPrecision(4)}</span>
        <OffcanvasRight 
          title={"Shopping Cart"} 
          target={"offcanvasRight"} 
        >
          <div className="w-100 h-100 d-flex flex-column">
            {
              !!!cart?.items?.length?
                <EmptyCart />
              :
                <>
                  <div className="mb-auto overflow-y-aut" style={{maxHeight: "427px"}}>
                    {renderedCartProds}
                  </div> 
                  <div className="total-price text-dark fs-5 fw-500 mt-2">
                    Total : <span className="text-secondary">${cart?.totalPrice}</span>
                  </div>
                </>
            }
            <hr className="mx-0 my-2" />         
            <div className="w-100 mt-3">
              <p className="w-100 text-center text-dark fw-500">Buy $98.00 more to enjoy FREE Shipping</p>
              <img className='w-100' src={bar} alt="bar" />
            </div>
            <div className="w-100 d-flex align-items-center gap-3">
              <div className="col">
                <LinkButton 
                  text={"View cart"} 
                  link={"/cart"} 
                  extraClasses={"nav-link text-dark lh-lg border border-2 border-secondary"} 
                />
              </div>
              <div className="col">
                <Link
                  to={"/order"}        
                  className='btn btn-secondary w-100 text-dark fw-500 py-2 lh-lg'
                  // style={{width: "170px"}}
                >
                  Go to Checkout
                </Link>
              </div>
            </div>
          </div>
        </OffcanvasRight>
    </div>
  )
}

export default CartButton