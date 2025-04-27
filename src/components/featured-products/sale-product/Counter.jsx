import React, { useEffect, useRef, useState } from 'react'
import { DateUtility } from '../../../../helper/helper';

const Counter = ({date}) => {
  const dateUtility = new DateUtility();
  let parsedMilliSeconds = Date.parse(date);

  // let diffMilliSeconds = parsedMilliSeconds - Date.now();

  const [days, setDays] = useState(dateUtility.getDaysFrom(parsedMilliSeconds));
  const [hours, setHours] = useState(24 - new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(0);
  

  // console.log("parsed", parsedMilliSeconds);

  const refIntervalId = useRef();

  refIntervalId.current = setInterval(()=>{
    // setDays(dateUtility.getDays(--parsedMilliSeconds))
    // setHours(dateUtility.getHours(--parsedMilliSeconds))
    // setMinutes(dateUtility.getMinutes(--parsedMilliSeconds))
    
    setSeconds(new Date().getSeconds())
  
  },1)

  useEffect(()=>{
    
    // console.log("days", days, "hours", hours, "minutes", minutes, "seconds", seconds)
    if(seconds == 0) {
      // console.log("matched seconds", seconds)
      // if(minutes === 0)
      setMinutes(new Date().getMinutes())
    }
    if(minutes == 0) setHours(24 - new Date().getHours())

    return()=>{
      if(Date.now() === parsedMilliSeconds){
        clearInterval(refIntervalId.current)
      }
    }

  }, [days, hours, minutes, seconds])
  
  return (
    <div className='counter d-flex flex-wrap align-items-center justify-content-evenly gap-3 px-2 px-sm-3 py-3 main-bg'>
      <div className="days-box d-flex flex-column">
        <span className="days fw-bold fs-3 text-secondary">
          {/* {days.toString()} */}68
        </span>
        <span className="text-dark fs-7 fw-500">days</span>
      </div>
      <div className="hours-box d-flex flex-column">
        <span className="hours fw-bold fs-3 text-secondary">
          {hours.toString()}
        </span>
        <span className="text-dark fs-7 fw-500">hours</span>
      </div>
      <div className="minutes-box d-flex flex-column">
        <span className="minutes fw-bold fs-3 text-secondary">
          {minutes.toString()}
        </span>
        <span className="text-dark fs-7 fw-500">minutes</span>
      </div>
      <div className="seconds-box d-flex flex-column">
        <span className="seconds fw-bold fs-3 text-secondary">
          {seconds.toString()}
        </span>
        <span className="text-dark fs-7 fw-500">seconds</span>
      </div>
    </div>
  )
}

export default Counter