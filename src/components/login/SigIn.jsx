import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const SigIn = () => {
  return (
    <div>
        <div className='form_sign p-4 text-zinc-500'>
             <div className="email flex flex-col py-2">
                <label htmlFor="email" >Email address *</label>
                <input type="email" name="email" id="email" className='h-10' />
             </div>
             <div className="password flex flex-col py-2">
                <label htmlFor="password">Password *</label>
                <input type="password" name="password" id="password"className='h-10' />
             </div>
             <div className="btn_field flex justify-between items-center  py-3">
                <div className='signIn flex justify-center items-center gap-2'>Sign In <FaArrowRightLong className='sign_logo'/></div>
                <div>Forgot Your Password ?</div>
             </div>
        </div>
    </div>
  )
}

export default SigIn