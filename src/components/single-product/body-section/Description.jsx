import React from 'react'
import img1 from "../../../assets/images/MacBook_Pro_14-in_16-1.webp";
import img2 from "../../../assets/images/MacBook_Pro_14-in_16-2.webp";
import img3 from "../../../assets/images/MacBook_Pro_14-in_16-3.webp";
import { motion } from 'framer-motion';

const Description = ({description}) => {
  return (
    <motion.div 
        id="description" 
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
        style={{minHeight: "200px"}}
    >
        <p className="">
            {description}
        </p>
        {/* <span className="text-capitalize fs-5 fw-500">
            More Information
        </span>
        <div>
            <span className="d-block fw-500 mb-3">
                Powerful performance
            </span>
            <ul className='d-flex flex-column gap-2 ps-3'>
                <li className="">English-language MacBook Pro</li>
                <li className="">10-core Apple M1 Pro chip for a giant leap in CPU, GPU, and machine learning performance</li>
                <li className="">16GB of RAM so everything you do is fast and fluid</li>
                <li className="">16-core Neural Engine for advanced machine learning</li>
                <li className="">16-core GPU</li>
                <li className="">Ultrafast 1TB solid state drive (SSD) is blazing fast, so you can take all your photos and videos with you no matter.</li>
            </ul>
        </div>
        <div>
            <span className="d-block fw-500 mb-3">
                Display and audio
            </span>
            <ul className='d-flex flex-column gap-2 ps-3'>
                <li className="">16.2-inch liquid retina XDR display delivers a responsive and natural viewing experience</li>
                <li className="">3456 x 2234 native resolution with support for millions of colours</li>
                <li className="">ProMotion technology for adaptive refresh rates up to 120Hz</li>
                <li className="">Studio-quality three-mic array with high signal-to-noise ratio and directional beamforming</li>
                <li className="">High fidelity six speaker sound system with forece-cancelling woofers</li>
            </ul>
        </div> */}
        {/* <div className='d-flex flex-column flex-wrap'>
            <img src={img1} alt="Mac_Book_Pro" style={{width: "100%", objectFit: "contain", objectPosition: "center"}} />
            <img src={img2} alt="Mac_Book_Pro" style={{width: "100%", objectFit: "contain", objectPosition: "center"}} />
            <img src={img3} alt="Mac_Book_Pro" style={{width: "100%", objectFit: "contain", objectPosition: "center"}} />
        </div> */}
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

export default Description