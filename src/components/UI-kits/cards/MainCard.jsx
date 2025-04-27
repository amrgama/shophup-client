import React from 'react'

const MainCard = ({title, extraClasses, children}) => {
    const className = `card gap-4 p-4 text-start border-0 rounded-3 shadow-sm ${extraClasses ?? ""}`
  return (
    <div 
        className={className}
    >
        <span className="d-block fs-5 fw-bold mb-4">{title}</span>
        {children}
    </div>
  )
}

export default MainCard