import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./cart.css"
import { BsCartX } from "react-icons/bs";
import { getCartTotal } from '../../store/cartSlice';
import CartComp from './CartComp';

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch,carts])
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='cart_cover'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/page-header-bg.jpg?v=1614733265" className='cart_banner h-[170px]' />
                    <div className='cart_title text-center'>
                        <h2 className='text-4xl '>Shopping Cart</h2>
                        <p className='text-xl'>Shop</p>
                    </div>
                </div>
                {
                    carts?.length > 0 ? (
                        <div>
                            {
                                carts.map((cart, index) => (
                                    <CartComp key={index} cart={cart} />
                                ))
                            }
                            <div className='cart_total flex items-center justify-end text-xl border-t py-3'>Total Price: <span className='font-medium text-xl ml-2'>{totalAmount} $</span></div>
                            <div>
                                <textarea className='review border p-2 bg-zinc-50' id="review" name="review" rows="5" cols="70" placeholder='Special instructions for seller'></textarea>
                                <div className='flex gap-5 items-center my-5'>
                                    <input type="text" name="code" id="code" placeholder='Your code here' className='border p-2 bg-zinc-50' />
                                    <div className='border p-2 text-center w-[100px] bg-[#cc9966] text-white cursor-pointer hover:bg-[#c15454]'>Save</div>
                                </div>

                            </div>

                        </div>
                    ) : (
                        <div>
                            <div className='flex flex-col justify-center items-center h-[500px]'>
                                <BsCartX size={200} className='empty_cart text-zinc-200 mb-3' />
                                <h3 className='text-lg mb-5'>Your bag is empty</h3>
                                <p className='mb-5 text-center leading-loose'>Before proceed to checkout you must add some products to your shopping cart.
                                    <br /> You will find a lot of interesting products on our "Shop" page.
                                </p>
                                <div onClick={() => navigate('/')} className='continue p-2 text-center cursor-pointer'>Continue shopping</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ShoppingCart

