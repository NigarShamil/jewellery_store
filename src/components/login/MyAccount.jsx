
import React from 'react'
import './login.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';



const MyAccount = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(authActions.logout())
    }
    return (
        <div>
            <div className='account relative'>
                <img src="https://molla-theme.myshopify.com/cdn/shop/files/page-header-bg.jpg?v=1614733265" className='cart_banner h-[170px]  ' />
                <div className='myAccount text-center absolute bottom-[65%] left-[44%]'>
                    <h2 className='text-4xl text-[#cc9966]  '>My Account</h2>
                    <p className='text-xl'>Shop</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center h-[200px] flex-wrap'>
                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses.</p>
                    <div className='bg-slate-400 text-white p-2 w-[150px] mt-2 cursor-pointer' onClick={handleLogOut}>Log Out</div>
                </div>

            </div>
        </div>
    )
}

export default MyAccount