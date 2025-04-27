import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({category}) => {
  // console.log("category", category)
  const renderedLiElements = category.values.map((item, i)=>{
    return <li key={i} className="nav-item px-2 py-1">
      <Link to="/" className="nav-link p-0 fs-8">{item}</Link>
    </li>
  })
  return (
    <div className='category text-start px-2 py-1'>
      <span className='category-label fs-7 fw-bold'>{category.label}</span>
      <ul className="navbar-nav flex-column">
        {renderedLiElements}
      </ul>
    </div>
  )
}

export default Category