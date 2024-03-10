import React from 'react'
import NavbarRight from './NavbarRight'
import Logo from "../../assets/images/covers/logo.png"
import NavbarLeft from './NavbarLeft'

const NavbarMain = () => {
  return (
    <div className='flex items-center justify-between  px-5 '>
         <div><NavbarLeft/></div>
         <div><img className='w-[150px]' src={Logo} alt="logo" /></div>
        <div><NavbarRight/></div>
       
    </div>
  )
}

export default NavbarMain