import React from 'react'
import useMediaQuery from "../../hooks/useMediaQuery"

const MainHeader = ({text, icon, variant, extraClasses, children}) => {
    const matches = useMediaQuery("(max-width: 576px)");
    const className= `d-flex align-items-center gap-2 lh-lg ${matches? "fs-4" : "fs-3"} text-capitalize text-dark m-0 ${(!!variant)? `justify-content-${variant} text-${variant}` : ""} ${extraClasses ?? ""}`
  return (
    <h1 className={className}>
      {text}
      {!!icon && icon}
      {children}
    </h1>
  )
}

export default MainHeader