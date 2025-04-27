import React, { useState } from 'react'
import Row from './Row';

const cart= {
    id: "1",
    userId: "sdf",
    createdAt: "Aug 15, 2020",
    totalQty: 10,
    totalPrice: "1000",
    products: [
        {
            product: {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "image": "/bage-1.jpg",
                "images": [
                    "/bage-1.jpg",
                    "/bage-2.jpg",
                    "/bage-3.jpg",
                    "/bage-4.jpg"
                ],
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
            Qty: 3
        },
        {
            product: {
                "id": 3,
                "title": "Mens Cotton Jacket",
                "price": 55.99,
                "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "image": "/jacket-1.jpg",
                "images": [
                    "/jacket-1.jpg",
                    "/jacket-2.jpg",
                    "/jacket-3.jpg"
                ],
                "rating": {
                    "rate": 4.7,
                    "count": 500
                }
            },
            Qty: 5
        },
        {
            product: {
                "id": 4,
                "title": "Mens Casual Slim Fit",
                "price": 15.99,
                "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                "image": "/TshirtSlim-1.jpg",
                "images": [
                    "/TshirtSlim-1.jpg",
                    "/TshirtSlim-2.jpg",
                    "/TshirtSlim-3.jpg",
                    "/TshirtSlim-4.jpg"
                ],
                "rating": {
                    "rate": 2.1,
                    "count": 430
                }
            },
            Qty: 2
        }
    ]
};

const CartTable = () => {
    // const totalProdPrice = useState();
    // const renderedTableRows = cart.products.map(({product, Qty}, i)=>{

    //     return(
    //         <tr key={i}>
    //             <td scope="col" className='product align-middle'>
    //                 <div className="d-flex align-items-center gap-3 py-2">
    //                     <img 
    //                         src={product.image} 
    //                         alt={product.title} 
    //                         style={{width: "50px", height: "50px"}} 
    //                     />
    //                     <span>{product.title}</span>
    //                 </div>
    //             </td>
    //             <td scope="col" className='price align-middle'>{product.price}</td>
    //             <td scope="col" className='quantity align-middle'>{Qty}</td>
    //             <td scope="col" className="total align-middle">{product.price * Qty}</td>
    //             <td scope="col" className="action align-middle">{product.price * Qty}</td>
    //          </tr>
    //     )
    // })

    const renderedTableRows = cart.products.map((data, i)=>{
        return <Row key={i} index={i} data={data} />
    })

  return (
    <div style={{minWidth: "600px"}}>
        <table className="table table-hover text-start">
            <thead className='table-light'>
                <tr>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Product</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Price</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Quantity</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Total</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderedTableRows}
            </tbody>
        </table>
    </div>
  )
}

export default CartTable