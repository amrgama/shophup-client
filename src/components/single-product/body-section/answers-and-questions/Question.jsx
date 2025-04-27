import React from 'react'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi"

const Question = ({question, by, date}) => {

  return (
    <div className='d-flex align-items-center gap-3 mb-4'>
        <HiOutlineQuestionMarkCircle className='text-muted fs-2' />
        <div className=" text-start">
            <span className="d-block fs-5 fw-500 text-capitalize">
                {question}
            </span>
            <div className='text-muted'>
                <span className="fs-7 fw-500 me-2">{by}</span>
                <span className='fs-7'>
                    asked on {date}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Question