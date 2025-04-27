import React, { useState } from 'react'
import {MdClose} from "react-icons/md"
// import {AiOutlineMinus} from "react-icons/ai"
// import {FiPlus} from "react-icons/fi"
import QuantityInput from '../UI-kits/inputs/QuantityInput'
import { motion } from 'framer-motion'
import { removeFromCart } from '../../features/cart/cartSlice'
import { combineWithBaseURL } from '../../utilities/functions'

const CartCard = ({product, quantity}) => {
  const [data, setData] = useState({product, quantity})
  console.log("data", data)
  const handleQuantity = (value)=>{
    setData({...data, quantity: value})
  }
  
  function onClick(){
    removeFromCart(product.id)
  }
console.log("data?.product>>", data?.product);
  return (
    <div className='w-100 d-flex gap-3 px-3 py-4 position-relative shadow rounded-3'>
      <div className="col-3">
        <img 
          src={combineWithBaseURL(data?.product?.image)} 
          alt="..." 
          className='w-100 h-100 m-auto' 
          style={{maxHeight: "100%", objectFit: "contain", objectPosition: "center"}}
        />
      </div>
      <div className="col-9 h-auto d-flex flex-column pe-5">
        <h4 className='d-block fw-500 fs-7 text-start text-dark mb-3'>{data?.product?.title}</h4>
        <div className="d-flex flex-column">
          <span className="price fw-500 text-secondary fs-8 main-bg p-2 rounded-pill mx-auto">${(+data?.product?.price * +data?.quantity) || 500}</span>
          <QuantityInput cb={handleQuantity} max={10}/>
        </div>
      </div>
      <motion.button 
        onClick={onClick}
        initial={{color: "#495057"}}
        whileHover={{color: "#ff2020"}}
        className="d-flex main-bg p-0 border rounded-circle position-absolute top-0 end-0 mt-2 me-2"
        style={{width: "30px", height: "30px"}}
      >
        <MdClose className='m-auto'/>
      </motion.button>
    </div>
  )
}

export default CartCard