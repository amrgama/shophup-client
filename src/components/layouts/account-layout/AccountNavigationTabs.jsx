import React from 'react'
import accountNavigationConfig from "../../../config/acccountNavigationConfig"
import { Link, useLocation } from 'react-router-dom'

const AccountNavigationTabs = () => {
    const {pathname} = useLocation();
    const currentLink = pathname.split("/").at(-1);

  return accountNavigationConfig.map((tab, i)=>{
        return (
          <li key={i} className="nav-item p-0">
            <Link
              to={tab.link}
              className={`nav-link btn w-100 border-0 text-start px-3 py-2 ${(currentLink === tab.link)? "main-bg text-primary": ""}`}>
              <tab.icon className="fs-4 me-2"/>
              {tab.label}
            </Link>
          </li>
        )
      })
}

export default AccountNavigationTabs