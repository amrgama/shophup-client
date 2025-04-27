import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import InvoicesTable from '../../components/invoices/InvoicesTable';
import MainHeader from '../../components/UI-kits/MainHeader';

const Invoices = () => {
    const invoicesRef = useRef();

    return (
        <motion.div 
            ref={invoicesRef} 
            id='#invoices'
            variants={variants}
            initial="initial"
            animate= "animate"
            exit="exit"
            transition={{
                duration: 0.3, 
                type: "spring", 
                stiffness: "60"
            }}
            className='invoices col-12 position-absolute top-0 start-0'
            style={{minHeight: "450px"}}
        >
            <MainHeader text={"Invoices"} extraClasses={"mb-4"} />
            <div 
                className=""
                style={{maxWidth: "100%"}}
            >
                <InvoicesTable />
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

export default Invoices