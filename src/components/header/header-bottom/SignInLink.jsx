import React, { useRef, useState } from 'react'
import {SlLogin} from "react-icons/sl"
import {BsPerson} from "react-icons/bs"
import { Link } from 'react-router-dom'

const SignInLink = ({extraClasses, children}) => {
    const [show, setShow] = useState(false);
    const target = "offcanvasRightLogin";
    const offcanvasWrapperRef = useRef();

  return (
    <>
        <Link 
            to={"/sign-in"}
            onClick={e => setShow(!show)}
            className={`nav-link bg-transparent d-flex text-dark fw-500 ${extraClasses? extraClasses : ""}`} 
        >
            <span className='singin-icon m-auto me-1'>
                <BsPerson />
            </span>
            <span className="my-auto me-auto">{children? children: "sign in"}</span>
        </Link>        
    </>
  )
}

export default SignInLink