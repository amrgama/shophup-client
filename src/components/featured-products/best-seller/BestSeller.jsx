import React, { useEffect, useRef, useState } from 'react'
import BestSellerCards from './BestSellerCards'
import SectionNavigation from '../../shared-components/SectionNavigation';
import MainHeader from '../../UI-kits/MainHeader';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useFetch from '../../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NotFound from '../../UI-kits/NotFound';
import Loader from '../../UI-kits/Loader';
import { getUrl } from '../../../utilities/functions';

const navLinks = [
    {
      label: "New Arrivals",
      link: "?best-seller=true&limit=8"
    },
    {
      label: "Featured",
      link: "?best-seller=true&limit=12"
    },
    {
      label: "Sale",
      link: "?best-seller=true&limit=16"
    }
  ]

const BestSeller = () => {

    const {callApi, response: products, isIdel, isLoading, isSuccess, isError} = useFetch();
    const [searchParams]= useSearchParams();
    const[bestSellerQuery, limitQuery] = [searchParams.get("best-seller"), searchParams.get("limit")]
    const initial_limit = navLinks[0].link.split("limit=")[1];
    const matches = useMediaQuery("(max-width: 768px)");
 
    useEffect(()=>{
      callApi(`${getUrl()}/products?_limit=${initial_limit}`, {method: "get"})
    }, [])
    useEffect(()=>{
      if(bestSellerQuery){
        callApi(`${getUrl()}/products?_limit=${limitQuery}`, {method: "get"})
      }
    }, [searchParams])
  // console.log("products", products)

  return (
    <div className="col-12 col-lg">
        <div className="col-12 d-flex flex-wrap align-items-center gap-1 mb-5">
          <MainHeader text={"Best Seller"} variant={matches? "center": "start"} extraClasses={"col-12 col-md"} />
            <SectionNavigation
                navLinks={navLinks}
            />
        </div>
        {
          (isLoading || isIdel)? 
            <Loader className={"m-auto"} />
          :
            <>
              {
                (isSuccess && !!products.length)?
                  <AnimatePresence mode='await' initial="false">
                      <motion.div
                        initial={{opacity: 0, translateY: 100}}
                        animate={{opacity: 1, translateY: 0}}
                        transition={{duration: 0.2}}
                      >
                        <BestSellerCards products={products} />
                      </motion.div>
                  </AnimatePresence>
                :
                  <NotFound className={"fs-5"} />
              }
            </>
        }
    </div>
  )
}

export default BestSeller