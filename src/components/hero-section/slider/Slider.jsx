import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';
import Slide from './Slide';

const Slider = ()=> {

  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper w-100"
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
            <Slide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;