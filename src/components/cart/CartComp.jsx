
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../store/cartSlice';
import { AiOutlineClose } from 'react-icons/ai';

const CartComp = ({ cart }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <div className='cartField my-6 flex items-center justify-between border-t p-2 w-[800px]'>
                    <div className='cartText_field flex justify-center items-center'>
                        <div className='cartText_field flex justify-center items-center'>
                            <img className='w-[100px] h-[100px] object-fill' src={cart?.image} alt="" />
                            <div className='text-sm px-2'>{cart?.title}</div>
                            <div>{cart?.description}</div>
                        </div>
                    </div>
                    <div className='cart_price text-sm'>{cart?.price} $</div>
                    <div className="border p-2 w-[120px] flex justify-between items-center mr-5">
                        <span onClick={() => dispatch(decrementQuantity({ id: cart.id }))} className="cursor-pointer">-</span>
                        <span>{cart.quantity}</span>
                        <span onClick={() => dispatch(incrementQuantity({ id: cart.id }))} className="cursor-pointer">+</span>
                    </div>
                    <div onClick={() => dispatch(removeFromCart(cart?.id))} className='text-zinc-400 hover:text-zinc-900 cursor-pointer'><AiOutlineClose /></div>
                </div>
            </div>
        </>
    );
}

export default CartComp;

