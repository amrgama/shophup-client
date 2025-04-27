import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence} from 'framer-motion'

const CardLink = ({to, wrapperclasses, children}) => {
  return (
    <span
        className={`d-inline-block ${wrapperclasses? wrapperclasses: ""}`}
        style={{borderStyle: "solid", borderWidth: "0px"}}
    >
        <Link 
            to={to} 
            className={`nav-link w-100 text-capitalize fw-500`}
        >
            {children}
        </Link>
        <motion.span 
            variants={{
                initial: {width: "15%", originX: "left"},
                animate: {width: "100%", originX: "left"}
            }}
            className="d-block bg-dark rounded-pill"
            style={{height: "5px"}}
        >  
        </motion.span>
    </span>
  )
}

export default CardLink