import React from 'react'
import ErrorMsg from './ErrorMsg'
import { AnimatePresence } from 'framer-motion'

const UploadInput = ({id, name, label, type, register, errorMsg, extraClasses}) => {
   
    if(type === "multiple"){

        return (
            <div className={`w-100 d-flex flex-column gap-2 text-start ${extraClasses? extraClasses : ""}`}>
                {
                  label && 
                  <label htmlFor={id} className="form-label fw-500">{label}</label>
                }
                <input
                  id={id}
                  name={name}
                  type="file"
                  multiple
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

    return (
        <div 
          className={`w-100 d-flex flex-column gap-2 text-start ${extraClasses? extraClasses : ""}`}
          style={{minWidth: "250px"}}
        >
          {
            label && 
            <label htmlFor={id} className="form-label fw-500">{label}</label>
          }
          <input
            id={id}
            name={name}
            type="file"
            className={`form-control h-100 border p-3 ${errorMsg? "text-danger": "text-dark"}`}
            {...register}    
          />
          <AnimatePresence mode="wait" initial={false}>
            { errorMsg && <ErrorMsg message={errorMsg} />}
          </AnimatePresence>
        </div>
    )
}

export default UploadInput