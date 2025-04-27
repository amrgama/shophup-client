import { AnimatePresence, motion } from 'framer-motion';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {GoGitCompare} from "react-icons/go"
import React, { useState } from 'react'

const CompareButton = ({text, extraClasses}) => {
    const className= `btn p-0 d-flex align-items-center justify-content-center gap-1 main-bg ${extraClasses ?? ""}`
    const [active, setActive] = useState(false);
    const onClick = ()=>{
        setActive(!active)
    }
  return (
    <button
        onClick={onClick}
        className={className}
    >
         <span
            className='d-flex rounded-circle'
            style={{width: "40px", height: "40px"}}
        >
            <AnimatePresence mode="await" initial="false">
                { !active && 
                    <motion.span
                    initial={{originX: "center"}}
                    whileHover={{scale: 1.2, originX: "center"}}
                    exit={{visibility: "hidden", position: "absolute"}}
                    className='d-block m-auto'
                    >
                        <GoGitCompare className='fs-4 text-dark' />
                    </motion.span>
                }
            </AnimatePresence>
            <AnimatePresence mode="await" initial="false">
                { active && 
                    <motion.span
                    initial={{originX: "center"}}
                    animate={{scale: 1.22}}
                    exit={{visibility: "hidden", position: "absolute"}}
                    transition={{duration: "0.2s", type: "spring", stiffness: "2000"}}
                    className='d-block m-auto'
                    >
                        <GoGitCompare className='fs-4 text-secondary' />
                    </motion.span>
                }
            </AnimatePresence>
        </span>
        {
            !!text && text
        }
    </button>
  )
}

export default CompareButton