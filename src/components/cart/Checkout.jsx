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
        <div className='checkout flex flex-col justify-center items-center'>
            <div className='bg-gray-200 h-[500px] w-[400px] my-3 check_form'>
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
                <div className='flex justify-between p-4 text-xl text-[#cc9966]'><span>Total:</span> <span>{totalAmount} $</span></div>
                <div className='px-6'>
                    <div className='check_btn flex justify-center h-10 bg-[#cc9966]  p-2 cursor-pointer text-white text-center w-[300px] hover:bg-[#c15454]'>PROCEED TO CHECKOUT</div>
                </div>

            </div>
        </div>
    )
}

export default Checkout