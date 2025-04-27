import React from 'react'
import data from '../../assets/data'
import Brand from './Brand'
import { Link } from 'react-router-dom'
import BrandsSlider from './BrandsSlider'
import MainHeader from '../UI-kits/MainHeader'
import Section from '../UI-kits/Section'

const Brands = () => {

  return (
    <Section>
        <div className="container">
            <div className="d-flex align-items-center mb-5">
                {/* <h1 className="col-8 col-sm fs-4 tex-dark text-start">Explore popular brands</h1> */}
                <MainHeader text={"Explore popular brands"} extraClasses={"text-nowrap"} />
                <Link to="/" className='link-hover-effect text-dark ms-auto'>See All</Link>
            </div>
            <div className="row flex-nowrap m-0 overflow-hidden">
                <BrandsSlider />
            </div>
        </div>
    </Section>
  )
}

export default Brands