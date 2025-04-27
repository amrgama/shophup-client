import React, { useEffect, useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SmallVerticalCard from "../products-card/SmallVerticalCard";
import Loader from "../UI-kits/Loader";
import { getUrl } from "../../utilities/functions";


const ProductsSlider = ()=> {
    const [products, setProducts] = useState([]);
    const [isIdel, setIsIdel] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [swiperRef, setSwiperRef] = useState(null);
    const prependNumber = useRef(1);
    const [slides, setSlides] = useState();
//   Array.from({ length: 18 }).map((_, index) => `Slide ${index + 1}`)

    useEffect(()=>{

        setIsIdel(false);
        setIsLoading(true);

        fetch(`${getUrl()}/products?limit=15`)
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
    <div className="col-12 col-lg-8">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}
        centeredSlides={true}
        navigation={true}
        virtual
      >
        {
          (isLoading && !isSuccess)?
            <Loader />
          :
            <>
              {
                slides?.map((slideContent, index) => (
                  <SwiperSlide className="py-2" key={slideContent} style={{height: "300px"}} virtualIndex={index}>
                    {slideContent}
                  </SwiperSlide>
                ))
              }
            </>
        }
      </Swiper>
    </div>
  );
}

export default ProductsSlider;