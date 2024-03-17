import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Register = () => {
    return (
        <div>
            <div className='form_register p-4 text-zinc-500 '>
                <div className="email flex flex-col py-2">
                    <label htmlFor="email" >Your email address *</label>
                    <input type="email" name="email" id="email" className='h-10' />
                </div>
                <div className="password flex flex-col py-2">
                    <label htmlFor="password" >Password *</label>
                    <input type="password" name="password" id="password" className='h-10' />
                </div>
                <div className="btn_field flex flex-col py-3">
                    <div className='py-2'><input type="checkbox" name="check" id="check" /> Subscribe to stya updated with new products and offers!</div>
                    <div className='signIn flex justify-center items-center gap-2'>Sign In <FaArrowRightLong className='sign_logo' /></div>
                </div>
            </div>
        </div>
    )
}

export default Register