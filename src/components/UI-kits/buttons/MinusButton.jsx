import React from 'react'
import {AiOutlineMinus} from "react-icons/ai"
import { motion } from 'framer-motion'

const MinusButton = ({setValue, disable, extraClasses}) => {
    const className = `btn btn-white p-0 border rounded-circle d-flex shadow-sm ${disable? "disabled": ""} ${extraClasses ?? ""}`
    const onClick = (e)=>{
        setValue(prev => prev - 1 );
    }

    return (
        <motion.button
            whileHover={{backgroundColor: `rgb(245, 195, 75)`}}
            onClick={onClick}
            type='button'
            className={className}
            style={{minWidth: "35px", minHeight: "35px"}}
        >
          <AiOutlineMinus className='m-auto' />
        </motion.button>
    )
}

export default MinusButton