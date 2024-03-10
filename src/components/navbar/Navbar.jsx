import React from 'react'
import UpNavbar from './UpNavbar'
import NavbarMain from './NavbarMain'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='w-10/12 m-auto'>
            <UpNavbar />
            <NavbarMain />
        </div>
    )
}

export default Navbar