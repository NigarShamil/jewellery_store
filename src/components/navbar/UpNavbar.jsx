import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import UpNavbarRight from './UpNavbarRight';
import "./navbar.css"

const UpNavbar = () => {
    return (
        <div className='flex items-center justify-between border-b'>
            <div className='call flex items-center gap-2 text-stone-400'><IoCallOutline size={15} /> Call: +0123 456 789</div>
            <div><UpNavbarRight /></div>
        </div>
    )
}

export default UpNavbar