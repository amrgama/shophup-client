import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import SmallVerticalCard from "../../products-card/SmallVerticalCard";

const Slider = ()=> {
    const [products, setProducts] = useState([]);
    const [isIdel, setIsIdel] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [isXLargMedia, setIsXLargMedia] = useState(window.matchMedia("(width > 1225px)").matches);
    const [isLargMedia, setIsLargMedia] = useState(window.matchMedia("(width > 992px)").matches);
    const [isMediamMedia, setIsMediamMedia] = useState(window.matchMedia("(width > 676px)").matches);
    const [isSmallMedia, setIsSmallMedia] = useState(window.matchMedia("(width > 500px)").matches);

    window.addEventListener("resize", e=>{
        setIsXLargMedia(window.matchMedia("(width > 1225px)").matches);
        setIsLargMedia(window.matchMedia("(width > 992px)").matches);
        setIsMediamMedia(window.matchMedia("(width > 676px)").matches);
        setIsSmallMedia(window.matchMedia("(width > 500px)").matches);
    });

    const renderedProductsCard = products.map((product, i)=>{
        return (
            <SwiperSlide key={i} className="col-6 col-md-4 col-lg-3 py-2">
                {/* <div key={i} className="col-6 col-md-4 col-lg-3 py-2">  */}
                    <SmallVerticalCard product={product} />
                {/* </div> */}
            </SwiperSlide>
        );
    })

    useEffect(()=>{

        setIsIdel(false);
        setIsLoading(true);

        fetch('https://fakestoreapi.com/products?limit=3')
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
  
  if(isLoading || isIdel) return <h1>Loading...</h1>

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        // pagination={{
        //   clickable: true
        // }}
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
        className="mySwiper"
      >
        {renderedProductsCard}
      </Swiper>
    </>
  );
}

export default Slider;