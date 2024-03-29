
import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'


const MyAccount = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='account '>
                <img src="https://molla-theme.myshopify.com/cdn/shop/files/page-header-bg.jpg?v=1614733265" className='cart_banner h-[170px] relative ' />
                <div className=' text-center absolute bottom-[55%] left-[45%]'>
                    <h2 className='text-4xl text-[#cc9966]  '>My Account</h2>
                    <p className='text-xl'>Shop</p>
                </div>
                <div className='text-center h-[200px]'>
                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses.</p>
                </div>
            </div>
        </div>
    )
}

export default MyAccount