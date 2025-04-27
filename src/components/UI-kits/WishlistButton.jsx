import { AnimatePresence, motion } from 'framer-motion';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList, selectWishList } from '../../features/wish-list/wishListSlice';

const WishlistButton = ({text, extraClasses, product}) => {
    const className= `btn p-0 d-flex align-items-center justify-content-center gap-1 main-bg rounded-circle border ${extraClasses ?? ""}`
    const wishListState= useSelector(selectWishList);
    const {wishList, isLoading}= useSelector(selectWishList);
    console.log("wishListState", wishListState, "wishList", wishList, "isLoadint", isLoading);
    const [active, setActive] = useState(wishList?.some(item=> item.id == product?.id));
    const dispatch= useDispatch();
    const onClick = ()=>{
        console.log("product", product);
        setActive(!active);
        dispatch(
            !active?
                addToWishList(product)
            :
                removeFromWishList(product.id)
        )
    }
    useEffect(()=>{
        if(product?.id){
            setActive(wishList?.some(item=> item.id == product?.id));
        }
    }, [product?.id]);
    
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
                { 
                    !active && 
                    <motion.span
                    initial={{originX: "center"}}
                    whileHover={{scale: 1.2, originX: "center"}}
                    exit={{visibility: "hidden", position: "absolute"}}
                    className='d-block m-auto'
                    >
                        <AiOutlineHeart className='fs-4 text-dark' />
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
                        <AiFillHeart className='fs-4 text-secondary' />
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

export default WishlistButton