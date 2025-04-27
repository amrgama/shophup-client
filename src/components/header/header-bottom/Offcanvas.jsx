import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { Link, useLocation } from 'react-router-dom';

const Offcanvas = () => {
    const {pathname} = useLocation();
    console.log("pathname", pathname)
  return (
    <>
        <button 
            className="btn d-flex bg-transparent ms-auto" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasWithBothOptions" 
            aria-controls="offcanvasWithBothOptions"
        >
            <SlMenu className='fs-4 m-auto' />
        </button>
        <div className="offcanvas offcanvas-start" style={{zIndex: "10000"}} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasLeft">
            <div className="offcanvas-header d-flex">
                {/* <h5 className="offcanvas-title" id="offcanvasLeft">Backdrop with scrolling</h5> */}
                <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav gap-2 mx-auto">
                    <li className="nav-item border-dark">
                        <Link className={`nav-link fw-500 position-relative ${(pathname === "/")? "active": ""}`} aria-current="page" to="/">home</Link>
                    </li>
                    <li className="nav-item border-dark" >
                        <Link className={`nav-link flex-wrap fw-500 position-relative ${(pathname === "/shop")? "active": ""}`} to="/shop">shop</Link>
                    </li>
                    <li className="nav-item border-dark" >
                        <Link className={`nav-link fw-500 position-relative ${(pathname === "/")? "active": ""}`} to="/">about</Link>
                    </li>
                    <li className="nav-item" >
                        <Link className={`nav-link fw-500 position-relative ${(pathname === "/")? "active": ""}`} to="/">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Offcanvas