import React from 'react'
import {FiPlus} from "react-icons/fi"
import { motion } from 'framer-motion'

const PlusButton = ({setValue, disable, extraClasses}) => {
    const className = `btn btn-white p-0 border rounded-circle d-flex shadow-sm ${disable? "disabled": ""} ${extraClasses ?? ""}`
    const onClick = (e)=>{
        setValue(prev => prev + 1 );
    }

    return (
        <motion.button
            whileHover={{backgroundColor: `rgb(245, 195, 75)`}}
            onClick={onClick}
            type='button'
            className={className}
            style={{minWidth: "35px", minHeight: "35px"}}
        >
            <FiPlus className='m-auto' />
        </motion.button>
    )
}

export default PlusButton