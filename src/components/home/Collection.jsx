import React from 'react'
import "./home.css"

const Collection = () => {
    return (
        <div className='w-10/12 m-auto'>
            <div className='col_banner'>
                <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-4_9dc81ef5-0994-4f07-bbd7-228d3f224528.jpg?v=1614737572" className='col-cover' />
                <div className="col_text text-white flex flex-col justify-center items-center gap-3">
                    <h4 className='col_title text-sm font-medium tracking-wide pb-3'>EXCLUSIVE</h4>
                    <h3 className='col_subtitle'>OUR NEW ROMANTIC <br /> COLLECTION 2019</h3>
                    <p className='banner-desc text-lg tracking-wide w-[500px]'>Nullam malesuada eratut turpis. Suspendisse urnanibh viverra non, semper suscipit, posuere a pede.</p>
                    <div className='btn tracking-wide cursor-pointer w-[220px]'>SHOP THE COLLECTION</div>
                </div>
            </div>
        </div>
    )
}

export default Collection