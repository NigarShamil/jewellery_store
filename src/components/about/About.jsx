import React from 'react'
import "./about.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Footer from '../footer/Footer';


const About = () => {
    return (
        <>
            <div className=' about w-100 flex flex-col justify-center items-center m-auto'>
                <div className='about_cover'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/about-header-bg.jpg?v=1614728545" className='about_banner relative' />
                    <div className='banner_text text-center text-white'>
                        <h3 className='text-2xl'>About Us</h3>
                        <p className='text-lg'>Who we are</p>
                    </div>
                </div>
                <div className="our flex flex-wrap my-5 gap-6 ">
                    <div className="vision w-[550px] pr-4">
                        <h3 className='text-2xl font-medium'>Our Vision</h3>
                        <p className='text-sm leading-loose pt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
                            Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                            Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                    </div>
                    <div className='mission w-[550px] '>
                        <h3 className='text-2xl font-medium'>Our Mission</h3>
                        <p className='text-sm leading-loose pt-2'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                            Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
                    </div>
                </div>
                <div className="who flex flex-wrap py-4 bg-gray-50 mt-3 w-full justify-center items-center  ">
                    <div className="weAre w-[550px] p-5">
                        <div className='first'>
                            <h2 className='text-2xl pb-3 font-medium'>Who We Are</h2>
                            <p>Pellentesque odio nisi, euismod pharetra a ultricies
                                in diam. Sed arcu. Cras consequat
                            </p>
                        </div>
                        <div className='pt-6'>
                            <p className='text-sm'>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                                Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue.
                            </p>
                            <div className="btn  p-3 w-[200px] text-center mt-5 text-sm flex items-center gap-3 justify-center">VIEW OUR NEWS  <FaArrowRightLong className='sign_logo' /></div>
                        </div>
                    </div>
                    <div className="who_cover ">
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/Untitled-1.jpg?v=1614728545" className='who_banner' />
                    </div>
                </div>
                <div className='brands grid grid-cols-2 h-[300px] gap-5 mt-5 p-4'>
                    <div className="brands_text w-[500px]">
                        <h2 className='text-2xl mb-4 font-medium'>The world's premium design brands in one destination.</h2>
                        <p className='text-sm leading-loose'>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis</p>
                    </div>
                    <div className='grid grid-cols-3 '>
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/logo-1_240x.png?v=1614728542" />
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/logo-5_240x.png?v=1614728542" />
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/logo-6_240x.png?v=1614728542" />
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/logo-3_240x.png?v=1614728542" />
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/logo-2_240x.png?v=1614728543" />
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/logo-4_240x.png?v=1614728542" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='text-3xl font-medium m-5 '>Meet Our Team</div>
                    <div className="team flex flex-wrap gap-[30px] mt-5">
                        <div className='first_one w-[300px]'>
                            <img src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='img_text text-center flex flex-col items-center'>
                                <h3 className='flex flex-col text-center'>
                                    Samanta Grey
                                    <span>Sales & Marketing Manager</span>
                                </h3>
                                <p className='pt-4'> Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                <div className='flex gap-5 pt-5'>
                                    <FaFacebookF size={20} className='sm' />
                                    <RiTwitterXFill size={20} className='sm' />
                                    <FaInstagram size={20} className='sm' />
                                </div>
                            </div>
                        </div>
                        <div className='second_one w-[300px]'>
                            <img src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='img_text text-center flex flex-col items-center'>
                                <h3 className='flex flex-col text-center'>
                                    Bruce Sutton
                                    <span>Founder & CEO</span>
                                </h3>
                                <p className='pt-4'> Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                <div className='flex gap-5 pt-5'>
                                    <FaFacebookF size={20} className='sm' />
                                    <RiTwitterXFill size={20} className='sm' />
                                    <FaInstagram size={20} className='sm' />
                                </div>
                            </div>
                        </div>
                        <div className='third_one w-[300px]'>
                            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className='img_text text-center flex flex-col items-center'>
                                <h3 className='flex flex-col text-center'>
                                    Product Manager
                                    <span>Product Manager</span>
                                </h3>
                                <p className='pt-4'> Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                <div className='flex gap-5 pt-5'>
                                    <FaFacebookF size={20} className='sm' />
                                    <RiTwitterXFill size={20} className='sm' />
                                    <FaInstagram size={20} className='sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About