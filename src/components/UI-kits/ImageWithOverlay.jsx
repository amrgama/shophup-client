import React from 'react'
import { motion } from 'framer-motion'
const ImageWithOverlay = ({img, extraClasses, style, children}) => {
    const className = `position-relative overflow-hidden ${extraClasses ?? ""}`
    
    return (
        <motion.div
            initial="initial"
            animate="initial" 
            whileHover={"animate"}
            className={className}
            style={(style)? style: null}
        >
            <img 
                src={img} 
                alt={`${img}`} 
                className='w-100 h-100' 
                style={{objectFit:"fill", objectPosition: "center"}} 
            />
            <motion.div
                variants={overlay}
                className="d-flex align-items-center justify-content-center gap-2 position-absolute bottom-0 start-0 end-0"
                // style={{backgroundColor: "#00000045"}}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

const overlay = {
    initial: { translateY: "100%" , backgroundColor: "#00000045"},
    animate: { translateY: "0%", top: 0 , backgroundColor: "#00000045" },
    transition: {duration: 1.2}
}

export default ImageWithOverlay