import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WishlistButton from '../../UI-kits/WishlistButton'
import { BsStar } from 'react-icons/bs'
import { GoGitCompare } from 'react-icons/go'
import images from '../../../assets/images'
import { combineWithBaseURL } from '../../../helper/helper.js'

const Product = ({product}) => {
    return (
        <motion.div 
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="sale-product card h-100 flex-sm-row flex-xl-column border-0 ps-2 ps-sm-3 py-0 position-relative"
            style={{paddingRight: "calc(40px)"}}
        >
            <div className="col-sm-6 col-xl-12 d-flex h-auto position-relative">
                <img 
                src={images.bestSellerProducts.bestSellerProd1}
                className="m-auto" 
                alt="..." 
                style={{width: "300px", height: "250px", objectFit: "cover", objectPosition: "center"}}
                />
            </div>
            <div className="col-sm-6 col-xl-12 h-fit card-body d-flex flex-column gap-2 p-0 lh-lg">
                <span className="brand text-muted me-auto mb-auto">{product?.category}</span>
                <h3 
                    className="card-title fs-5 text-start me-auto mb-auto"
                >
                    {`${product?.title}`?.substring(0, 41)}...
                </h3>
                <div className="rating-box d-flex flex-wrap align-items-center gap-2 me-auto mb-auto">
                    <div className="d-flex align-items-center gap-2">
                    <BsStar className='fs-5 text-warning' />
                    <BsStar className='fs-5 text-warning' />
                    <BsStar className='fs-5 text-warning' />
                    </div>
                    <span className="fs-7 text-muted text-start text-nowrap">{product.rating?.count} reviews</span>
                </div>
                <div className="price me-auto mb-auto">
                    <span className='fs-5 text-dark'>${product.price}</span>
                    <strike className="ms-1 fs-7 text-light">$30</strike>
                </div>
            </div>
            {/* <div className="d-flex p-2 p-xl-3 position-absolute top-0 end-0"> */}
                <WishlistButton extraClasses={"position-absolute top-0 end-0"} product={product} />
            {/* </div> */}
            <div 
                className="w-100 d-flex flex-wrap justify-content-center position-absolute start-0 bottom-50"
            >
                <motion.span
                    variants={{
                        initial: {opacity: 0, translateY: "-100%", originX: "center"},
                        animate: {opacity: 1, translateY: "0%", originX: "center"},
                    }}
                    style={{height: "45px", display: "inline-block"}}
                    className='add-to-card-box m-2 my-lg-auto'
                >
                    <Link
                        to='/'
                        className='btn btn-primary px-4 py-2 text-white text-nowrap rounded-pill'
                    >
                        Add to Card
                    </Link>
                </motion.span>
                <motion.span
                    variants={{
                        initial: {opacity: 0, translateY: "-100%", originX: "center"},
                        animate: {opacity: 1, translateY: "0%", originX: "center"},
                        // transition: { duration: 0.2, delay: 0.2, type: "spring", stiffness: 1000}
                    }}
                    style={{height: "45px", display: "inline-block"}}
                    className='add-to-card-box d-flex m-2 my-lg-auto'
                >
                    <Link
                        to='/'
                        className='btn main-bg d-flex text-dark fs-5 rounded-pill m-auto'
                        style={{width: "45px", height: "45px"}}
                    >
                        <GoGitCompare className='fs-4 m-auto' />
                    </Link>
                </motion.span>
            </div>
        </motion.div>
    )
}

export default Product