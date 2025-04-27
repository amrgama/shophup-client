import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa6";
import AddToCartCard from './add-to-cart-card/AddToCartCard';
import { Link } from 'react-router-dom';

const ProductData = ({product, isLoading}) => {
   const renderedTags= product?.tags?.join(" ");

  return (
    <div className='col px-0 px-lg-3 p-3'>
        <div className='text-start py-4'>
            <h1 className="d-block fs-4 text-start text-dark">
                {product?.title}
            </h1>
            <span className="text-muted">{product?.categories?.[0]}</span>
        </div>
        <hr className='d-block mt-3 mb-5 bg-dark' />
        <div className="d-flex flex-wrap gap-3">
            <div 
                className='d-flex flex-column gap-4 align-content-between text-start'
                style={{minWidth: "270px", maxWidth: "300px"}}
            >
                <p className='text-muted'>
                    {
                        product?.description ||
                        <>
                            Vivamus in tempor eros. Phasellus rhoncus in nunc
                            sit amet mattis. Integer in ipsum vestibulum.
                        </>
                    }
                </p>
                {/* <div className="details d-flex flex-column">
                    <div className="d-flex flex-wrap text-capitalize text-start lh-lg">
                        {
                            product?.brands?.map((brand, i)=>(
                                <div key={i} className="col">{brand}</div>
                            ))
                        }
                    </div>
                    <div className="d-flex flex-wrap text-capitalize  text-start lh-lg">
                        <div className="col">Model Name</div>
                        <div className="col">MacBook Pro</div>
                    </div>
                    <div className="d-flex flex-wrap text-capitalize  text-start lh-lg">
                        <div className="col">Screen Size</div>
                        <div className="col">16.2 Inches</div>
                    </div>
                    <div className="d-flex flex-wrap text-capitalize  text-start lh-lg">
                        <div className="col">Color</div>
                        <div className="col">Space Gray</div>
                    </div>
                    <div className="d-flex flex-wrap text-capitalize  text-start lh-lg">
                        <div className="col">Hard Disk Size</div>
                        <div className="col">1 TB</div>
                    </div>
                    <div className="d-flex flex-wrap text-capitalize  text-start lh-lg">
                        <div className="col">CPU Model</div>
                        <div className="col">Apple M1</div>
                    </div>
                    <div className="d-flex flex-wrap text-capitalize  text-start lh-lg">
                        <div className="col">Ram Memory</div>
                        <div className="col">16 GB</div>
                    </div>
                    <div className="d-flex flex-wrap text-capitalize  text-start lh-lg">
                        <div className="col">Installed Size</div>
                        <div className="col">16 GB</div>
                    </div>
                </div> */}
                <div>
                    <div>
                        <span className="fw-500 me-2">Category: </span>
                        {product?.category}
                    </div>
                    <div>
                        <span className="fw-500 me-2">Tags: </span>
                        {renderedTags}
                    </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <span className="fw-bold">Share</span>
                    <Link 
                        to="" 
                        className="d-flex fs-5 rounded-circle border border-2"
                        style={{width: "35px", height: "35px"}}
                    >
                        <TiSocialFacebook className=' text-black m-auto' />
                    </Link>
                    <Link 
                        to="" 
                        className="d-flex fs-5 rounded-circle border border-2"
                        style={{width: "35px", height: "35px"}}
                    >
                        <FaInstagram className=' text-black m-auto' />
                    </Link>
                    <Link 
                        to="" 
                        className="d-flex fs-5 rounded-circle border border-2"
                        style={{width: "35px", height: "35px"}}
                    >
                        <IoLogoTwitter className=' text-black m-auto' />
                    </Link>
                    <Link 
                        to="" 
                        className="d-flex fs-5 rounded-circle border border-2"
                        style={{width: "35px", height: "35px"}}
                    >
                        <FaPinterestP className=' text-black m-auto' />
                    </Link>
                </div>
            </div>
            <AddToCartCard productData={product} />
        </div>
    </div>
  )
}

export default ProductData