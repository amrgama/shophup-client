import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import MainHeader from '../UI-kits/MainHeader';

const AddressHeader = ({text, link}) => {
  return (
    <div className="d-flex align-items-center">
        <Link to={link} className='nav-link'>
            <FaArrowLeftLong className='fs-5 me-3' />
        </Link>
        <MainHeader text={text} />
    </div>
  )
}

export default AddressHeader