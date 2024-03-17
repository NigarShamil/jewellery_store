import React from 'react'
import "./cart.css"
import { BsCartX } from "react-icons/bs";

const ShoppingCart = () => {
    return (
        <>
            <div>
                <div className='cart_cover'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/page-header-bg.jpg?v=1614733265" className='cart_banner h-[170px]' />
                    <div className='cart_title text-center'>
                        <h2 className='text-4xl '>Shopping Cart</h2>
                        <p className='text-xl'>Shop</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-[500px]'>
                    <BsCartX size={200} className='empty_cart text-zinc-200 mb-3' />
                    <h3 className='text-lg mb-5'>Your bag is empty</h3>
                    <p className='mb-5 text-center leading-loose'>Before proceed to checkout you must add some products to your shopping cart.
                        <br /> You will find a lot of interesting products on our "Shop" page.
                    </p>
                    <div className='continue p-2 text-center '>Continue shopping</div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart