
import React from 'react';
import { useDispatch } from "react-redux"
import { AiOutlineClose } from 'react-icons/ai';
import { removeFromCart } from '../../store/cartSlice';
import { LiaTimesSolid } from "react-icons/lia";
import "./cart.css"


const MiniCartComp = ({ cart }) => {
    const dispatch = useDispatch()

    return (

        <div className='cardList' key={cart.id}>
            <div className='cartContent flex'>
                <div className='img'>
                    <img src={cart.image} className='w-[100px] h-[80px]' />
                    <button onClick={() => dispatch(removeFromCart(cart?.id))} className='remove flex justify-center items-center'>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='details'>
                    <p className='text-balance text-sm'>{cart?.title}</p>
                    <div className='quantity flex items-center gap-1 text-center  text-zinc-500'>
                        <div className='items-center text-sm '>{cart?.quantity}</div>
                        <LiaTimesSolid />
                        <label className='text-sm'> ${cart?.price}</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MiniCartComp; 

MiniCartComp.js

