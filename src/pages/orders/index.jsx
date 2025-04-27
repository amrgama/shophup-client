import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import OrderTable from '../../components/orders/OrderTable';
import MainHeader from '../../components/UI-kits/MainHeader';

const Orders = () => {
    const orderRef = useRef();

    return (
        <motion.div 
            ref={orderRef} 
            id='#order'
            variants={variants}
            initial="initial"
            animate= "animate"
            exit="exit"
            transition={{
                duration: 0.3, 
                type: "spring", 
                stiffness: "60"
            }}
            className='order col-12 position-absolute top-0 start-0'
            style={{minHeight: "450px"}}
        >
            <MainHeader text={"Orders"} extraClasses={"mb-4"} />
            <div 
                className=""
                style={{maxWidth: "100%"}}
            >
               <OrderTable />
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

export default Orders