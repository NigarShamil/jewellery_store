import React from 'react'
import { BiSearch } from "react-icons/bi";

const NavbarLeft = () => {
    return (
        <div>
            <div className=' search flex items-center '>
                <BiSearch className='icons ' size={25} />
                <input className=' search-input outline-none ' type="text" placeholder='Search products...' />
            </div>
        </div>
    )
}

export default NavbarLeft