import React, { useEffect, useState } from 'react'
import {useFormContext} from "react-hook-form"
import ErrorMsg from './ErrorMsg'
import { AnimatePresence } from 'framer-motion'
import {BsEye, BsEyeSlash} from "react-icons/bs"

const FormInput = ({id, name, type, label, placeholder, register, errorMsg, extraClasses}) => {
    console.log("yupErrors", errorMsg);
    const [show, setShow] = useState(false);
    
    const onClick = e=> {
      e.preventDefault();
      setShow(prev => !prev)
    }
  if(type === "password"){
    return(
      <div 
        className={`input-wrapper col h-100 d-flex flex-column gap-2 text-start ${extraClasses ?? ""}`}
        style={{minWidth: "250px"}}
      >
        {
          label &&
          <label htmlFor={`${id}`} className="form-label fw-500 m-0 me-auto">{label}</label>
        }
        <div className="w-100 h-100 position-relative">
          <input
            id={id}
            type={!show? type: "text"}
            name={name}
            placeholder={placeholder}
            {...register}
            className={`form-control h-100 border p-3 ${errorMsg? "text-danger": "text-dark"}`}
            style={{minHeight: "50px"}}
          />
            <div 
            className="bg-white position-absolute top-0 end-0 p-2 d-flex"
            style={{height: "90%", transform: "translate(-4%, 5%)"}}
            >
              <button 
              className='btn p-0 m-auto' 
              style={{}}
              onClick={onClick}
              >
                { show && <BsEye className={`fs-5 ${errorMsg? "text-danger": "text-dark"}`} /> }
                { !show && <BsEyeSlash className={`fs-5 ${errorMsg? "text-danger": "text-dark"}`} /> }
              </button>
            </div>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          { errorMsg && <ErrorMsg message={errorMsg} />}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div 
      className={`input-wrapper col h-100 d-flex flex-column align-items-center gap-2 ${extraClasses ?? ""}`}
      style={{minWidth: "250px"}}
    > 
      {
        label &&
        <label htmlFor={`${id}`} className="form-label fw-500 m-0 me-auto">{label}</label>
      }
      <input
        id={id}
        type={type}
        name={name}
        {...register}    
        placeholder={placeholder}
        className={`form-control h-100 border p-3 ${errorMsg? "text-danger": "text-dark"}`}
        style={{minHeight: "50px"}}        
      />
      <AnimatePresence mode="wait" initial={false}>
        { errorMsg && <ErrorMsg message={errorMsg} />}
      </AnimatePresence>
    </div>
  )
}

export default FormInput