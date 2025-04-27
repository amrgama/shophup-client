import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = ({tabs, defaultTab}) => {
  const {hash}= useLocation();
  const [activeHash, setActiveHash]= useState(hash);

  const handleOnClick = (e)=>{

    setActiveHash(e.currentTarget.dataset.value);
  }

  const renderedTabs= tabs.map(tap =>{
    
    return (
      <Link
        key={tap}
        onClick={handleOnClick}
        className={`nav-link py-3 text-capitalize text-dark fw-500 ${(activeHash === `#${tap.replaceAll(" ", "-")}`  || !!!activeHash && tap == defaultTab)? "active text-white": ""}`} 
        aria-current="page"
        data-value={`#${tap.replaceAll(" ", "-")}`} 
        to={`#${tap.replaceAll(" ", "-")}`}
      >{tap}</Link>
    )
  });

  return (
    <nav className="nav nav-pills nav-fill mb-4">
      {renderedTabs}
    </nav>
  )
}

export default Navigation