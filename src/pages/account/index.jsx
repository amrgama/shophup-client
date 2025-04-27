import React from 'react'
import { motion } from 'framer-motion'
import SectionNavigation from '../../components/shared-components/SectionNavigation'
import MainHeader from '../../components/UI-kits/MainHeader'
import { Outlet, useLocation } from 'react-router-dom'

const tabs= [
  {
    label: "Profile Iformation",
    link: "/my-account/edit/profile-information"
  },
  {
    label: "Password",
    link: "/my-account/edit/password"
  }
]
const Account = () => {
  const {pathname} = useLocation();
  console.log("pathname", pathname, "tab[0]", tabs[0])
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate= "animate"
      exit="exit"
      transition={{
          duration: 0.3, 
          type: "spring", 
          stiffness: "60"
      }}
      id="account"
      className='account-details col-12 position-absolute top-0 start-0'
      style={{minHeight: "450px"}}
    >
      <div className="col-12 d-flex flex-wrap gap-1 mb-4">
        <MainHeader text={"Account Details"} extraClasses={"col-12 col-md"} />
        <SectionNavigation navLinks={tabs} />
      </div>
      <Outlet />
    </motion.div>
  )
}

const variants = {
  "initial": {
      visibility: "hidden", 
      opacity: 0, 
      position: "absolute", 
      translateY: "100%" 
  },
  "animate": {
      visibility: "visible", 
      opacity: 1, 
      position: "relative", 
      translateY: "0%"
  },
  "exit": {
      visibility: "hidden", 
      opacity: 0, 
      position: "absolute", 
      translateY: "-100%"
  }
}

export default Account