import React from 'react'
import { SwiperSlide } from 'swiper/react'
import images from '../../../assets/images'
const style = {
    height: "480px",
    "backgroundImage": `url(${images.heroSection.heroSectionBackground})`,
    "backgroundSize": "cover",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
}

const Slide = () => {
  return (
    <div className='slide w-100 d-flex align-items-center p-4' 
        style={style}
    >
        <div className="col-6 d-flex flex-column align-items-start p-2">
            <span className="bg-secondary px-2 py-1 fs-7 text-dark rounded-pill">
                special offer
            </span>
            <span className="display-6 fw-bold text-white lh-lg">
                Immersive
            </span>
            <span className="display-6 fw-bold text-white lh-lg">
                Entertainment
            </span>
            <p className="text-white text-start">
                Discover our new item, Up to <br/> 
                <span className='fw-bold'>25% off !</span>
            </p>
            <button className="btn bg-white border-0 py-2 px-4 lh-lg">Shop Now</button>
        </div>
        <div className="col-6 d-flex flex-column align-items-start p-2">
            <img className='w-100' src={images.heroSection.heroSectionImg1} alt="" />
        </div>
    </div>
  )
}

export default Slide