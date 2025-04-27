import {createSlice} from "@reduxjs/toolkit"
import { DefaultPricingStrategy, DiscountPricingStrategy } from "../../utilities/PricingStrategy";

const initialState = {
    wishList: (JSON.parse(window.localStorage.getItem("wishList")) || {}).wishList || [],
    isIdel: true,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

const wishListSlice= createSlice({
    name: "wishList",
    initialState,
    reducers: {
        setWishList:{
            reducer: (state, action)=>{
                state= {
                    ...action.payload,
                    isLoading: false,
                    isSuccess: true,
                }
                window.localStorage.setItem("wishList", JSON.stringify(state))
                return state;
            },
            prepare: (data)=>{
                wishList= JSON.parse(window.localStorage.getItem("wishList"));
                let newWishList= {
                    ...(wishList || {}),
                    wishList: data,
                    isLoading: true,
                };

                return {
                    payload: newWishList
                }
            }
        },
        resetWishList:{
            reducer: (state, action)=>{
                state= {
                    ...action.payload,
                    isLoading: false,
                    isSuccess: true,
                }
                window.localStorage.setItem("wishList", JSON.stringify(state));
                return state;
            },
            prepare: (data)=>{
                window.localStorage.setItem("wishList", JSON.stringify(data))
                return {
                    payload: data,
                    isLoading: true,
                }
            }
        },
        addToWishList:{
            reducer: (state, action)=>{
                state= {
                    ...action.payload,
                    isLoading: false,
                    isSuccess: true,
                }
                window.localStorage.setItem("wishList", JSON.stringify(state));
                return state;
            },
            prepare: (product)=>{
                const wishList = (JSON.parse(window.localStorage.getItem("wishList")) || {}).wishList || [] ;
                const isProductExist = wishList?.some(item => item.id === product.id)
                if(!isProductExist){
                    
                    let newWishList = [...wishList, product];
                    return {
                        payload: {
                            wishList: newWishList,
                            isLoading: true,
                        }
                    }
                }
                return {
                    payload: {
                        wishList,
                        isLoading: true,
                    }
                }
            }
        },
        removeFromWishList: {
            reducer: (state, action)=>{
                state= {
                    ...action.payload,
                    isLoading: false,
                    isSuccess: true,
                }
                console.log("state.wishList", state.wishList)
                window.localStorage.setItem("wishList", JSON.stringify(state))
                return state;
            },
            prepare: (productId)=>{
                const wishList = (JSON.parse(window.localStorage.getItem("wishList")) || {}).wishList || [] ;
                const newWishList = wishList?.filter((product)=> {
                    console.log("productinWishList", product);
                    return product.id !== productId
                });
               
                return {
                    payload: {
                        wishList: newWishList,
                        isLoading: true,
                    }
                }
            }
        },
    }
});

export const selectWishList = (state)=> state.wishList;
export const {setWishList, resetWishList, addToWishList, removeFromWishList }= wishListSlice.actions;
export default wishListSlice.reducer;