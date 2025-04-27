import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import WishlistCard from '../../components/wishlist/WishlistCard';
import MainHeader from '../../components/UI-kits/MainHeader';
import { useSelector } from 'react-redux';
import { selectWishList } from '../../features/wish-list/wishListSlice';
import NotFound from '../../components/UI-kits/NotFound';

const wishlist = [
    {
        "id": 1,
        "userId": 1,
        "date": "2020-03-02T00:00:00.000Z",
        "products": [
            {
                "productId": {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "image": "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    "rating": {
                    "rate": 3.9,
                    "count": 120
                    }
                },
                "quantity": 4
            },
            {
                "productId": {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "image": "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    "rating": {
                    "rate": 3.9,
                    "count": 120
                    }
                },
                "quantity": 4
            },
            {
                "productId": {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "image": "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
                },
                "quantity": 4
            },
            {
                "productId": {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "image": "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    "rating": {
                    "rate": 3.9,
                    "count": 120
                    }
                },
                "quantity": 4
            },
            {
                "productId": {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "image": "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    "rating": {
                    "rate": 3.9,
                    "count": 120
                    }
                },
                "quantity": 4
            },
            {
                "productId": {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "image": "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
                },
                "quantity": 4
            },
        ]
    }
]

const Wishlist = () => {
    const wishlistRef = useRef();
    const {wishList}= useSelector(selectWishList);
    console.log("wishListInPAge", wishList)
    const renderedCards = wishList?.map((prod, i)=>{
        return (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-xl-3 border border-1 border-light">
                <WishlistCard key={i} product={prod} />
            </div>
        )
    })

  return (
    <motion.div 
        ref={wishlistRef} 
        id='#wishlist'
        variants={variants}
        initial="initial"
        animate= "animate"
        exit="exit"
        transition={{
            duration: 0.3, 
            type: "spring", 
            stiffness: "60"
        }}
        className='wishlist col-12 top-0 start-0 d-flex flex-column'
        style={{minHeight: "450px"}}
    >
        <MainHeader text={"Wishlist"} extraClasses={"mb-4"} />
        <div className="d-flex flex-wrap" style={{flex: "1 1 0%"}}>
            {
                !!wishList?.length?
                    renderedCards
                :
                    <NotFound className={"fs-5 m-auto"}>There no products in your wishlist yet.</NotFound>
            }
           
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
export default Wishlist