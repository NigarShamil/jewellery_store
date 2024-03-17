import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";



const PlaceStore = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center my-5'>
                <h2 className='text-2xl mb-5 font-medium'>Our Stores</h2>
                <div className='stores flex flex-wrap gap-[80px] justify-center'>
                    <div className="first_store w-[500px] flex mx-6">
                        <div className='st_img px-5'>
                            <img src="https://molla-theme.myshopify.com/cdn/shop/files/img-1_8f3f1a48-b9b7-408f-affe-541c5c723f86.jpg?v=1614728543" className='store_img w-[450px]' />
                        </div>
                        <div className="store_plc">
                            <div className='mb-5'>
                                <h3 className='mb-2'>Wall Street Plaza</h3>
                                <p className='text-sm text-zinc-500'>88 Pine St, New York, NY 10005, USA</p>
                                <p className='text-sm text-zinc-500 '>+1 987-876-6543</p>
                            </div>
                            <div className='mb-5'>
                                <h3 className='mb-2'>Store Hours:</h3>
                                <p className='text-sm text-zinc-500'>Monday - Saturday 11am to 7pm</p>
                                <p className='text-sm text-zinc-500'>Sunday 11am to 6pm</p>
                            </div>
                            <div className='view_map flex items-center gap-2 text-sm cursor-pointer'>View Map <FaArrowRightLong className='sign_logo'></FaArrowRightLong></div>
                        </div>
                    </div>
                    <div className="second_store w-[500px] flex">
                        <div className='nd_img px-5'>
                            <img src="https://molla-theme.myshopify.com/cdn/shop/files/img-2.jpg?v=1614728544" className='store_img w-[450px]' />
                        </div>
                        <div className="store_plc">
                            <div className='mb-5'>
                                <h3 className='mb-2'>One New York Plaza</h3>
                                <p className='text-sm mb-1 text-zinc-500'>25 Pine St, New York, NY 12305, USA</p>
                                <p className='text-sm text-zinc-500 ' >+1 956-832-4843</p>
                            </div>
                            <div className='mb-5'>
                                <h3 className='mb-2'>Store Hours:</h3>
                                <p className='text-sm mb-1 text-zinc-500'>Saturday - 9am to 2pm</p>
                                <p className='text-sm mb-1 text-zinc-500'>Sunday 11am to 6pm</p>
                                <p className='text-sm text-zinc-500'>Sunday - Closed</p>
                            </div>
                            <div className='view_map flex items-center gap-2 text-sm cursor-pointer'>View Map <FaArrowRightLong className='sign_logo'></FaArrowRightLong></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                
            </div>
        </>

    )
}

export default PlaceStore