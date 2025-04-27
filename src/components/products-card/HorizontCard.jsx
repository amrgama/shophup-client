import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import { motion, AnimatePresence} from 'framer-motion'
import CardLink from './CardLink'

const HorizontCard = ({product}) => {
  return (
    <motion.div 
        initial="initial"
        animate="initial"
        whileHover="animate"
        className='w-100 d-flex flex-wrap align-items-center ps-4 pe-0 py-5 main-bg rounded-3'
    >
        <div 
            className="col-6 d-flex flex-column align-items-start gap-3"
            style={{maxWidth: "250px"}}
        >
            <span className="text-primary text-start fs-7 fw-500">
                Starting <br/> 
                <span className="fw-bold">from$899.</span>
            </span>
            <h3 className='text-dark text-start fs-2'>
                Health Care Monitor
            </h3>
            {/* <Link to={"/"} className='nav-link text-muted fw-500'>Shop Now</Link> */}
            
            <CardLink 
                to={"/"} 
                wrapperclasses={"text-muted"}
            >Shop Now</CardLink>
        </div>
        <div 
            className="col-6 d-flex p-0 ms-auto position-relative overflow-hidden" 
            style={{
                marginBottom: "-4.9rem"
            }}
        >
            <img 
                src={images.recentViewed.smartWatch} 
                alt="..." 
                className="w-100" 
                style={{objectFit: "contain", objectPosition: "center", zIndex: 2}}
            />
            <motion.div 
                variants={{
                    initial: {scale: 0, originX: "right"},
                    animate: {scale: 1, originX: "right"},
                }}
                className="circle-overlay position-absolute rounded-circle main-bg"
                style={{
                    width: "150%",
                    height: "150%",
                    right: "-50%",
                    bottom: "-50%",
                    mixBlendMode: "screen",
                    zIndex: 1
                }}
            ></motion.div>
        </div>
    </motion.div>
  )
}

export default HorizontCard