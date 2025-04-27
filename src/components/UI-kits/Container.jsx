import React from 'react'

const Container = ({id, extraClasses, children}) => {
    const className= `container ${extraClasses ?? ""}`
  return (
    <>
        {
            (id)?
                <div id={id} className={className}>{children}</div>
            :
                <div className={className}>{children}</div>
        }
    </>
  )
}

export default Container