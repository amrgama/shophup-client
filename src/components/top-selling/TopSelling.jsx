import React, { useEffect, useState } from 'react'
import SmallVerticalCard from '../products-card/SmallVerticalCard';
import SectionNavigation from '../shared-components/SectionNavigation';
import Top20 from './top-20/Top20';
import ProductsSlide from './ProductsSlide';
import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import MainHeader from '../UI-kits/MainHeader';
import Section from '../UI-kits/Section';
import useFetch from '../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import NotFound from '../UI-kits/NotFound';
import Loader from '../UI-kits/Loader';
import { getUrl } from '../../utilities/helper';

const navLinks = [
  {
    label: "Top 20",
    link: "?top-selling=true&limit=10&categ"
  },
  {
    label: "Baby",
    link: "?top-selling=true&limit=5&category=baby"
  },
  {
    label: "Furniture",
    link: "?top-selling=true&limit=10&category=furniture"
  },
  {
    label: "Electronic",
    link: "?top-selling=true&limit=12&category=electronic"
  },
  {
    label: "All",
    link: "?top-selling=true&limit=20"
  },
]

const TopSelling = () => {
  const {callApi, response: products, isIdel, isLoading, isSuccess, isError} = useFetch();
    const [searchParams]= useSearchParams();
    const[topSellingQuery, limitQuery] = [searchParams.get("top-selling"), searchParams.get("limit")]
    const initial_limit = navLinks[0].link.split("limit=")[1];
  const matches = useMediaQuery("(max-width: 768px)");
  // console.log("products", products);

  useEffect(()=>{
    callApi(`${getUrl()}/products?_limit=${initial_limit}`, {method: "get"})
  }, [])

  useEffect(()=>{
    if(topSellingQuery || limitQuery){
      callApi(`${getUrl()}/products?_limit=${limitQuery}${searchParams.get("category") && `&category=${searchParams.get("category")}`}`, {method: "get"})
    }
  }, [searchParams])

  return (
    <Section>
        <div className="container">
          <div className="row align-items-center gap-1 g-0 m-0 mb-5">
            <MainHeader text={"Top Selling Products"} variant={matches? "center": "start"} extraClasses={"col-12 col-md text-nowrap"} />
            <SectionNavigation 
              navLinks={navLinks}
            />
          </div>
          <div className="row g-0 align-items-center m-0">
            { 
              (isLoading || isIdel)? 
                <Loader className={"m-auto"} />
              :
                <AnimatePresence mode='await' initial="false">
                  {
                    (isSuccess && !!products.length)?
                      <motion.div
                        initial={{opacity: 0, translateY: 100}}
                        animate={{opacity: 1, translateY: 0}}
                        exit={{opacity: 0, translateY: -100}}
                        transition={{duration: 0.2}}
                      >
                        <ProductsSlide products={products} />
                      </motion.div>
                    :
                      <NotFound className={"fs-5"}>There is no product</NotFound>
                  }
                </AnimatePresence>
            }
          </div>
        </div>
    </Section>
  )
}

export default TopSelling