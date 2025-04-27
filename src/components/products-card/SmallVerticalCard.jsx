import React from 'react'
import { BsStar } from 'react-icons/bs'
import {GoGitCompare} from "react-icons/go"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WishlistButton from '../UI-kits/WishlistButton'
import AddToCartButton from '../UI-kits/AddToCartButton'
import { combineWithBaseURL } from '../../utilities/helper'

const SmallVerticalCard = ({product}) => {
  // const renderedRateItems = new Array(product?.rating?.rate).map((item, i)=>{
  //   return (
  //     <BsStar className='fs-5 text-warning' />
  //   )
  // })
 console.log("product?.images", product?.images)
  return (
    <motion.div 
      initial="initial"
      animate="initial"
      whileHover="animate"
      // transition="initial"  px-0 py-3 p-sm-3 p-lg-4
      className="card h-100 border-0 p-3 p-sm-3 position-relative"
    >
        <div className="card-img-top d-flex h-100 position-relative mb-4">
          <img 
            src={combineWithBaseURL(product?.images?.[0])} 
            className="m-auto" 
            alt="..." 
            style={{width: "150px", height: "110px",}}
          />
        </div>
        <div className="card-body d-flex flex-column gap-2 p-0">
            <span className="brand text-muted me-auto mb-auto">{product?.category}</span>
            <h3 
              className="card-title fs-7 text-start lh-base me-auto mb-auto"
            >
              <Link to={`/shop/single-product/${product?.id}`} className='nav-link'>
                {`${product?.title}`?.substring(0, 41)}...
              </Link>
            </h3>
            <div className="rating-box d-flex flex-wrap align-items-center gap-2 me-auto mb-auto">
              <div className="d-flex align-items-center gap-2">
                <BsStar className='text-warning' />
                <BsStar className='text-warning' />
                <BsStar className='text-warning' />
              </div>
              <span className="fs-7 text-muted text-start text-nowrap">{product.rating?.count} reviews</span>
            </div>
            <div className="price text-dark me-auto mb-auto">
              ${product.price}
              <strike className="ms-1 text-light">$30</strike>
            </div>
        </div>
        <div className="d-flex p-2 p-xl-3 position-absolute top-0 end-0">
          <WishlistButton  product={product} />
        </div>
        <div 
            className="w-100 d-flex flex-wrap justify-content-center position-absolute start-0 bottom-50"
          >
          <motion.span
            variants={{
              initial: {opacity: 0, translateY: "-100%", originX: "center"},
              animate: {opacity: 1, translateY: "0%", originX: "center"},
            }}
            style={{height: "40px", display: "inline-block"}}
            className='add-to-card-box m-2 my-lg-auto'
          >
            {/* <button
              className='btn btn-primary px-4 py-2 text-white text-nowrap fs-7 rounded-pill'
            >
              Add to Card
            </button> */}
            <AddToCartButton product={product} extraClasses="fs-7" style={{width: "99px"}}/>
          </motion.span>
          <motion.span
            variants={{
              initial: {opacity: 0, translateY: "-100%", originX: "center"},
              animate: {opacity: 1, translateY: "0%", originX: "center"},
              // transition: { duration: 0.2, delay: 0.2, type: "spring", stiffness: 1000}
            }}
            style={{height: "40px", display: "inline-block"}}
            className='add-to-card-box d-flex m-2 my-lg-auto'
          >
            <Link
              to='/'
              className='btn main-bg d-flex text-dark fs-6 rounded-pill m-auto'
              style={{width: "40px", height: "40px"}}
            >
              <GoGitCompare className='fs-4 m-auto' />
            </Link>
          </motion.span>
        </div>
    </motion.div>
  )
}
// variants={{
//   initial: {opacity: 0, translateX: "-100%", originX: "right"},
//   animate: {opacity: 1, translateX: "0%", originX: "right"},
// }} 
export default SmallVerticalCard