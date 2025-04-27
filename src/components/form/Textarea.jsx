import React from 'react'
import ErrorMsg from './ErrorMsg'
import { AnimatePresence } from 'framer-motion'

const Textarea = ({id, name, label, placeholder, register, errorMsg, extraClasses}) => {
    
  return (
    <div 
      className={`textarea-wrapper w-100 d-flex flex-column gap-2 text-start ${extraClasses? extraClasses : ""}`}
      style={{minWidth: "250px"}}
    >
        {
          label && 
          <label htmlFor={id} className="form-label fw-500">{label}</label>
        }
        <textarea
          id={id}
          name={name}
          className={`form-control h-100 p-3 ${errorMsg? "text-danger": "text-dark"}`}
          placeholder={placeholder}
          {...register}            
        />
        <AnimatePresence mode="wait" initial={false}>
          { errorMsg && <ErrorMsg message={errorMsg} />}
        </AnimatePresence>
    </div>
  )
}

export default Textarea