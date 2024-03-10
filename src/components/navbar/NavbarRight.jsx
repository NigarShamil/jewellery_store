import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const NavbarRight = () => {
    return (
        <div className='flex items-center gap-12 '>
            <div className='like relative'>
                <div className='qty absolute -top-2 -right-3 text-white rounded-full w-5 h-5 flex items-center justify-center'>0</div>
                <AiOutlineHeart className='like-icon cursor-pointer' size={25} />
            </div>
            <div className='cart relative'>
                <div className='qty absolute -top-2 -right-3 text-white rounded-full w-5 h-5 flex items-center justify-center'>0</div>
                <SlBasket size={25} className=' icons cursor-pointer' />
            </div>
        </div>
    )
}

export default NavbarRight