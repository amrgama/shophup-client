import React from 'react'
import AnimatedLink from '../shared-components/links/AnimatedLink'

const AddressCard = ({title, mapLink, address, number, email}) => {
  return (
    <div className="col d-flex flex-column gap-3" style={{minWidth: "200px"}}>
        <h3 className='fs-6 fw-500 m-0'>{title}</h3>
        <div>
            {address.partOne}
            <br/>
            {address.partTwo}
            <br/>
            {number}
        </div>
        <span className="">{email}</span>
        <AnimatedLink to={"/"} wrapperclasses="w-fit">See Map</AnimatedLink>
    </div>
  )
}

export default AddressCard