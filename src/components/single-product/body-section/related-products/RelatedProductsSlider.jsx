import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import SmallVerticalCard from "../../../products-card/SmallVerticalCard";


const RelatedProductsSlider = ({products})=> {
    
    console.log("products", products)
    const renderedProductsCard = products.map((product, i)=>{
        return (
            <SwiperSlide key={i} className="col-6 col-md-4 col-lg-3 py-2">
                <SmallVerticalCard product={product} />
            </SwiperSlide>
        );
    })

  return (
    <div className="row m-0">
        <div className="col-12">         
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1224: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                }}
                modules={[FreeMode, Navigation]}
                navigation={true}
                className="product-slider"
            >
                {renderedProductsCard}
            </Swiper>
        </div>
    </div>
  );
}

export default RelatedProductsSlider;