import React from 'react'
import SmallVerticalCard from '../products-card/SmallVerticalCard';

const RecentViewedProducts = ({products}) => {
  
  const renderedProductsCard = products.map((product, i)=>{
    return (
      <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2 py-2">
        <SmallVerticalCard product={product} />
      </div>
    );
  })

  return (
    <div className='col-12 d-flex flex-wrap mb-4'>
      {renderedProductsCard}
    </div>
  )
}

export default RecentViewedProducts