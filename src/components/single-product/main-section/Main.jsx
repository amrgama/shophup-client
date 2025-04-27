import React from 'react'
import ImagesPreview from './ImagesPreview'
import ProductData from './ProductData'

// const product = {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "categories": ["Men's clothing", "Clothes", "T-Shirts"],
//     "tags": ["Men's clothing", "Clothes", "T-Shirts"],
//     "images": [
//         "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", 
//         "http://localhost:3600/71YXzeOuslL._AC_UY879_.jpg", 
//         "http://localhost:3600/71li-ujtlUL._AC_UX679_.jpg"
//     ],
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     },
//     colors: [
//         "red",
//         "green",
//         "orange",
//         "black"
//     ]
// }

const Main = ({product, isLoading}) => {
  return (
    <section className='py-5'>
        <div className="container">
            <div className="row m-0">
                <ImagesPreview images={product?.images} isLoading={isLoading} />
                <ProductData product={product} isLoading={isLoading} />
            </div>
        </div>
    </section>
  )
}

export default Main