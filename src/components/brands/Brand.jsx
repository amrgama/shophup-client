import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Brand = ({brand}) => {
  return (
    <Link to={"/"} className='d-flex flex-column'>
        <div className="d-flex rounded-circle main-bg mx-auto mb-3" style={{width: "100px", height: "100px"}}>
            <motion.img
              whileHover={{scale: 1.1}}
              transition={{duration: "0.2"}}
              src={brand.image} 
              alt="..." 
              className='d-block m-auto'
              style={{width: "50%", objectFit: "fill", objectPosition: "center"}}
            />
        </div>
        <span className="text-cener text-dark text-capitalize mx-auto">{brand.name}</span>
        <span className="fs-8 text-cener text-muted mx-auto">{brand.items} items</span>
    </Link>
  )
}

export default Brand