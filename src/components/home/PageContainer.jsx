import React from 'react'
import "./home.css"

const PageContainer = () => {
    return (
        <div className='banners flex justify-center items-center'>
            <div className='flex items-center'>
                <div className='banner-st w-[100%] relative'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-1_0a55343c-ab04-45df-a730-52e0881795c0.jpg?v=1614737572" className='banner-cover w-[100%] h-[80vh]' />
                    <div className="banner-text text-white flex flex-col justify-center items-center gap-3 ">
                        <h4 className='text-sm font-medium tracking-wide '>CLEARANCE</h4>
                        <h3>EARRINGS
                            <br />
                            & RINGS
                            <br />
                            SAVE 30%
                        </h3>
                        <div className='btn tracking-wide cursor-pointer border-black border-b-2 text-blacK w-[220px]'>SHOP CLEARANCE</div>
                    </div>
                </div>
                <div className='banner-nd w-[100%] relative'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-2_d343392d-2e87-4651-81d9-399dc440145e.jpg?v=1614737572" className='banner-cover w-[100%] h-[80vh]' />
                </div>
                <div className='banner-rd w-[100%] relative'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-3_6228970f-e9d6-4e9c-9551-86ec91ec9a5e.jpg?v=1614737572" className='banner-cover w-[100%] h-[80vh]' />
                    <div className='banner-text flex flex-col justify-center items-center'>
                        <h3>BRACELETES
                            <br />
                            & ANKLETES
                        </h3>
                        <div className='btn tracking-wide pt-8 cursor-pointer border-black border-b-2 w-[200px]'>SHOP NOW</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContainer