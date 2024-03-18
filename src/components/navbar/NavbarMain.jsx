import React from 'react'
import NavbarRight from './NavbarRight'
import Logo from "../../assets/images/covers/logo.png"
import NavbarLeft from './NavbarLeft'
import { GiCutDiamond } from "react-icons/gi";

const NavbarMain = () => {
  return (
    <div className='flex items-center justify-between  text-center'>
         <div><NavbarLeft/></div>
         <div><img className='w-[150px]' src={Logo} alt="logo" /></div>
         {/* <div className='flex flex-col justify-center items-center text-center'>
          <p><GiCutDiamond size={30}/></p>
          <p className='logo text-6xl'>Joyería</p>
         </div> */}
        <div><NavbarRight/></div>
       
    </div>
  )
}

export default NavbarMain