import React from 'react'
import AccountNavigation from './AccountNavigation'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AccountLayout = () => {
    return (
        <div id='account' className='py-5'>
          <div className="container">
            <div className="d-flex flex-wrap gap-4">
                <AccountNavigation/>
                <main 
                  className="dashboard-body col-12 col-lg d-flex flex-column overflow-y-aut overflow-x-hidde position-relative"
                  style={{minHeight: "450px"}}
                >
                  <AnimatePresence mode="sync" initial="false">
                    <Outlet />
                  </AnimatePresence>
                </main>
            </div>
          </div>
        </div>
      )
}

export default AccountLayout