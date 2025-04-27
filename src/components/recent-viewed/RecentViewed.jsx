import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import ProductsSlide from '../top-selling/ProductsSlide';
import ProductsSlider from '../electronic-products/ProductsSlider';
import RecentViewedProducts from './RecentViewedProducts';
import HorizontCard from '../products-card/HorizontCard';
import MainHeader from '../UI-kits/MainHeader';
import Section from '../UI-kits/Section';
import useFetch from '../../hooks/useFetch';
import Loader from '../UI-kits/Loader';
import NotFound from '../UI-kits/NotFound';
import { getUrl } from '../../utilities/functions';

const RecentViewed = () => {
    const {callApi, response: products, isIdel, isLoading, isSuccess, isError, errorMsg}= useFetch();

    useEffect(()=>{
        callApi(`${getUrl()}/products?_limit=6`);
    }, [])

    return (
        <Section>
            <div className="container">
                <div className="d-flex flex-column m-0">
                    <MainHeader text={"Recent Viewed Products"} extraClasses={"mb-4"} />
                    { 
                        (isLoading || isIdel)?
                            <Loader />
                        :
                            <>
                                { 
                                    (isSuccess && !!products.length)?
                                        <RecentViewedProducts products={products} />
                                    :
                                        <NotFound className={"fs-5"}>There is no recent viewed products yet.</NotFound>
                                }
                            </>
                    }
                    
                </div>
                <div className="row align-items-center m-0">
                    <div className="col-12 col-lg-6 p-3">
                        <HorizontCard />
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                        <HorizontCard />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default RecentViewed