import React from 'react'
import featuresConfig from '../../config/featuresConfig'
import FeatureCard from '../UI-kits/cards/FeatureCard'

const Features = ({className}) => {
  return (
    <section className={`${className || ""}`}>
                   {/* <hr className="block w-100 border-top border-1" /> */}
        <div className="container py-5">
            <div className="d-flex flex-wrap justify-content-between gap-4">
                {
                    featuresConfig.map((feature, i)=>{
                        return (
                            <FeatureCard key={i} {...feature} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Features