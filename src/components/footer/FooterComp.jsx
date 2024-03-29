import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const FooterComp = () => {
    const navigate =useNavigate()
    return (
        <div className='footerComp flex justify-center flex-wrap gap-[70px] '>
            <div className='about m-4 '>
                <h4 className='text-xl cursor-pointer'>About Joyería</h4>
                <p className='w-[300px] pt-3 cursor-pointer text-zinc-400'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                <div className='flex pt-5 cursor-pointer gap-5 text-zinc-400'>
                    <FaFacebookF size={20} className='sm' />
                    <RiTwitterXFill size={20} className='sm' />
                    <FaGooglePlusG size={20} className='sm' />
                    <FaInstagram size={20} className='sm' />
                    <FaYoutube size={20} className='sm' />
                </div>
            </div>
            <div className="links m-4 ">
                <h4 className='text-xl cursor-pointer'>Useful Links</h4>
                <ul className='text pt-3 text-zinc-400 cursor-pointer'>
                    <li onClick={()=> navigate('/about')}  className='pb-1 cursor-pointer'>About Joyería</li>
                    <li onClick={()=> navigate('/faq')}  className='pb-1 cursor-pointer'>FAQ's</li>
                    <li onClick={()=> navigate('/contact')}  className='pb-1 cursor-pointer'>Contact us</li>
                    <li onClick={()=> navigate('/signIn')}  className='pb-1 cursor-pointer'>Log in</li>
                </ul>
            </div>
            <div className='services m-4 '>
                <h4 className='text-xl cursor-pointer'>Customer Service</h4>
                <ul className='text pt-3 text-zinc-400 cursor-pointer'>
                    <li className='pb-1 cursor-pointer'>Payment Methods</li>
                    <li className='pb-1 cursor-pointer'>Money-back guarantee!</li>
                    <li className='pb-1 cursor-pointer'>Returns</li>
                    <li className='pb-1 cursor-pointer'>Shipping</li>
                    <li className='pb-1 cursor-pointer'>Terms and conditions</li>
                    <li className='pb-1 cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div className="account m-4 ">
                <h4 className='text-xl cursor-pointer'>My Account</h4>
                <ul className='text pt-3 text-zinc-400 '>
                    <li className='pb-1 cursor-pointer'>Sign In</li>
                    <li onClick={()=> navigate('/cart')} className='pb-1 cursor-pointer'>View Cart</li>
                    <li onClick={()=> navigate('/like')} className='pb-1 cursor-pointer'>My Wishlist</li>
                    <li className='pb-1 cursor-pointer'>Track My Order</li>
                    <li className='pb-1 cursor-pointer'>Help</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterComp