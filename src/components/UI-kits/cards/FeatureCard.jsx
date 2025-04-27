import React from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery'

const FeatureCard = ({index, icon: Icon, title, description}) => {
  const matches = useMediaQuery("(min-width: 992px)")

  return (
    <div className={`col d-flex`} style={{maxWidth: matches? "280px": "250px", minWidth: "230px"}}>
        <span className="me-3">
            <Icon className="fs-1" />
        </span>
        <div className='d-flex flex-column align-items-start'>
            <span className="fw-bold text-dark">{title}</span>
            <span className="text-start text-muted">{description}</span>
        </div>
    </div>
  )
}

export default FeatureCard