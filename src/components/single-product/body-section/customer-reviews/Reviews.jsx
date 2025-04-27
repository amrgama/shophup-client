import React from 'react'
import CustomerReview from './CustomerReview'
import AddReviewForm from './AddReviewForm'

const Reviews = ({reviews}) => {
  
    const renderedReviews = reviews.map((review, i)=>{
        return <CustomerReview key={i} {...review} />
    })
    return (
        <div className='col d-flex flex-column gap-4'>
            {renderedReviews}
            <AddReviewForm />
        </div>
    )
}

export default Reviews