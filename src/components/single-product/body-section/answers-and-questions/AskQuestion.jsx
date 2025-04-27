import React from 'react'
import ActionButton from '../../../UI-kits/ActionButton'

const AskQuestion = () => {
  return (
    <form 
      onSubmit={e=> e}
      className='col-12 col-lg d-flex flex-wrap gap-3 text-start'
      // style={{minWidth: "300px"}}
    >
      <span className='w-100 d-block fw-500 fs-5'>Ask Your Question</span>
      <input 
        type="text" 
        className="form-control border rounded-3 p-3"
        placeholder='your full name' 
      />
      <input 
        type="email" 
        className="form-control border rounded-3 p-3"
        placeholder='your email'
      />
      <input 
        type="text" 
        className="form-control border rounded-3 p-3"
        placeholder='your question' 
      />
      <ActionButton text={"Submit"} extraClasses={"h-fit"}/>
    </form>
  )
}

export default AskQuestion