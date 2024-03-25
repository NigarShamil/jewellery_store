// import React, { useState } from 'react'
// import { AiOutlineHeart } from "react-icons/ai";
// import { SlBasket } from "react-icons/sl";
// import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from "react-redux"

// const NavbarRight = () => {
//     const dispatch = useDispatch()
//     const [cartOpen, setCartOpen] = useState(false);
//     const { itemCount } = useSelector(state => state.carts)

//     const toggleCart = () => {
//         setCartOpen(prevState => !prevState);
//     };

//     useEffect(() => {
//         dispatch(getCartTotal())
//     }, [dispatch])
//     const navigate = useNavigate()
//     return (
//         <div className='flex items-center gap-12 '>
//             <div className='like relative'>
//                 <div className='qty absolute -top-2 -right-3 text-white rounded-full w-5 h-5 flex items-center justify-center'>0</div>
//                 <AiOutlineHeart className='like-icon cursor-pointer' size={25} />
//             </div>
//             <div onClick={() => navigate('/cart')} className='cart relative'>
//                 <div className='qty absolute -top-2 -right-3 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
//                 <SlBasket size={25} className=' icons cursor-pointer' />
//             </div>
//         </div>
//     )
// }

// export default NavbarRight
import React, { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { MiniCart } from '../cart/MiniCart';
import { getCartTotal } from '../../store/cartSlice';
import { getLikeTotal } from '../../store/wishSlice';



const NavbarRight = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [cartOpen, setCartOpen] = useState(false);
    const { itemCount } = useSelector(state => state.carts);
    const { likeList, totalAmount, likeCount } = useSelector(state => state.likeList);
  


    const toggleCart = () => {
        setCartOpen(prevState => !prevState);
    };

    useEffect(() => {
        dispatch(getCartTotal());
        dispatch(getLikeTotal())
    }, [dispatch]);

   

    return (
        <div className="flex items-center gap-12">
            <div onClick={() => navigate('/like')} className="like relative">
                <div className="qty absolute -top-2 -right-3 text-white rounded-full w-5 h-5 flex items-center justify-center">{likeCount}</div>
                <AiOutlineHeart className="like-icon cursor-pointer" size={25} />
            </div>
            <div onClick={() => toggleCart()} className="cartIcon relative">
                <div className="qty absolute -top-2 -right-3 text-white rounded-full w-5 h-5 flex items-center justify-center">{itemCount}</div>
                <SlBasket size={25} className="icons cursor-pointer" />
            </div>
            <MiniCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        </div>
    );
};

export default NavbarRight;
