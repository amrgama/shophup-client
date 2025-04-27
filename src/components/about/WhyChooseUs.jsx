import React from 'react'
import Section from '../UI-kits/Section'
import MainHeader from '../UI-kits/MainHeader'
import FeatureCard from '../UI-kits/cards/FeatureCard'
import featuresConfig from '../../config/featuresConfig'

const WhyChooseUs = () => {
  return (
    <Section extraClasses={"section-py"}>
        <div className="container">
            <div className="d-flex flex-column gap-4 m-0">
                <MainHeader text={"Why Choose Us?"} />
                <div className="d-flex flex-wrap justify-content-between gap-3">
                    {
                        featuresConfig.map((feature, i)=>{
                            return (
                                <FeatureCard key={i} index={i} {...feature} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </Section>
  )
}

export default WhyChooseUs