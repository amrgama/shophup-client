import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Category = ({category}) => {
  console.log("category", category)
  
  return (
    <li className="nav-item px-3 py-2">
      <Link to="" className="nav-link text-start p-0 fs-7">
        <span className="category-icon me-3" style={{display: "inline-flex", flexWrap: "wrap",width: "29px", height: "20px"}}>
            <img src={category.image} style={{display:"block", width: "100%", height: "100%", objectFit: "contain", objectPosition: "center"}} alt="..." />
        </span>
        <span>{category.label}</span>
      </Link>
    </li>
  )
}

export default Category