import React from 'react'
import { FaUserSecret } from "react-icons/fa6";

const Answer = ({answer, by, date}) => {
  return (
    <div className='d-flex align-items-center gap-3 main-bg p-3'>
        <div className="text-start">
            <span className="d-block fs-6 fw-500 text-capitalize">
                {answer}
            </span>
            <div className='text-muted'>
                <div>
                    <span className="fs-7 fw-500 me-2">{by.name}</span>
                    <span className='fs-7'>
                        answerd on {date}
                    </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <FaUserSecret className='' />
                    <span className="fs-7 fw-500">{by.type}</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Answer