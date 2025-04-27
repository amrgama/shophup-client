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
import data from "../../assets/data";
import CategoryCard from "./CategoryCard";


const CategoriesSlider = ()=> {
  console.log("categoryData", data);
    const renderedBrandsCard = data.categories.map((category, i)=>{
        return (
            <SwiperSlide className="mt-2" key={i}>
                <CategoryCard category={category} />
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          // 1224: {
          //   slidesPerView: 8,
          //   spaceBetween: 20,
          // },
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

export default CategoriesSlider;