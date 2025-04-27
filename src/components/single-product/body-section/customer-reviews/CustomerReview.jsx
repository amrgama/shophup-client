import React from 'react'
import demoUser from "../../../../assets/images/demo_user.png"
import {ImStarFull, ImStarHalf, ImStarEmpty} from "react-icons/im"

const CustomerReview = ({review, rate, by, date}) => {
  
  const renderedStars = Array.from({length: rate}).map((item, i)=>{
                        
    return <ImStarFull key={i} />
  });
  
  return (
    <div className='d-flex gap-3'>
        <img 
          src={demoUser} 
          alt="demoUser" 
          className='rounded-circle'
          style={{width: "55px", height: "55px"}} 
        />
        <div className="d-flex flex-column gap-3">
            <div>
              {renderedStars}
            </div>
            <div>
                <span className='fw-500 me-2'>{by.name}</span>
                <span className='text-muted'>in {date}</span>
            </div>
            <p>
              This is an unusually large advance over previous models, especially in raw computing power, but also in fun things like screen and headphone support.
              <br /> <br />
              This Amazon listing has two different processors, the M1 Pro (listed as 16-Core GPU “style”) and the M1 Max (32-Core GPU). I’ll call one the Pro, the other the Max. I got the base Pro, but much of what I’ll say applies to both, and I’ll have some comments specifically about the Max too. (MBP below = MacBook Pro.)
            </p>
        </div>
    </div>
  )
}

export default CustomerReview