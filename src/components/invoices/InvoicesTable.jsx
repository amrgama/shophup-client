import React from 'react'

const invoices= [
    {
        id: "1",
        userId: "sdf",
        status: "delivered",
        payment: "paid",
        createdAt: "Aug 15, 2020",
        countity: 10,
        total: "1000",
        products: [
            {
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
        ]
    },
    {
        id: "2",
        userId: "sdf",
        status: "cancel",
        payment: "paid",
        createdAt: "Aug 15, 2020",
        countity: 10,
        total: "1000",
        products: [
            {
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
            }
        ]
    },
    {
        id: "3",
        userId: "sdf",
        status: "in progress",
        payment: "paid",
        createdAt: "Aug 15, 2020",
        countity: 10,
        total: "1000",
        products: [
            {
                
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
        ]
    },
]

const InvoicesTable = () => {

    const renderedTableRows = invoices.map((order, i)=>{

        return(
            <tr key={i}>
                <td scope="col" className='id'>#{order.id}</td>
                <td scope="col" className='products'>{"order.products"}</td>
                <td scope="col" className='date'>{order.createdAt}</td>
                <td scope="col" className='countity'>{order.countity}</td>
                <td scope="col" className='total'>${order.total}</td>
            </tr>
        )
    })

  return (
    <table className="table table-hover">
        <thead className='table-light'>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Products</th>
                <th scope="col">Date</th>
                <th scope="col">Countity</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            {renderedTableRows}
        </tbody>
    </table>
  )
}

export default InvoicesTable