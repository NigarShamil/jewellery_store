
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import './login.css';

const SignIn = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const registeredEmails = useSelector(state => state.auth.email); 
   const [email, setEmail] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log("Registered Emails:", registeredEmails);
      // console.log("Entered Email:", email);
      if (registeredEmails.includes(email)) {
         dispatch(authActions.login());
         navigate('/my-account');
      } else {
         navigate('/register');
      }
   };

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   };

   return (
      <div className='signForm flex justify-center items-center h-[100vh]'>
         <form onSubmit={handleSubmit} className='form_sign text-zinc-500 bg-white w-[500px] h-[400px] p-4'>
            <h2 className='text-[#cc9966] text-2xl my-3 text-center font-medium'>Sign In</h2>
            <div className='email flex flex-col py-2'>
               <label htmlFor='email'>Email address *</label>
               <input type='email' name='emailRegister' id='emailRegister' className='h-10 bg-gray-100' value={email} onChange={handleEmailChange} />
            </div>
            <div className='password flex flex-col py-2'>
               <label htmlFor='password'>Password *</label>
               <input type='password' name='password' id='password' className='h-10 bg-gray-100' />
            </div>
            <div className='btn_field flex justify-between items-center py-3'>
               <button className='signIn flex justify-center items-center gap-2'>Sign In <FaArrowRightLong className='sign_logo' /></button>
               <div className='cursor-pointer'>Forgot Your Password ?</div>
            </div>
         </form>
      </div>
   );
};

export default SignIn;
