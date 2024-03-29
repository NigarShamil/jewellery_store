
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux"
import { authActions } from '../../store/authSlice'
import "./login.css"

const SigIn = () => {
   const dispatch = useDispatch()

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(authActions.login())
   }
   return (
      <div className='form bg-[#BCB88A] flex justify-center items-center h-[100vh]'>
         <form onSubmit={handleSubmit} className=' form_sign  text-zinc-500 bg-white w-[500px] h-[400px] p-4'>
            <h2 className='text-[#cc9966] text-2xl my-3'>Sign In</h2>
            <div className="email flex flex-col py-2">
               <label htmlFor="email" >Email address *</label>
               <input type="email" name="email" id="email" className='h-10 bg-gray-100' />
            </div>
            <div className="password flex flex-col py-2">
               <label htmlFor="password">Password *</label>
               <input type="password" name="password" id="password" className='h-10 bg-gray-100' />
            </div>
            <div className="btn_field flex justify-between items-center  py-3">
               <button className='signIn flex justify-center items-center gap-2 '>Sign In <FaArrowRightLong className='sign_logo' /></button>
               <div className='cursor-pointer'>Forgot Your Password ?</div>
            </div>
         </form>
      </div>
   )
}

export default SigIn