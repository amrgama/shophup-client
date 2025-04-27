import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence} from 'framer-motion'

const AnimatedLink = ({to, active, mode, lineStart, wrapperclasses, children}) => {
  return (
    <motion.span
        initial="initial"
        animate="initial"
        whileHover="animate"
        className={`d-inline-block text-${mode} ${wrapperclasses? wrapperclasses: ""}`}
        style={{borderStyle: "solid", borderWidth: "0px"}}
    >
        <Link 
            to={to} 
            className={`nav-link w-100 text-capitalize ${active? "active": ""}`}
        >
            {children}
        </Link>
        {
            active?
                <span 
                    className={`d-block w-100 bg-${mode} rounded-pill`}
                    style={{height: "2px"}}
                ></span>
            :
                <motion.span 
                    variants={{
                        initial: {width: `${lineStart ?? "0%"}`, originX: "left"},
                        animate: {width: "100%", originX: "left"}
                    }}
                    className={`d-block bg-${mode} rounded-pill`}
                    style={{height: "2px"}}
                >  
                </motion.span>
        }
    </motion.span>
  )
}

export default AnimatedLink