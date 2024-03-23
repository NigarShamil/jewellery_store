
import React from 'react'
import './login.css'
import SigIn from './SigIn'
import { useNavigate } from 'react-router-dom'


const LogIn = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[500px] flex flex-col justify-center'>
            <div className='logIn w-[600px] bg-gray-200 p-4 m-auto '>
                <div className='form_title flex justify-between py-4'>
                    <h2 className='text-3xl'>Sign In</h2>
                    <h2 onClick={() => navigate('/register')} className='text-3xl cursor-pointer'>Register</h2>
                </div>
                <SigIn />

            </div>
        </div>
    )
}

export default LogIn