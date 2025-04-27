import {createSlice} from "@reduxjs/toolkit"
import { DefaultPricingStrategy, DiscountPricingStrategy } from "../../utilities/PricingStrategy";

// addToCart: {
//     reducer: (state, action)=>{
//         state.cart= {
//             ...state.cart, 
//             items: [...state.cart.items, action.payload.product], 
//             totalPrice: action.payload.totalPrice
//         }
//     },
//     prepare: (product)=>{
//         const cartProduct = {
//             productId: product,
//             quantity: 1
//         }
//         const cart = JSON.parse(window.localStorage.getItem("cart")) ;
//         const totalPrice = cart.totalPrice + product.price;
//         const newCart = {...cart, totalPrice, items: [...cart.items, cartProduct]}
//         window.localStorage.setItem("cart", JSON.stringify(newCart)) 
//         return {
//             payload: {
//                 product: cartProduct,
//                 totalPrice: totalPrice
//             }
//         }
//     }
// },

// export const fetchProducts = createAsyncThunk(
//     'cart/fetchProducts',
//     async () => {
//       const response = await cartService.getProducts();
//       return response.data;
//     }
//   );
  
  // A function to create an entity adapter for the products
//   const productsAdapter = createEntityAdapter({
//     selectId: (product) => product.id,
//   });

const initialState = {
    cart: JSON.parse(window.localStorage.getItem("cart")) ?? {},
    isIdel: true,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

const cartSlice= createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart:{
            reducer: (state, action)=>{
                state.cart= {...action.payload}
            },
            prepare: (data)=>{
                window.localStorage.setItem("cart", JSON.stringify(data))
                return {
                    payload: data
                }
            }
        },
        resetCart:{
            reducer: (state, action)=>{
                state.cart= {...action.payload}
            },
            prepare: (data)=>{
                window.localStorage.setItem("cart", JSON.stringify(data))
                return {
                    payload: data
                }
            }
        },
        addToCart: {
            reducer: (state, action)=>{
                state.cart= {...action.payload}
            },
            prepare: (product, qty)=>{
                const cart = JSON.parse(window.localStorage.getItem("cart")) ;
                const prevProduct = cart?.items?.find(item => item.product.id === product.id)
                console.log("prevProduct", prevProduct);
                if(prevProduct){
                    const prevProductPrice= (+product.price * +prevProduct?.quantity)
                    const totalPrice = +cart.totalPrice - prevProductPrice + (+product.price * +qty);
                    const newCart = {...cart, totalPrice, items: [cart.items, {product: product, quantity: qty}]}
                    window.localStorage.setItem("cart", JSON.stringify(newCart)) 
                    return {
                        payload: newCart
                    }
                }
                else{
                    const cartProduct = {
                        product: product,
                        quantity: 1
                    }
                    const totalPrice = cart.totalPrice + (+product.price * +qty);
                    const newCart = {...cart, totalPrice, items: [...cart.items, cartProduct]}
                    window.localStorage.setItem("cart", JSON.stringify(newCart)) 
                    return {
                        payload: newCart
                    }
                }
            }
        },
        removeFromCart: {
            reducer: (state, action)=>{
                state.cart= {...action.payload}
            },
            prepare: (productId)=>{
                const cart = JSON.parse(window.localStorage.getItem("cart")) ;
                let totalPrice = 0;
                const newCartItems = cart.items.filter((product)=> {
                    console.log("product.product.id != productId", product.product.id, productId)
                    if(product.product.id != productId){
                        totalPrice += (product.product.price * product.quantity)
                    }
                    return product.product.id != productId
                });
                const newCart= {...cart, totalPrice: totalPrice.toFixed(3), items: [...newCartItems]}
                window.localStorage.setItem("cart", JSON.stringify(newCart))
                return {
                    payload: newCart
                }
            }
        },
        calcTotalPrice: {
            reducer: (state, action)=>{
                state.cart= {...state.cart, totalPrice: action.payload}
            },
            prepare: ()=>{
                const cart = JSON.parse(window.localStorage.getItem("cart")) ;
                const defaultPrice= new DefaultPricingStrategy();
                const totalPrice = defaultPrice.calculateTotalPrice(cart.items).toFixed(3);
                const newCart = {...cart, totalPrice}
                window.localStorage.setItem("cart", JSON.stringify(newCart))
                return {
                    payload: totalPrice
                }
            }
        },
        calcTotalPriceWithDiscount: {
            reducer: (state, action)=>{
                state.cart= {...state.cart, totalPrice: action.payload}
            },
            prepare: (discount)=>{
                const cart = JSON.parse(window.localStorage.getItem("cart")) ;
                const PriceWithDiscount= new DiscountPricingStrategy(discount);
                const totalPriceWithDiscount =  PriceWithDiscount.calculateTotalPrice(cart.items).toFixed(3)
                const newCart = {...cart, totalPrice: totalPriceWithDiscount}
                window.localStorage.setItem("cart", JSON.stringify(newCart))
                return {
                    payload: totalPriceWithDiscount
                }
            }
        }
    }
});

export const selectCart = (state)=> state.cart;
export const {setCart, resetCart, addToCart, removeFromCart, calcTotalPrice, calcTotalPriceWithDiscount}= cartSlice.actions;
export default cartSlice.reducer;