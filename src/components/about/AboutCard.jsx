import React from 'react'

const AboutCard = ({number, numExtension, description}) => {
  return (
    <div className='col d-flex flex-column align-items-center gap-1'>
        <span className="display-4 fw-500 mb-auto">
            {number}{numExtension}
        </span>
        <p className="text-muted text-center m-0">
            {description}
        </p>
    </div>
  )
}

export default AboutCard