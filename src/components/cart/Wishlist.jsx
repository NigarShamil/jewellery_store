import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./cart.css";
import { BsCartX } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { getLikeTotal } from '../../store/wishSlice';
import LikedComp from './LikedComp';

const Wishlist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { likeList, totalAmount, likeCount } = useSelector(state => state.likeList);

    useEffect(() => {
        dispatch(getLikeTotal());
    }, [dispatch, likeList]);

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='cart_cover'>
                    <img src="https://molla-theme.myshopify.com/cdn/shop/files/page-header-bg.jpg?v=1614733265" className='cart_banner h-[170px]' alt="Banner" />
                    <div className='cart_title text-center'>
                        <h2 className='text-4xl '>Liked Products</h2>
                        <p className='text-xl'>Shop</p>
                    </div>
                </div>
                {
                    likeList?.length > 0 ? (
                        <div>
                            {
                                likeList.map((liked, index) => (
                                    <LikedComp key={index} liked={liked} />
                                ))
                            }
                            <div className='cart_total flex items-center justify-end text-xl border-t py-3'>Total Price: <span className='font-medium text-xl ml-2'>{totalAmount} $</span></div>
                            
                        </div>
                    ) : (
                        <div>
                            <div className='flex flex-col justify-center items-center h-[500px]'>
                                <FaRegHeart size={200} className='empty_cart text-zinc-200 mb-3'/>
                                <h3 className='text-lg mb-5'>Your bag is empty</h3>
                                <p className='mb-5 text-center leading-loose'>Before proceed to checkout you must add some products to your Wishlist.
                                    <br /> You will find a lot of interesting products on our "Shop" page.
                                </p>
                                <div onClick={() => navigate('/')} className='continue p-2 text-center cursor-pointer'>Continue shopping</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Wishlist;


