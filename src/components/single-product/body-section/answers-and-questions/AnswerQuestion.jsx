import React from 'react'
import ActionButton from '../../../UI-kits/ActionButton'

const AnswerQuestion = () => {
  return (
    <form 
      onSubmit={e=> e}
      className='col d-flex flex-wrap gap-3 text-start mt-5'
        style={{maxWidth: "600px"}}
    >
        <span className='w-100 d-block fw-500 fs-5'>Add Your Answer</span>
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
          placeholder='your answer' 
        />
        <ActionButton text={"Submit"} />
    </form>
  )
}

export default AnswerQuestion