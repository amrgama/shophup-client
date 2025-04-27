import React from 'react'
import MainHeader from '../../components/UI-kits/MainHeader'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { PiFacebookLogoBold } from 'react-icons/pi'
import { RiInstagramLine, RiTwitterFill } from 'react-icons/ri'
import { TbBrandPinterest } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import ContactForm from '../../components/contact/ContactForm'
import Section from '../../components/UI-kits/Section'
import companyConfig from '../../config/companyConfig'
import AddressCard from '../../components/contact/AddressCard'

const Contact = () => {
  return (
    <div id="contact">
        <main className="section-py">
            <div className="container">
                <div className="row g-0 gap-4 m-0">
                    <div className="col-12 col-lg h-fit d-flex flex-column gap-4 text-start">
                        <MainHeader text={"Get in touch with us today"} />
                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus.</p>
                        <div className="mobile-box d-flex flex-wrap">
                            <span className="mobile-icon my-auto me-3">
                                <BsTelephoneOutbound className="fs-1" />
                            </span>
                            <div>
                                <span className="fs-5">Got Questions ? Call us 24/7!</span>
                                <div className="mobile-num fw-bold">Call Us: (888) 1234 56789</div>
                            </div>
                        </div>
                        <div className="email-box d-flex flex-wrap">
                            <span className="email-icon my-auto me-3">
                                <TfiEmail className="fs-1" />
                            </span>
                            <div>
                                <span className="fs-5">Need help with your order?</span>
                                <div className="email fw-bold">support@Shophub.com</div>
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
                    <ContactForm />
                </div>
            </div>
        </main>
        <div className="container">
            <hr className='d-block bg-light m-0' />
        </div>
        <Section className="section-py">
            <div className="container">
                <div className="row g-0 m-0">
                    <div className="col-12 col-lg-6 h-fit d-flex flex-column gap-4 pe-0 pe-lg-3 ps-0 text-start">
                        <MainHeader>Come And Visit One Of Our Offices <br/> Around The World</MainHeader>
                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus.</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-wrap gap-4 ps-0 ps-lg-3 pe-0 text-start">
                        {
                            companyConfig.offices.map((office, i)=>{
                                return <AddressCard key={i} {...office} />
                            })
                        }
                    </div>
                </div>
            </div>
        </Section>
    </div>
  )
}

export default Contact