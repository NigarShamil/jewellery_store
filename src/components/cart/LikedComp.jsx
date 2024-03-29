import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import {  removeFromLike } from '../../store/wishSlice';
import { LiaCartPlusSolid } from "react-icons/lia";
import { addToCart } from '../../store/cartSlice';
import "./cart.css"

const LikedComp = ({ liked }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: liked.id,
            title: liked.title,
            image: liked.image, 
            quantity: 1, 
            price: liked.price
        }));
    };

    return (
        <div>
            <div className='cartField my-6 flex items-center justify-between border-t p-2 '>
                <div className='cartText_field flex  justify-center items-center'>
                    <img className='w-[200px] h-[200px] object-fill' src={liked?.image} alt='' />
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <div className='text-sm pb-3'>{liked?.title}</div>
                    <div>{liked?.description}</div>
                    <div className='cart_price text-sm my-4'>{liked?.price} $</div>
                    <div className="w-[200px] flex justify-center items-center text-center border-b  gap-2  hover:border hover:bg-[#cc9966] hover:p-1  hover:text-white cursor-pointer" onClick={handleAddToCart}><LiaCartPlusSolid /> ADD TO CART</div>
                </div>
                <div onClick={() => dispatch(removeFromLike(liked?.id))} className='text-zinc-400 hover:text-zinc-900 cursor-pointer'><AiOutlineClose /></div>
            </div>
        </div>
    );
};

export default LikedComp;



