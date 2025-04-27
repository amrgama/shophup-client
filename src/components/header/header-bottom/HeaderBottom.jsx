import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Categories from './categories/Categories'
import { BsPerson } from 'react-icons/bs';
import AccountBox from './account/AccountBox';
import Offcanvas from './Offcanvas';
import useMediaQuery from '../../../hooks/useMediaQuery';
import navbarConfig from '../../../config/navbarConfig';
// import SignInButton from './SignInButton';
// import SignUpButton from './SignUpButton';

const HeaderBottom = () => {
    const {pathname} = useLocation();
    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const matches_md= useMediaQuery("(min-width: 768px)")
    console.log("pathname", pathname)
    return (
        <div className="header-bottom main-bg">
            <div className="container" style={{height: "55px"}}>
                <nav className="navbar w-100 h-100 navbar-expand-lg align-items-center py-0">
                    <Categories />
                    <nav className="col navbar navbar-expand-md justify-content-md-center align-items-center">
                        {/* <div className="d-flex align-items-center">
                        </div> */}
                            {
                                (matches_md)?
                                    <div className="collapse navbar-collapse order-4 order-lg-2" id="navbarNav">
                                        <ul className="navbar-nav gap-2 mx-auto">
                                            {
                                                navbarConfig.map(({link, label}, i)=>{
                                                    return(
                                                        <li key={i} className="nav-item border-dark">
                                                            <Link 
                                                                to={link}
                                                                className={`nav-link fw-500 position-relative ${(pathname === link)? "active": ""}`} 
                                                                aria-current="page" 
                                                            >
                                                                {label}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                :
                                    <Offcanvas />
                            }
                    </nav>
                    {!user && <AccountBox />}
                </nav>
            </div>
        </div>
    )
}

export default HeaderBottom