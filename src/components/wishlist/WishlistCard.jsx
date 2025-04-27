import React from 'react'
import { BsStar } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {MdClose} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { removeFromWishList, selectWishList } from '../../features/wish-list/wishListSlice'
import { combineWithBaseURL } from '../../utilities/functions'

const WishlistCard = ({product}) => {
 const dispatch= useDispatch(selectWishList);
  return (
    <motion.div 
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="card h-100 border-0 p-2 p-sm-3 position-relative"
    >
        <div className="card-img-top d-flex h-100 position-relative mb-4">
          <img 
            src={combineWithBaseURL(product?.image)} 
            className="m-auto" 
            alt="..." 
            style={{maxWidth: "170px", width: "150px", height: "150px",}}
          />
        </div>
        <div className="card-body d-flex flex-column gap-2 p-0">
            <span className="brand text-muted me-auto mb-auto">{product?.category}</span>
            <h3 
              className="card-title fs-7 text-start lh-lg me-auto mb-auto"
            >
              {`${product?.title}`?.substring(0, 41)}
            </h3>
            <div className="rating-box d-flex flex-wrap align-items-center gap-2 me-auto mb-auto">
              <div className="d-flex align-items-center gap-2">
                <BsStar className='fs-5 text-warning' />
                <BsStar className='fs-5 text-warning' />
                <BsStar className='fs-5 text-warning' />
              </div>
              <span className="fs-7 text-muted text-start text-nowrap">{product.rating?.count} reviews</span>
            </div>
            <div className="price text-dark me-auto mb-auto">
              ${product.price}
              <strike className="ms-1 text-light">$30</strike>
            </div>
        </div>
        <div className="d-flex p-2 p-xl-3 position-absolute top-0 end-0">
          <motion.button
            onClick={()=> dispatch(removeFromWishList(product?.id))}
            whileHover={{color: "var(--bs-danger)"}}
            className="p-1 main-bg d-flex rounded-circle border-0"
            style={{color: "var(--bs-dark)"}}
          >
            <MdClose className='' />
          </motion.button>
        </div>
    </motion.div>
  )
}
// variants={{
//   initial: {opacity: 0, translateX: "-100%", originX: "right"},
//   animate: {opacity: 1, translateX: "0%", originX: "right"},
// }} 
export default WishlistCard