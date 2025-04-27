import React from 'react'
import Slider from './slider/Slider'
import Section from '../UI-kits/Section'

const HeroSection = () => {
  return (
    <Section>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-3 d-none d-md-block"></div>
          <div className="col-12 col-lg-9 p-0 px-lg-3">
            <Slider />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HeroSection