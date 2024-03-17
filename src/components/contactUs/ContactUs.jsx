import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './contact.css'
import PlaceStore from './PlaceStore';

const ContactUs = () => {
    return (
        <>
            <div className='contact w-100 flex flex-col justify-center items-center m-auto'>
                <div className='about_cover mb-5'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/about-header-bg.jpg?v=1614728545" className='about_banner relative' />
                    <div className='banner_text text-center text-white'>
                        <h3 className='text-2xl'>About Us</h3>
                        <p className='text-lg'>Who we are</p>
                    </div>
                </div>
                <div className="contact_info flex flex-wrap m-3 border-b py-4">
                    <div className='info w-[600px] '>
                        <div className="main_info w-[500px]">
                            <h3 className='text-2xl'>Contact Infromation</h3>
                            <p className='my-3 text-sm leading-loose '>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui,
                                eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                            </p>
                        </div>
                        <div className="office_info flex gap-6 mt-6">
                            <div className="general flex flex-col items-start ">
                                <h3 className='text-xl mb-3'>General</h3>
                                <p className='flex justify-center items-center gap-3 text-sm mb-4'><CiLocationOn size={18} className='contact_logo'/> 70 Washington Square South New <br /> York, NY 10012, United States</p>
                                <p className='flex justify-center items-center gap-3 text-sm mb-4'><FiPhone size={18} className='contact_logo'/> +92 423 567</p>
                                <p className='flex justify-center items-center gap-3 text-sm'  ><CiMail size={18} className='contact_logo'/> info@midas.com</p>
                            </div>
                            <div className="hours flex flex-col items-start">
                                <h3 className='text-xl mb-3'>Work Hours</h3>
                                <p className='flex justify-center items-center gap-3 text-sm mb-5'><MdOutlineWatchLater size={18} className='contact_logo'/> Monday-Saturday
                                    <br />  11am-7pm ET
                                </p>
                                <p className='flex justify-center items-center gap-3 text-sm'><FaRegCalendarAlt size={18} className='contact_logo'/> Sunday
                                    <br />  11am-6pm ET
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='office w-[550px] flex flex-col '>
                        <h3 className='text-2xl'>Contact Form</h3>
                        <p className='my-3'>Use the form below to get in touch with the sales team</p>
                        <div className='two_piece flex gap-6 mt-3'>
                            <input type="text" name="name" id="name"  placeholder='Name *' className='border p-2 w-[265px]' />
                            <input type="email" name="email" id="email"  placeholder='Email *'className='border p-2 w-[265px]'/>
                        </div>
                        <input type="phone" name="phone" id="phone" placeholder='Phone * ' className='border p-2 w-[550px] my-4'/>
                        <textarea name="subject" id="subject" cols="30" rows="6" placeholder='Subject *' className='border p-2'></textarea>
                        <div className='form_btn w-[100px] flex justify-center items-center p-2 my-5 gap-3 text-sm'>SUBMIT  <FaArrowRightLong className='sign_logo' /> </div>
                    </div>
                </div>
                <PlaceStore/>
            </div>
        </>

    )
}

export default ContactUs