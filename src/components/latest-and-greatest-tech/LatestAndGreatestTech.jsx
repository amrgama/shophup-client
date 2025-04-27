import React from 'react'
import { Link } from 'react-router-dom'
import ProductsSlider from './ProductsSlider'
import Section from '../UI-kits/Section'
import MainHeader from '../UI-kits/MainHeader'
import useMediaQuery from '../../hooks/useMediaQuery'

const LatestAndGreatestTech = () => {
    const matches = useMediaQuery("(min-width: 992px)")
  return (
    <Section
        id={"latest-greatest-tech"}
    >
        <div className="container">
            <div className="d-flex flex-wrap gap-4 gap-lg-3">
                <div className="col-12 col-lg d-flex flex-column gap-3">
                    <MainHeader text={"Latest and Greatest Tech."} variant={matches? "start" : "center"} extraClasses={"text-white"} />
                    {/* <h2 className="fs-3 text-white text-lg-start"></h2> */}
                    <p className="text-white text-lg-start m-0">Check out the latest product launches and get inspired by the tech of tomorrow.</p>
                    <Link to={"/"} className="w-fit btn btn-secondary px-5 py-2 lh-lg rounded-pill text-dark fw-400 mx-auto mx-lg-0">
                        Shop Now
                    </Link>
                </div>
                <ProductsSlider />
            </div>
        </div>
    </Section>
  )
}

export default LatestAndGreatestTech