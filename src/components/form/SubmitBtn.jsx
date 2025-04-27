import React from 'react'
import Lottie from "lottie-react"
import spinnerLoading from "../../assets/animation/loading.json"
import { AnimatePresence, motion } from 'framer-motion'

const SubmitBtn = ({text, isLoading, isDisabled, onClick, extraClasses}) => {

    return(
        <div
            className={`btn-wrapper w-100 h-100 rounded-pill position-relative ${extraClasses}`}
        >
            {/* <AnimatePresence mode='wait' initial="false">
                { isLoading &&
                    <motion.span 
                    initial= {{ opacity: 0, y: -60 }}
                    animate= {{ opacity: 1, y: 0 }}
                    exit={{opacity: 0, y: -60}}
                    transition={{duration: 0.3}}
                    className='loading-animation btn border border-primary w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center px-3 fs-5'>
                        <Lottie  animationData={spinnerLoading} />
                    </motion.span>
                }
            </AnimatePresence> */}
            <AnimatePresence mode='wait' initial="false">
                {/* { !isLoading && */}
                <button
                type='submit' 
                disabled={isLoading}
                // onClick={onClick? onClick: ()=> {}}
                className={`btn ${!isLoading? "btn-primary": "border border-primary"} w-100 h-100 position-absolute top-0 start-0 px-3 fw-bold text-white ${isDisabled? "disabled": ""}`}>
                    {
                        isLoading?
                            <AnimatePresence mode='wait' initial="false">
                                { isLoading &&
                                    <motion.span 
                                    initial= {{ opacity: 0 }}
                                    animate= {{ opacity: 1 }}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.3}}
                                    className='loading-animation w-100 h-100 d-flex flex-wrap fs-5 m-auto'>
                                        <Lottie  animationData={spinnerLoading} className='w-100 h-100' />
                                    </motion.span>
                                }
                            </AnimatePresence>
                        :
                            text
                    }
                    {/* {text} */}
                </button>
                {/* } */}
            </AnimatePresence>
        </div>
    )
}

export default SubmitBtn