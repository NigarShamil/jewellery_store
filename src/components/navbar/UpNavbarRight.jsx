
import React, { useState } from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaUser, FaChevronDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const UpNavbarRight = () => {
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false);
    const isLoggedIn = useSelector(state => state.auth.isLogIn);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="up-navbar-right">
            <div className='links flex items-center gap-5 my-2 '>
                <div className='icons flex gap-5 text-stone-400'>
                    <span><RiFacebookFill size={15} className='' /></span>
                    <span><FaInstagram size={15} /></span>
                    <span><RiTwitterXFill size={15} /></span>
                    <span><FaGooglePlusG size={15} /></span>
                    <span><FaYoutube size={15} /></span>
                </div>
                <div onClick={() => navigate(isLoggedIn ? '/my-account' : '/signIn')} className='login flex items-center font-10 text-gray-400 gap-2'>
                    <FaUser size={12} />{isLoggedIn ? 'My Account' : 'Login'}
                </div>
            </div>
            <div className="dropdown-toggle" onClick={handleToggleDropdown}>
                <span className='flex justify-center gap-2 items-center text-zinc-400 cursor-pointer'>Links<FaChevronDown size={12} /></span>
            </div>
            {showDropdown && (
                <div className="dropdown-content text-stone-400 ">
                    <span className='cursor-pointer'><RiFacebookFill size={15} /></span>
                    <span className='cursor-pointer'><FaInstagram size={15} /></span>
                    <span className='cursor-pointer'><RiTwitterXFill size={15} /></span>
                    <span className='cursor-pointer'><FaGooglePlusG size={15} /></span>
                    <span className='cursor-pointer'><FaYoutube size={15} /></span>
                    <div onClick={() => navigate(isLoggedIn ? '/my-account' : '/signIn')} className='login flex items-center font-10 text-gray-400 gap-2'>
                        <FaUser size={12} />{isLoggedIn ? 'My Account' : 'Login'}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpNavbarRight;



