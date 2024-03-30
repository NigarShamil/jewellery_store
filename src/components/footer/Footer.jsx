import React from 'react'
import FooterComp from './FooterComp'
import { GiCutDiamond } from "react-icons/gi";
import './footer.css'

const Footer = () => {
    return (
        <div className='footer text-white p-6'>
            <div className='up_footer flex flex-col justify-center items-center '>
                <div className='title pb-5 m-4 text-center '>
                    <h2 className='text-3xl mt-4'>GET THE LATEST DEALS</h2>
                    <p className='text-sm pt-2'>and receive $20 coupon for first shopping</p>
                </div>
                <div className='footer_input flex mb-5'>
                    <input type="email" name="email" id="email" placeholder='Enter Your Email Address' className='w-[400px] h-11 p-2' />
                    <div className='subscribe border border-white w-[150px] bg-white  text-center p-2 cursor-pointer'>SUBSCRIBE</div>
                </div>
            </div>
            <FooterComp />
            <div className='down_footer flex flex-col justify-center items-center text-center gap-4 border-t'>
                <div className="payments mt-3 pt-3">
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/payments.png?v=1614728544" className='pay ' />
                </div>
                <div className='pt-4'>
                    {/* <h4 className='pb-2'>Joyería</h4> */}
                    <div className='flex flex-col justify-center items-center text-center pb-2'>
                        <p><GiCutDiamond size={20} /></p>
                        <p className='logo text-2xl'>Joyería</p>
                    </div>
                    <p className='pb-3 text-zinc-400'>Copyright © 2024 Joyería. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer