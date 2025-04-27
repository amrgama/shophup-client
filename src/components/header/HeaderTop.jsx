import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTop = () => {
  return (
    <div className='header-top border-bottom border-1 border-light'>
        <div className="container py-1">
            <div className="d-flex justify-content-between gap-2">
                <div className='h-100 d-flex gap-2 align-items-center fs-9'>
                    <Link to={"/"} className='nav-link text-capitalize p-0'>support</Link>
                    <div className="vr"></div>
                    <Link to={"/"} className='nav-link text-capitalize p-0'>trace order</Link>
                </div>
                <div className="h-100 fs-9">
                    <span className='text-primary'>Call Us: </span>
                    <span>(888) 1234 56789</span>
                </div>
                <div className="h-100 d-flex gap-2 align-items-center fs-9">
                    <span>USD</span>
                    <div className="vr"></div>
                    <span>English</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop