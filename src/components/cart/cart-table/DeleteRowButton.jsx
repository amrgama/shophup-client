import React from 'react'

const DeleteRowButton = ({rowId, onClick, extraClasses}) => {
  const className = `btn-close m-auto ${extraClasses ?? ""}`
  
  return (
    <button 
      type="button"
      onClick={onClick} 
      className={className} 
      data-bs-dismiss={rowId} 
      aria-label="Close"
    ></button>
  )
}

export default DeleteRowButton