import React from 'react'
import Navigation from './Navigation'
import Description from './Description'
import AdditionalInformation from './AdditionalInformation'
import QuestionsAndAnswers from './answers-and-questions/QuestionsAndAnswers'
import CustomerReviews from './customer-reviews/CustomerReviews'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import RelatedProdducts from './related-products/RelatedProdducts'


const tabs=[
    "description",
    "additional information",
    "Questions and Answers",
    "customer reviews"
]
const Body = ({product}) => {
  const {hash}= useLocation();

  return (
    <>
      <section className='py-5'>
        <div className="container">
            <div className="d-flex flex-column">
              <Navigation tabs={tabs} defaultTab={"description"} />
              <div className="pt-5">
                <AnimatePresence mode="sync" initial="false">
                  { ((hash === `#${tabs[0].replaceAll(" ", "-")}`) || !!!hash) && <Description description={product?.description} /> }
                  { (hash === `#${tabs[1].replaceAll(" ", "-")}`) && <AdditionalInformation /> }
                  { (hash === `#${tabs[2].replaceAll(" ", "-")}`) && <QuestionsAndAnswers /> }
                  { (hash === `#${tabs[3].replaceAll(" ", "-")}`) && <CustomerReviews /> }
                </AnimatePresence>
              </div>
            </div>
        </div>
      </section>
      <RelatedProdducts />
    </>
  )
}

export default Body