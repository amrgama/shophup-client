import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import spinnerLoading from "../../assets/animation/loading.json"
import successAnimation from "../../assets/animation/success-animation.json"

const ActionButton = ({text, icon, type, action, isLoading, isAdded, isDisabled, extraClasses, style}) => {
    
    const className= `btn btn-secondary d-flex position-relative fw-500 py-2 border ${(isDisabled)? "disabled": ""} ${extraClasses ?? ""}`
    
    function callAction(e){
        console.log("actionCalled");
        action();
    }
    console.log("style", style)
    return (
        <button
            type={type ?? "button"}
            onClick={callAction}      
            className={className}
            style={{maxHeight: "42px", height: "42px", ...style}}
        >
            <AnimatePresence mode='wait' initial="false">
                { isLoading &&
                    <motion.span 
                    initial= {{ opacity: 0, y: -60 }}
                    animate= {{ opacity: 1, y: 0 }}
                    exit={{opacity: 0, y: -60}}
                    transition={{duration: 0.3}}
                    className='m-auto fs-5'>
                        <Lottie  animationData={spinnerLoading} />
                    </motion.span>
                }
            </AnimatePresence>            
            <AnimatePresence mode='wait' initial="false">
                { isAdded &&
                    <motion.span 
                    initial= {{ opacity: 0, x: -5 }}
                    animate= {{ opacity: 1, x: 0 }}
                    exit={{opacity: 0, x: 0, visibility: "hidden", position: "absolute"}}
                    transition={{duration: 0.3}}
                    className='d-block fs-5' style={{height: "30px", width: "30px", position: "absolute", left: "50%", top:"1px", marginLeft: "-15px"}}>
                        <Lottie  animationData={successAnimation} />
                    </motion.span>
                }
            </AnimatePresence>            
            <AnimatePresence mode='wait' initial="false" >
                {
                    (!isLoading && !isAdded) &&
                    <motion.span 
                    initial= {{ opacity: 1, x: 0 }}
                    animate= {{ opacity: 1, x: 0 }}
                    exit={{opacity: 0, x: 10, transitionDelay: 1}}
                    transition={{duration: 0.3}}
                    className='m-auto'
                    >
                        {
                            text &&
                            <span
                                initial= {{ opacity: 0, scaleY: 0, transformOrigin: "bottom"}}
                                animate= {{ opacity: 1, scaleY: 1, transformOrigin: "bottom"}}
                                exit={{opacity: 0, scaleY:0, transformOrigin: "bottom"}}
                                transition={{duration: 0.2, delay: 0.1}}
                                className={`m-auto ${(isLoading)? "opacity-0": ""}`}
                            >
                                {text}
                            </span>
                        }
                        {
                            !!icon &&
                            <span
                                initial= {{ opacity: 0, scaleY: 0, transformOrigin: "bottom"}}
                                animate= {{ opacity: 1, scaleY: 1, transformOrigin: "bottom"}}
                                exit={{opacity: 0, scaleY:0, transformOrigin: "bottom"}}
                                transition={{duration: 0.2, delay: 0.1}}
                                className={`m-auto ${(isLoading)? "opacity-0": ""}`}
                            >
                                {icon}
                            </span>
                        }
                    </motion.span>
                }
            </AnimatePresence>
        </button>
    )
}

export default ActionButton