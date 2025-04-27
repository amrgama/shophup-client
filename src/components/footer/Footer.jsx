import React from 'react'
import { Link } from 'react-router-dom'
import {BsTelephoneOutbound} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"
import {PiFacebookLogoBold} from "react-icons/pi"
import {RiInstagramLine, RiTwitterFill} from "react-icons/ri"
import {TbBrandPinterest} from "react-icons/tb"
import {MdOutlineUnsubscribe, MdUnsubscribe} from "react-icons/md"

import data from '../../assets/data'
import images from '../../assets/images'
import AnimatedLink from '../shared-components/links/AnimatedLink'

const CategoriesList = ()=>{
    return(
        [...data.categories].splice(0, 5).map((cat, i)=>{
            return (
                <li key={i} className="nav-item text-start text-light">
                    <AnimatedLink to={"/"} wrapperclasses="w-fit">{cat.label}</AnimatedLink>
                </li>
            )
        })
    ) 
}

const PayMethodsList = ()=>{

    return (
        images.payMethods.map((image, i)=>{
            return (
                <li key={i} className="col nav-item text-start">
                    <Link to={"/"} className="nav-link w-fit">
                        <img className='w-100' src={image} alt="..." />
                    </Link>
                </li>
            )
        })
    )
}
const Footer = () => {
    

    return (
    <footer className='section-py mt-auto' style={{backgroundColor: "#484848",}}>
        <div className="container py-3">
            <div className="row m-0">
                <div className="col-12 col-md-6 col-lg-3 p-3">
                    <div className="d-flex flex-column gap-3">
                        <Link className="logo-link d-block me-auto" to="/">
                            <span className="logo">Shop<span>hub</span></span>
                        </Link>
                        <div className="contact w-100 d-flex flex-column gap-3">
                            <div className="mobile-box d-flex flex-wrap">
                                <span className="mobile-icon my-auto me-2">
                                    <BsTelephoneOutbound className="fs-2 text-white" />
                                </span>
                                <div className="">
                                    <span className="text-light fs-8">Got Questions ? Call us 24/7!</span>
                                    <div className="mobile-num fw-bold text-white">Call Us: (888) 1234 56789</div>
                                </div>
                            </div>
                            <div className="email-box d-flex flex-wrap">
                                <span className="email-icon my-auto me-2">
                                    <TfiEmail className="fs-2 text-white" />
                                </span>
                                <div className="">
                                    <span className="text-light fs-8">Need help with your order?</span>
                                    <div className="email fw-bold text-white">support@Shophub.com</div>
                                </div>
                            </div>
                            <div className="social-box d-flex align-items-center gap-2">
                                <Link to="/" className="facebook text-dark">
                                    <PiFacebookLogoBold className="fs-3" />
                                </Link>
                                <Link to="/" className="twitter text-dark">
                                    <RiTwitterFill className="fs-3" />
                                </Link>
                                <Link to="/" className="instagram text-dark">
                                    <RiInstagramLine className="fs-3" />
                                </Link>
                                <Link to="/" className="pinterest text-dark">
                                    <TbBrandPinterest className="fs-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-3">
                    <div className="d-flex flex-column gap-3">
                        <span className="fs-5 fw-500 text-white me-auto">Customer Support</span>
                        <ul className="navbar-nav">
                            <li className="nav-item text-start text-light">
                                <AnimatedLink to={"/"} wrapperclasses="w-fit">Contact Us</AnimatedLink>
                            </li>
                            <li className="nav-item text-start text-light">
                                <AnimatedLink to={"/"} wrapperclasses="w-fit">Help Centre</AnimatedLink>
                            </li>
                            <li className="nav-item text-start text-light">
                                <AnimatedLink to={"/"} wrapperclasses="w-fit">Returns & Exchanges</AnimatedLink>
                            </li>
                            <li className="nav-item text-start text-light">
                                <AnimatedLink to={"/"} wrapperclasses="w-fit">Best Buy Financing</AnimatedLink>
                            </li>
                            <li className="nav-item text-start text-light">
                                <AnimatedLink to={"/"} wrapperclasses="w-fit">Best Buy Gift Card</AnimatedLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-3">
                    <div className="d-flex flex-column gap-3">
                        <span className="fs-5 fw-500 text-white me-auto">Find By Categories</span>
                        <ul className="navbar-nav">
                            <CategoriesList />
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-3">
                    <div className="d-flex flex-column gap-3">
                        <span className="fs-5 fw-500 text-white me-auto">Subscribe</span>
                        <div className="d-flex flex-column gap-3 w-100">
                            <div className="subscript-input position-relative">
                                <input type="text" className="form-control border rounded-pill py-2 pe-5" />
                                <button className="btn btn-secondary h-100 d-flex px-3 py-2 position-absolute top-0 end-0">
                                    <MdUnsubscribe className="fs-4 text-white m=auto"/>
                                </button>
                            </div>
                            <div className="pay-methods">
                                <span className="d-block text-start fs-5 text-light">We Accept</span>
                                <ul className="navbar-nav flex-row flex-wrap gap-3">
                                    <PayMethodsList />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer