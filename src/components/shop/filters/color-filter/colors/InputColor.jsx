import React from 'react'
import { animate, motion } from 'framer-motion'

const InputColor = ({color, selectedColor, setSelectedColor}) => {
    
  return (
    <span className={`color text-nowrap ${(color.value === selectedColor)? "text-secondary": ""} fs-8`}>
        <motion.span
            onClick={e => setSelectedColor(color.value)} 
            variants={variants}
            animate= {(color.value === selectedColor)? "animate": "stop"}
            className={`input-color d-inline-block border border-1 me-1 rounded-circle ${(color.value === selectedColor)? "text-secondary ": ""}`}
            style={{width: "25px", height: "25px", backgroundColor: color.value, cursor: "pointer"}}
        ></motion.span>
        ({color.countity})
    </span>
  )
}

const variants = {
    animate: {boxShadow: "none", scale: 0.9},
    stop: {boxShadow: "0px 1px 2px #ababab", scale: 1},
    transition: { duration: 0.2}
}
export default InputColor