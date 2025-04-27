import React, { useEffect, useState } from 'react'
import ProductsSlider from './ProductsSlider';
import SectionNavigation from '../shared-components/SectionNavigation';
import MainHeader from '../UI-kits/MainHeader';
import useMediaQuery from '../../hooks/useMediaQuery';
import Section from '../UI-kits/Section';
import useFetch from '../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../UI-kits/Loader';
import { getUrl } from '../../utilities/functions';

const navLinks = [
    {
      label: "New arrivals",
      link: "?electronic-products=true&limit=15"
    },
    {
      label: "Best sellers",
      link: "?electronic-products=true&limit=5"
    },
    {
      label: "Best rated",
      link: "?electronic-products=true&limit=10"
    },
    {
      label: "All",
      link: "?electronic-products=true&limit=20"
    },
  ]

const ElectronicProducts = () => {
  const {callApi, response: products, isIdel, isLoading, isSuccess, isError} = useFetch();
  const [searchParams]= useSearchParams();
  const[electronicProductsQuery, limitQuery] = [searchParams.get("electronic-products"), searchParams.get("limit")]
  const initial_limit = navLinks[0].link.split("limit=")[1];
    const matches = useMediaQuery("(max-width: 768px)");

    useEffect(()=>{
      callApi(`${getUrl()}/products?_limit=${initial_limit}`, {method: "get"})
    }, [])
  
    useEffect(()=>{
      if(electronicProductsQuery){
        callApi(`${getUrl()}/products?_limit=${limitQuery}`, {method: "get"})
      }
    }, [searchParams])
  return (
    <Section>
        <div className="container">
            <div className="row align-items-center gap-1 m-0 mb-5">                
                <MainHeader text={"Electronic Products"} variant={matches? "center": "start"} extraClasses={"col-12 col-md text-nowrap"} />
                <SectionNavigation 
                  navLinks={navLinks}
                />
            </div>
            { 
              (isLoading || isIdel) ?
                <Loader />
              :
                <AnimatePresence mode='await' initial="false">
                  {
                    (isSuccess && !!products.length) &&
                    <motion.div
                      initial={{opacity: 0, translateY: 100}}
                      animate={{opacity: 1, translateY: 0}}
                      transition={{duration: 0.2}}
                    >
                      <ProductsSlider products={products} />
                    </motion.div>
                  }
                </AnimatePresence>
            }
        </div>
    </Section>
  )
}

export default ElectronicProducts