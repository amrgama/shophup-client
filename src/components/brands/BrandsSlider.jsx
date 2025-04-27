import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Brand from "./Brand";
import data from "../../assets/data";


const BrandsSlider = ()=> {
    const renderedBrandsCard = data.brands.map((brand, i)=>{
        return (
            <SwiperSlide key={i}>
                <Brand brand={brand} />
            </SwiperSlide>
        );
    })

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        breakpoints={{
          500: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          770: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1224: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Navigation]}
        navigation={true}
        className="brands-slider"
      >
        {renderedBrandsCard}
      </Swiper>
    </>
  );
}

export default BrandsSlider;