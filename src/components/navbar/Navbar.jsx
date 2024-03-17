import React from 'react'
import UpNavbar from './UpNavbar'
import NavbarMain from './NavbarMain'
import { IoDiamondOutline } from "react-icons/io5";
import "./navbar.css"

const Navbar = () => {
    return (
        <div >
            <div className='w-10/12 m-auto'>
                <UpNavbar />
                <NavbarMain />
            </div>
            <div className='line h-14 flex justify-end'>
                <div className='text-white flex items-center px-4 gap-3'><IoDiamondOutline className='line-icon'/> CLEARANCE UP TO 30% OFF</div>
            </div>

        </div>
    )
}

export default Navbar