import React from 'react'
import "./home.css"

const PageContainer = () => {
    return (
        <div className='flex w-10/12 m-auto'>
            <div className='flex items-center'>
                <div className='banner-st'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-1_0a55343c-ab04-45df-a730-52e0881795c0.jpg?v=1614737572" className='banner-cover' />
                    <div className="banner-text text-white  ">
                        <h4 className='text-sm font-medium tracking-wide pb-3'>CLEARANCE</h4>
                        <h3>EARRINGS
                            <br />
                            & RINGS
                            <br />
                            SAVE 30%
                        </h3>
                        <div className='btn tracking-wide pt-8 cursor-pointer border-black border-b-2 text-blacK w-[220px]'>SHOP CLEARANCE</div>
                    </div>
                </div>
                <div className='banner-nd w-[100%]'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-2_d343392d-2e87-4651-81d9-399dc440145e.jpg?v=1614737572" className='banner-cover' />
                </div>
                <div className='banner-rd'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-3_6228970f-e9d6-4e9c-9551-86ec91ec9a5e.jpg?v=1614737572" className='banner-cover' />
                    <div className='banner-text'>
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