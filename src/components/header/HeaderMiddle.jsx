import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {GoGitCompare} from "react-icons/go"
import {AiOutlineHeart} from "react-icons/ai"
import {motion} from "framer-motion"
import SearchInput from './search/SearchInput';
import CartButton from './CartButton';
import LinkButton from '../UI-kits/LinkButton'

const HeaderMiddle = () => {
    const [user, setUser] = useState(false);
    const {pathname} = useLocation();

  return (
    <div className="header-middle">
        <div className="container">
            <div className="row gap-2 flex-row align-items-center justify-content-between w-100 py-2 m-0">
                <div className="left w-fit p-0">
                    <Link className="navbar-brand" to="/">
                        <span className="logo">Shop<span>hub</span></span>
                    </Link>
                </div>
                <div className="middle col-12 col-md p-0 d-flex justify-content-center order-3 order-md-2 order-lg-2" style={{maxWidth: "550px"}}>
                    <SearchInput />
                </div>
                <div className="right w-fit p-0 ms-auto ms-lg-0 order-2 order-md-3 order-lg-3">
                    <div className="btn-wrapper d-flex align-items-center gap-2 gap-lg-3">
                        <button 
                            // initial={{color: "var(--bs-light)", borderColor: "var(--bs-light)"}}
                            // whileHover={{color: "var(--bs-primary)", borderColor: "var(--bs-primary)"}}
                            type="button" 
                            className="btn btn-compare d-flex p-0 bg-transparent rounded-circle border border-1 border-light" style={{width: "40px", height:"40px"}}
                        >
                            <GoGitCompare className="fs-5 m-auto" />
                        </button>
                        <Link 
                            to={"/my-account/wishlist"}
                            style={{width: "40px", height:"40px"}}
                            className="btn btn-heart d-flex p-0 bg-transparent rounded-circle border border-1 border-light"
                        >
                            <AiOutlineHeart className="fs-5 m-auto" />
                        </Link>
                        <CartButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMiddle