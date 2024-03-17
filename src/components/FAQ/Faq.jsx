import React from 'react'
import './faq.css'
import ShippingAccord from './ShippingAccord'
import OrderAccord from './OrderAccord'
import PaymentAccord from './PaymentAccord'


const Faq = () => {
    return (
        <>
            <div>
                <div className='faq_cover'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/page-header-bg.jpg?v=1614733265" className='faq_banner h-[170px]' />
                    <div className='faq_title text-center'>
                        <h2 className='text-5xl '>F.A.Q</h2>
                        <p className='text-xl'>Pages</p>
                    </div>
                </div>
                <div className="faq_container m-auto flex flex-col justify-center items-center mt-5">
                    <h2 className='text-3xl font-medium my-5'>Shipping Information</h2>
                  <ShippingAccord />
                </div>
                <div className="faq_container m-auto flex flex-col justify-center items-center mt-5">
                    <h2 className='text-3xl font-medium my-5'>Order and Returns</h2>
                  <OrderAccord/>
                </div>
                <div className="faq_container m-auto flex flex-col justify-center items-center mt-5">
                    <h2 className='text-3xl font-medium my-5'>Payments</h2>
                  <PaymentAccord/>
                </div>

            </div>
        </>

    )
}

export default Faq