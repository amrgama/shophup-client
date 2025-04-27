import React, { useEffect, useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SmallVerticalCard from "../../products-card/SmallVerticalCard";

const Slider = ()=> {
    const [products, setProducts] = useState([]);
    const [isIdel, setIsIdel] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

  const [swiperRef, setSwiperRef] = useState(null);
//   const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 18 }).map((_, index) => `Slide ${index + 1}`)
  );

//   const prepend = () => {
//     setSlides([
//       ...slides
//     ]);
//     prependNumber.current = prependNumber.current - 2;
//     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
//   };

//   const append = () => {
//     setSlides([...slides, "Slide " + ++appendNumber.current]);
//   };

//   const slideTo = (index) => {
//     swiperRef.slideTo(index - 1, 0);
//   };

    useEffect(()=>{

        setIsIdel(false);
        setIsLoading(true);

        fetch('https://fakestoreapi.com/products?limit=15')
        .then(res=>res.json())
        .then(products=> {
            setIsLoading(false)
            setIsSuccess(true);
            setProducts([...products]);
        })
        .catch(err => {
            setIsLoading(false)
            setIsError(true);
            setErrorMsg(err.message)
        })

  }, [])

  useEffect(()=>{
    // console.log("products", products);
    if(products.length) setSlides((prev)=> {
        return products?.map((product, i)=>{
            return <SmallVerticalCard product={product} />
        })
    })
    // console.log("slides", slides);
  }, [products])
  
  if(isLoading || isIdel) return <h1>Loading...</h1>

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={10}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
      >
        {slides?.map((slideContent, index) => (
          <SwiperSlide className="col-6 col-md-4 col-lg-3 py-2" key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;