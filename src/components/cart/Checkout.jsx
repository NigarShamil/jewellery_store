import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal } from '../../store/cartSlice'
import './cart.css'

const Checkout = () => {
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, carts])
    return (
        <>
            <div className='flex justify-center items-center flex-wrap'>
                <div className='contact flex flex-col justify-center items-center w-[600px] h-[550px] bg-neutral-50'>
                    <div className='contact_email flex flex-col pb-5'>
                        <p className='font-bold text-xl pb-5'>Contact information</p>
                        <input type="email" placeholder='Email' className='w-[400px] h-10 border px-2' />
                    </div>
                    <div className="shipping_address flex flex-col justify-center items-center gap-6">
                        <div className='id flex gap-5'>
                            <input type="text" placeholder='First name' className='w-[190px] h-10 border px-2' />
                            <input type="text" placeholder='Last name' className='w-[190px] h-10 border px-2' />
                        </div>
                        <input type="text" placeholder='Company (required for business addresses)' className='w-[400px] h-10 border px-2' />
                        <input type="text" placeholder='Address' className='w-[400px] h-10 border px-2' />
                        <input type="text" placeholder='City' className='w-[400px] h-10 border px-2' />
                        <input type="phone" placeholder='Phone number' className='w-[400px] h-10 border px-2' />
                    </div>
                    <div className='bg-black text-center p-2 text-white text-sm mt-4 cursor-pointer'>CONTINUE TO SHIPPING</div>
                </div>
                <div className='checkout flex flex-col  items-center'>
                    <div className='bg-gray-200 h-[550px] w-[400px] my-3 check_form'>
                        <h3 className='carTotal p-4 text-2xl'>Cart Total</h3>
                        <div className='subtotal flex justify-between p-4 text-xl'><span>Subtotal:</span> <span>{totalAmount} $</span></div>
                        <div className='shipping flex flex-col p-4'>
                            <label className='check_item text-xl pb-2'>Shipping:</label>
                            <select name="shipping" id="shipping" className='h-10 border p-2'>
                                <option value="delivery">Standard-Delivery- $5.00</option>
                                <option value="delivery">Two</option>
                                <option value="delivery">Three</option>
                                <option value="delivery">Four</option>
                            </select>
                        </div>
                        <div className='calculate flex items-center text-center p-4 gap-5'>
                            <input type="text" name="code" id="code" placeholder='Zip/Postal Code' className='h-10 border p-2' />
                            <div style={{ border: "1px solid #cc9966" }} className='h-10 p-2 cursor-pointer text-[#cc9966] w-[100px] hover:bg-[#cc9966] hover:text-white'>Calculate</div>
                        </div>
                        <div className="payments mt-3 pt-3 flex items-center justify-center">
                            <img src="https://molla-theme.myshopify.com/cdn/shop/files/payments.png?v=1614728544" className='pay cursor-pointer' />
                        </div>
                        <div className='flex justify-between p-4 text-xl text-[#cc9966]'><span>Total:</span> <span>{totalAmount} $</span></div>
                        <div className='px-6 flex justify-center items-center mt-5'>
                            <div className='check_btn  h-10 bg-[#cc9966]  p-2 cursor-pointer text-white text-center w-[300px] hover:bg-[#c15454] '>PROCEED TO CHECKOUT</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout