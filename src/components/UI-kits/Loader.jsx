import React from 'react'

const Loader = ({className}) => {
  return (
    <div className={`loader m-auto ${className || ""}`}></div>
  )
}

export default Loader