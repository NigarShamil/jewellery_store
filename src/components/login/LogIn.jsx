import React from 'react'
import './login.css'
import SigIn from './SigIn'
import Register from './Register'

const LogIn = () => {
    return (
        <div className='logIn w-[600px] bg-gray-200 p-4 '>
            <div className='form_title flex justify-between py-4'>
                <h2 className='text-3xl'>Sign In</h2>
                <h2 className='text-3xl'>Register</h2>
            </div>
            <SigIn />
            
        </div>
    )
}

export default LogIn