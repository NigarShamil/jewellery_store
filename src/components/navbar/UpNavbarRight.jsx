import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const UpNavbarRight = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.auth.isLogIn);
    return (
        <div className='flex items-center gap-5 my-2 '>
            <div className='icons flex gap-5 text-stone-400'>
                <span><RiFacebookFill size={15} className='' /></span>
                <span><FaInstagram size={15} /></span>
                <span><RiTwitterXFill size={15} /></span>
                <span><FaGooglePlusG size={15} /></span>
                <span><FaYoutube size={15} /></span>
            </div>
            <div onClick={() => navigate(isLoggedIn ? '/my-account' : '/login')} className='login flex items-center font-10 text-gray-400 gap-2'>
                <FaUser size={12} />{isLoggedIn ? 'My Account' : 'Login'}
            </div>
            <div className='switch font-10 text-gray-400 '>
                <select name="money" id="money" className='px-2 cursor-pointer'>
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                </select>
            </div>

        </div>
    )
}

export default UpNavbarRight