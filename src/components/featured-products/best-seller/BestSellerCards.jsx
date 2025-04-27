import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import SmallVerticalCard from "../../products-card/SmallVerticalCard";


const BestSellerCards = ({products})=> {

    const renderedProductsCard = products.map((product, i)=>{
        return (
            <div key={i} className="col-6 col-md-4 col-lg-4 col-xl-3 py-2">
                <SmallVerticalCard product={product} />
            </div>
        );
    })

  return (
    <div className="col-12 d-flex flex-wrap">
        {renderedProductsCard}
    </div>
  );
}

export default BestSellerCards;