import React from 'react'
import data from '../../assets/data'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const randomIndex = Math.floor( Math.random() * (7 - 1+1) + 1 );
    
    return (
    <div className='category-card w-100 h-100 d-flex flex-wrap justify-content-center gap-3 p-3 shadow rounded-3'>
        <div 
            className="d-flex rounded-circle main-bg my-auto" 
            style={{width: "110px", height: "110px"}}
        >
            <motion.img
                whileHover={{scale: 1.1}}
                transition={{duration: "0.2"}}
                className='d-block w-50 m-auto'
                style={{maxHeight: "70px", objectFit: "contain", objectPosition: "center"}}
                src={category?.image} 
                alt="..." 
            />
        </div>
        <div className="w-auto d-flex flex-wrap flex-column align-items-center">
            <span className="fw-bold text-cener text-dark text-capitalize">{category.label}</span>
            <span className="fs-8 text-cener text-muted">{category?.values.length} items</span>
            <Link to={"/"} className='nav-link text-dark fw-500 lh-lg'>View All</Link>
        </div>
    </div>
  )
}

export default CategoryCard