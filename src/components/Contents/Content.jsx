import React from 'react'
import { GiCutDiamond } from "react-icons/gi";
import { PiDotsThreeBold } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import "./content.css"
import PopularProducts from './PopularProducts';

const Content = () => {
    return (
        <>
            <div className='flex justify-center items-center my-5 flex-wrap'>
                <div className='lookBook flex flex-col justify-center items-center '>
                    <h2 className='text-2xl'>POPULAR PRODUCTS</h2>
                    <div className='mt-[10px]'>
                        <div className='flex justify-center items-center '><div className='bg-gradient-to-r from-transparent to-black h-[1px] w-[75px] mx-3'></div><GiCutDiamond /><div className='bg-gradient-to-r from-black to-transparent h-[1px] w-[75px] mx-3'></div></div>
                    </div>
                    <PopularProducts/>
                </div>
                <div className='lookBook flex flex-col justify-center items-center '>
                    <h2 className='text-2xl'>LOOKBOOK</h2>
                    <div className='mt-[10px]'>
                        <div className='flex justify-center items-center '><div className='bg-gradient-to-r from-transparent to-black h-[1px] w-[75px] mx-3'></div><GiCutDiamond /><div className='bg-gradient-to-r from-black to-transparent h-[1px] w-[75px] mx-3'></div></div>
                    </div>
                    <div className='look_banner relative'>
                        <img src="https://molla-theme.myshopify.com/cdn/shop/files/img_bg-1_21e2d9cd-4a80-425f-92f0-527bf19f5321.jpg?v=1614737911" className='look_banner ' />
                        <div className='title_look flex flex-col items-center text-center text-white'>
                            <PiDotsThreeBold size={40} />
                            <p>ENGAGEMENT & FASHION</p>
                            <p>JEWELERY</p>
                        </div>
                    </div>
                </div>
                <div className='lookBook flex flex-col justify-center items-center '>
                    <h2 className='text-2xl'>OUR SERVICES</h2>
                    <div className='mt-[10px]'>
                        <div className='flex justify-center items-center '><div className='bg-gradient-to-r from-transparent to-black h-[1px] w-[75px] mx-3'></div><GiCutDiamond /><div className='bg-gradient-to-r from-black to-transparent h-[1px] w-[75px] mx-3'></div></div>
                    </div>
                    <div className="services p-5 h-[527px]">
                        <div className='flex flex-col justify-center items-center border-b p-5 h-[170px] text-zinc-400'>
                            <BsTruck size={30} className='text-zinc-400 cursor-pointer'/>
                            <h3 className='pt-2'>Payment & Delivery</h3>
                            <p className='text-sm p-2'>Free shipping for orders over $50</p>
                        </div>
                        <div className='flex flex-col justify-center items-center border-b p-5 h-[170px] w-[300px] text-zinc-400'>
                            <IoReloadSharp size={30} className='text-zinc-400 cursor-pointer'/>
                            <h3 className='pt-2'>Return & Refund</h3>
                            <p className='text-sm p-2'>Free 100% money back guarantee</p>
                        </div>
                        <div className='flex flex-col justify-center items-center border-b p-5 h-[170px] text-zinc-400'>
                            <IoIosLock size={30} className='text-zinc-400 cursor-pointer'/>
                            <h3 className='pt-2'> Secure Payment</h3>
                            <p className='text-sm p-2'>100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Content