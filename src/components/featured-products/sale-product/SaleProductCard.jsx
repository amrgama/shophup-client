import React, { useEffect, useState } from 'react'
// import SaleProductCard from './SaleProductCard11'
// import SaleProductTop from './Product';
import Counter from './Counter';
import Product from './Product';
import { getUrl } from '../../../utilities/functions';

const SaleProductCard = () => {
    const [product, setProduct] = useState({});
    const [isIdel, setIsIdel] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    
    useEffect(()=>{
        setIsIdel(false);
        setIsLoading(true);
        fetch(`${getUrl()}/products/1`)
        .then(res=> res.json())
        .then(product=> {
            // console.log("products in fetch", products)
            setIsLoading(false)
            setIsSuccess(true);
            setProduct({...product});
    
        })
        .catch(err => {
            setIsLoading(false)
            setIsError(true);
            // setErrorMsg(err.message)
        })
    }, [])

    if(isLoading || isIdel) return <h1>Loading...</h1>
  return (
    <div className='w-100 h-100 d-flex flex-column gap-2 p-4 rounded-3 border border-3 border-dark'>
       <Product product={product} />
       <hr className='w-100 my-3 border border-2 border-dark opacity-1'/>
       <Counter date={"october 21, 2023 01:15:00"} />
    </div>
  )
}

export default SaleProductCard