import React, { createContext, useContext, useEffect, useState } from 'react'
import { DefaultPricingStrategy, DiscountPricingStrategy } from '../utilities/PricingStrategy';
import cartConfig from '../config/cartConfig';

if(!!!JSON.parse(window.localStorage.getItem("cart"))){
  window.localStorage.setItem("cart", JSON.stringify(cartConfig));
}

export const CartContext = createContext({});

const CartContextProvider = () => {
  const [cart, setCart]= useState( JSON.parse(window.localStorage.getItem("cart")) ?? {});

  // function getCart(){
  //   return JSON.parse(window.localStorage.getItem("cart"));
  // }

  function resetCart(cart){
    window.localStorage.setItem("cart", JSON.stringify(cart))
    setCart(cart)
  }

  function addToCart(product){
    const cartProduct = {
        productId: product,
        quantity: 1
    }

    setCart(prev => {
      const cart= {...prev, "products": [...prev.products, cartProduct]};
      window.localStorage.setItem("cart", JSON.stringify(cart))
      return cart
    })
  }

  function removeFromCart(productId){
    const newCartProducts = cart.products.filter((product)=> {
        console.log("id", product.productId.id, "productId", productId)
        return product.productId.id !== productId
    });
    const newCart= {...cart, products: [...newCartProducts]}
    window.localStorage.setItem("cart", JSON.stringify(newCart))
    setCart({...newCart})
    return newCart;
  }

  function calcTotalPrice(){
    const defaultPrice= new DefaultPricingStrategy();
    const totalPrice = defaultPrice.calculateTotalPrice(cart.products);
    
    return ;
  }

  function calcTotalPriceWithDiscount(discount){
    const PriceWithDiscount= new DiscountPricingStrategy(discount);
    return PriceWithDiscount.calculateTotalPrice(cart.products)
  }

  // useEffect(()=>{
  //   setCart(JSON.parse(window.localStorage.getItem("cart")))
  // }, [JSON.parse(window.localStorage.getItem("cart")).products.length])

  return {
    cart,
    // getCart,
    resetCart,
    addToCart,
    removeFromCart,
    calcTotalPrice,
    calcTotalPriceWithDiscount
  }

}

export default CartContextProvider