
import React, { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { MiniCart } from '../cart/MiniCart';
import { getCartTotal } from '../../store/cartSlice';
import { getLikeTotal } from '../../store/wishSlice';
import "./navbar.css"



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
        <div className="right flex items-center gap-12">
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
