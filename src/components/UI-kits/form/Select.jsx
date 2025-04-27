import { AnimatePresence } from 'framer-motion'
import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import ErrorMsg from '../../form/ErrorMsg'

const Select= ({id, name, label, extraClasses, emptyOption, register, errorMsg})=> {
  const className = `input-wrapper w-100 h-100 d-flex flex-column align-items-center gap-2 text-start ${extraClasses ?? ""}`
  // const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  // const changeHandler = value => {
  //   setValue(value)
  // }

  const renderedOptions = options.map((option, i)=>{
   
    if(i === 0 && !!emptyOption){
      return <option key={i} value={undefined}>{emptyOption}</option>
    }

    return <option key={i} value={option.value}> {option.label} </option>
  })

  return(
    <div 
      className={className}   
      style={{minWidth: "250px"}}
    >
      {
        (label && id) &&
        <label htmlFor={`${id}`} className="form-label fw-500 m-0 me-auto">{label}</label>
      }
      {
        (id)?
          <select
            id={id}
            name={name}
            defaultValue={undefined}
            // value={value}
            // onChange={changeHandler}
            {...register}
            className="form-select p-3" 
            aria-label={label ?? "select input"}
          >
            {renderedOptions}
          </select>
        :
          <select
            id={id}
            name={name}
            defaultValue={undefined} 
            // value={value} 
            // onChange={changeHandler}
            {...register} 
            className="form-select p-3" 
            aria-label={label ?? "select input"}
          >
            {renderedOptions}
          </select>
      }
      <AnimatePresence mode="wait" initial={false}>
        { errorMsg && <ErrorMsg message={errorMsg} />}
      </AnimatePresence>
    </div>
  );
}

export default Select