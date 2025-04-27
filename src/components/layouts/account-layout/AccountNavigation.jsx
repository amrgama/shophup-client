import React from 'react'
import {HiLogout} from "react-icons/hi"
import images from '../../../assets/images'
import AccountNavigationTabs from './AccountNavigationTabs'

const AccountNavigation = () => {
  
  return (
    <aside className='col-12 col-lg-3 dashboard-aside'>
        <div className="user-info d-none d-lg-flex flex-wrap align-items-center">
            <div className="col-4 d-flex p-2">
                <img src={images.persons.person1} alt="" className="w-100 d-block m-auto" />
            </div>
            <div className="col-8 d-flex flex-column text-start">
                <span className="w-100 text-dark text-capitalize fw-500">Amr Jamal</span>
                <span className="w-100 fs-7 text-dark text-wrap">amrjamal@gmail.com</span>
            </div>
        </div>
        {/* <hr className="d-none d-lg-block mx-2 my-0" /> */}
        <nav className="dashboard-navigation navbar navbar-expand-lg">
          <div className="container px-3 py-1 lh-lg">
          <h1 className='d-inline-block d-lg-none fs-5 fw-bold text-dark me-auto'>My Dashboard</h1>
          <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <u className="w-100 navbar-nav flex-lg-column">
              <AccountNavigationTabs />
              <li className="nav-item p-0">
                <button
                  type='button'
                  onClick={e => setActive(!active)} 
                  className={`nav-link btn btn-secondary border-0 w-100 text-start text-dark px-3 py-2`}>
                  <HiLogout className="fs-5 me-2"/>
                  Logout
                </button>
              </li>
            </u>
          </div>
          </div>
        </nav>
    </aside>
  )
}

export default AccountNavigation