import React, { useRef, useState } from 'react'
import { BsGraphUpArrow, BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SignInLink from '../SignInLink'
import { useShow } from '../../../../hooks/useShow'
import useMediaQuery from "../../../../hooks/useMediaQuery"
import { logOut, selectAuth } from '../../../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const AccountBox = () => {
    const buttonRef = useRef();
    const {show, handleShowOnClick} = useShow(buttonRef.current);
    const {user, isAuth}= useSelector(selectAuth);
    const dispatch= useDispatch();
    const matches_md = useMediaQuery("(min-width: 576px)")

  return (
    <div 
        className="box-account w-fit d-flex position-relative order-md-3"
        style={{height: "40px"}}
    >
        <button 
            ref={buttonRef}
            type="button" 
            onClick={handleShowOnClick}
            className={`btn-toggler w-fit h-fit d-flex rounded-pill border border-start-0 ${matches_md? "border-1": "border-0"} border-dark m-auto bg-transparent p-0`}
        >
            <span 
                className='account-icon d-flex rounded-circle me-md-1 text-white bg-primary'
                style={{width: "40px", height: "40px"}}
            >
                <BsPerson className='fs-5 m-auto' />
            </span>
            <span className="d-none d-md-inline-block my-auto text-muted me-2">Account</span>
        </button>
        <div 
            className={`main-dropdown centered w-fit ${show? "show": ""} shadow-sm bg-transparent rounded-1 pb-0`} 
        >
          <ul className="navbar-nav flex-column bg-white py-2" style={{minWidth: "152px"}}>
            { !isAuth &&
                <>
                    <li className="nav-item p-0">
                        <SignInLink extraClasses={" w-fit mx-auto mb-2 rounded-pill p-2 main-bg"}/>
                        <p className="fs-8 fw-500 text-muted text-nowrap px-2">
                            New customer <Link to={"/sign-up"} className="text-decoration-underline text-secondary">start here</Link>
                        </p>
                    </li>
                    <hr className='m-0' />
                </>
            }
            <>
                <li className="nav-item p-0">
                    <Link to={"/my-account/edit/profile-information"} className="nav-link text-start fs-7 fw-500 px-3 py-1" >Account</Link>
                </li>
                {/* <hr className='m-0' /> */}
                <li className="nav-item p-0">
                    <Link to={"/cart"} className="nav-link text-start fs-7 fw-500 px-3 py-1" >Card</Link>
                </li>
                <li className="nav-item p-0">
                    <Link to={"/my-account/orders"} className="nav-link text-start fs-7 fw-500 px-3 py-1" >Orders</Link>
                </li>
                <li className="nav-item p-0">
                    <Link to={"/my-account/wishlist"} className="nav-link text-start fs-7 fw-500 px-3 py-1" >Wishlist</Link>
                </li>
                {
                    isAuth &&
                    <li className="nav-item p-0">
                        <button onClick={()=> dispatch(logOut())} className="nav-link text-start fs-7 fw-500 px-3 py-1" >Log out</button>
                    </li>
                }
            </>
          </ul>
        </div>
    </div>
  )
}

export default AccountBox