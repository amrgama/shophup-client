import React, { useEffect, useState } from 'react'
import RelatedProductsSlider from './RelatedProductsSlider'
import { getUrl } from '../../../../helper/helper.js';

const RelatedProdducts = () => {

    const [products, setProducts]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg]= useState("");

    useEffect(()=>{

        setIsLoading(true);
        fetch(`${getUrl()}/products?limit=10`)
        .then(res=> res.json())
        .then(products=> {
            // console.log("products in fetch", products)
            setProducts([...products]);
            setIsLoading(false)
            setIsSuccess(true);
        })
        .catch(err => {
            setIsLoading(false)
            setIsError(true);
            // setErrorMsg(err.message)
        })
    }, [])

  return (
    <div className='py-5'>
        <div className="container">
            <div className="d-flex flex-column m-0">
                <h2 className='w-100 fs-4 text-center text-lg-start text-dark mb-5'>Related Products</h2>
                {
                    (isLoading)?
                        <h1>Loading...</h1>
                    :
                        <RelatedProductsSlider products={products} />
                }
            </div>
        </div>
    </div>
  )
}

export default RelatedProdducts