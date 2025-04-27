import React from 'react'
import {ImStarFull, ImStarHalf, ImStarEmpty} from "react-icons/im"
import RatingPercentage from './RatingPercentage';
import Reviews from './Reviews';
import { motion } from 'framer-motion'

const CustomerReviews = () => {
  const {rating, reviews}= {
    rating: {
      rate: 4.5,
      count: 5,
      percentage: {
        "5": 50,
        "4": 20,
        "3": 10,
        "2": 20,
        "1": 5
      }
    },
    reviews: [
      {
        review: `This is an unusually large advance over previous models, especially in raw computing power, but also in fun things like screen and headphone support.`,
        rate: 4,
        by: {
          name: "Demo_User",
          type: "user"
        },
        date: "March 26, 2023"
      },
      {
        review: `This is an unusually large advance over previous models, especially in raw computing power, but also in fun things like screen and headphone support.`,
        rate: 4,
        by: {
          name: "Demo_User",
          type: "user"
        },
        date: "March 26, 2023"
      }
    ]
  }

  const renderedStars = Array.from({length: rating.rate}).map((item, i)=>{
                        
    return <ImStarFull key={i} className='fs-5' />
  });

  return (
    <motion.div 
      id="customer-reviews" 
      variants={variants}
      initial="initial"
      animate= "animate"
      exit="exit"
      transition={{
          duration: 0.3, 
          type: "spring", 
          stiffness: "60"
      }}
      className='d-flex flex-wrap gap-5 text-start'
    >
      <div className="col-12 col-lg">
        <div className="d-flex align-items-center gap-5 mb-5">
          <span className="display-3 fw-bold">{rating.rate}</span>
          <div className='d-flex flex-column gap-1'>
            <div className='text-warning'>{renderedStars}</div>
            <span className="text-muted">{rating.count} customers</span>
          </div>
        </div>
        <RatingPercentage percentage={rating.percentage} />
      </div>
      <Reviews reviews={reviews} />
    </motion.div>
  )
}

const variants = {
  "initial": {
      visibility: "hidden", 
      opacity: 0, 
      position: "absolute", 
      translateY: "100%" 
  },
  "animate": {
      visibility: "visible", 
      opacity: 1, 
      position: "relative", 
      translateY: "0%"
  },
  "exit": {
      visibility: "hidden", 
      opacity: 0, 
      position: "absolute", 
      translateY: "-100%"
  }
}

export default CustomerReviews