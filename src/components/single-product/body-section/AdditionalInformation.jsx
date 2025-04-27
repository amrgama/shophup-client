import React from 'react'
import { motion } from 'framer-motion'

const AdditionalInformation = () => {
  return (
    <motion.div 
        id="additional-information"
        variants={variants}
        initial="initial"
        animate= "animate"
        exit="exit"
        transition={{
            duration: 0.3, 
            type: "spring", 
            stiffness: "60"
        }}
        className='d-flex flex-column gap-3 text-start'
    >
        <ul className="navbar-nav">
            <li className="nav-item p-4 main-bg">
                <span className='w-100 d-inline-block fw-500 me-5' style={{minWidth: "150px", maxWidth: "160px"}}>Brand</span>
                <span>Apple</span>
            </li>
            <li className="nav-item p-4">
                <span className='w-100 d-inline-block fw-500 me-5' style={{minWidth: "150px", maxWidth: "160px"}}>Screen Size</span>
                <span>16.2 Inches</span>
            </li>
            <li className="nav-item p-4 main-bg">
                <span className="w-100 d-inline-block fw-500 me-5" style={{minWidth: "150px", maxWidth: "160px"}}>Color</span>
                <span>Space Gray</span>
            </li>
            <li className="nav-item p-4">
                <span className="w-100 d-inline-block fw-500 me-5" style={{minWidth: "150px", maxWidth: "160px"}}>CPU Model</span>
                <span>Apple M1</span>
            </li>
            <li className="nav-item p-4 main-bg">
                <span className="w-100 d-inline-block fw-500 me-5" style={{minWidth: "150px", maxWidth: "160px"}}>Ram Memory Installed Size</span>
                <span>16 GB</span>
            </li>
            <li className="nav-item p-4">
                <span className="w-100 d-inline-block fw-500 me-5" style={{minWidth: "150px", maxWidth: "160px"}}>Operating System</span>
                <span>Mac OS</span>
            </li>
            <li className="nav-item p-4 main-bg">
                <span className="w-100 d-inline-block fw-500 me-5" style={{minWidth: "150px", maxWidth: "160px"}}>Graphics Card Description</span>
                <span>Integrated</span>
            </li>
            <li className="nav-item p-4">
                <span className="w-100 d-inline-block fw-500 me-5" style={{minWidth: "150px", maxWidth: "160px"}}>Graphics Coprocessor</span>
                <span>M1 Pro</span>
            </li>
        </ul>
    </motion.div>
  )
}

const variants = {
    "initial": {
        visibility: "hidden", 
        opacity: 0, 
        position: "absolute", 
        translateY: "100%" 
    },
    "animate": {
        visibility: "visible", 
        opacity: 1, 
        position: "relative", 
        translateY: "0%"
    },
    "exit": {
        visibility: "hidden", 
        opacity: 0, 
        position: "absolute", 
        translateY: "-100%"
    }
}

export default AdditionalInformation