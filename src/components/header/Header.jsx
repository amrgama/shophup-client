import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './header-bottom/HeaderBottom'

const Header = () => {
  return (
    <header className='header'>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
    </header>
  )
}

export default Header