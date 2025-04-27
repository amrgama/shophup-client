import React from 'react'

const NotFound = ({className, children}) => {
  return (
    <div className={`flex items-center text-muted ${className || ""}`}>
        {
            children?
                children
            :
                "not found"
        }
    </div>
  )
}

export default NotFound