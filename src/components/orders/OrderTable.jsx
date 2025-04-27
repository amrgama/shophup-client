import React from 'react'

const order= [
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
        ]
    },
]

const OrderTable = () => {

    const renderedTableRows = order.map((order, i)=>{
        let statusClass = null;
        
        switch(order.status){
            case "delivered": {
                statusClass = "delivered";
                break;
            }
            case "in progress": {
                statusClass = "in-progress";
                break;
            }
            case "cancel": {
                statusClass = "cancel";
                break;
            }            
        }

        return(
            <tr key={i}>
                <td scope="col" className='id'>#{order.id}</td>
                <td scope="col" className='products'>{"order.products"}</td>
                <td scope="col" className='date'>{order.createdAt}</td>
                <td scope="col" className='payment'>{order.payment}</td>
                <td scope="col" className={`status col ${statusClass}`}>{order.status}</td>
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
                <th scope="col">Payment</th>
                <th scope="col">Status</th>
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

export default OrderTable