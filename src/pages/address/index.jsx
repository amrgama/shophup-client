import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MainHeader from '../../components/UI-kits/MainHeader';

const Address = () => {
    const addressRef = useRef();

  return (
    <motion.div 
        ref={addressRef} 
        id='#address'
        variants={variants}
        initial="initial"
        animate= "animate"
        exit="exit"
        transition={{
            duration: 0.3, 
            type: "spring", 
            stiffness: "60"
        }}
        className='address col-12 position-absolute top-0 start-0'
        style={{minHeight: "450px"}}
    >
        <MainHeader text={"Address"} extraClasses={"mb-4"} />
        <div className='d-flex flex-wrap gap-4'>
            <div className="col-12 col-sm d-flex flex-column justify-content-between">
                <div className="address-title col-12 d-flex align-items-center mb-4">
                    <span className="col fs-5 fw-500 text-dark text-start me-2">Billing Address</span>
                    <Link to={"/my-account/edit-address/billing"} className="btn px-3 py-1 fw-bold text-primary main-bg">Edit</Link>
                </div>
                <span className="col-12 d-block text-start mb-2">Daniel Robinson</span>
                <span className="col-12 d-block text-start mb-2">1418 River Drive, Suite 35 Cottonhall, CA 9622</span>
                <span className="col-12 d-block text-start text-capitalize lh-lg mb-4">United States</span>
                <span className="col-12 d-block text-start">sale@zenmart.com</span>
                <span className="col-12 d-block text-start">+3 8493 92 932 021</span>
            </div>
            <div className="col-12 col-sm d-flex flex-column justify-content-between">
                <div className="address-title col-12 d-flex align-items-center mb-4">
                    <span className="col fs-5 fw-500 text-dark text-start me-2">Billing Address</span>
                    <Link to={"/my-account/edit-address/shipping"} className="btn px-3 py-1 fw-bold text-primary main-bg">Edit</Link>
                </div>
                <span className="col-12 d-block text-start mb-2">Daniel Robinson</span>
                <span className="col-12 d-block text-start mb-2">1418 River Drive, Suite 35 Cottonhall, CA 9622</span>
                <span className="col-12 d-block text-start text-capitalize lh-lg mb-4">United States</span>
                <span className="col-12 d-block text-start">sale@zenmart.com</span>
                <span className="col-12 d-block text-start">+3 8493 92 932 021</span>
            </div>
        </div>
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
export default Address