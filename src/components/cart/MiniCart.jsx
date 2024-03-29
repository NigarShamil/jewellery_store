import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import MiniCartComp from './MiniCartComp'
import { getCartTotal } from '../../store/cartSlice'
import "./cart.css"


export const MiniCart = ({ cartOpen, setCartOpen }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts)


  console.log(carts, totalAmount, itemCount, 'carts');

  const closeCart = () => {
    setCartOpen(false)
  }

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className='cart z-50'>
      <div className={cartOpen ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          <button onClick={closeCart}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
        {
          carts?.length > 0 ? (
            <div>
              {
                carts.map((cart, index) => (
                  <MiniCartComp key={index} cart={cart} />
                ))
              }
              <div className='priceTitle flex items-center justify-end text-lg border-t pt-2'>Total Price: <span className='font-medium text-xl ml-2 '>{totalAmount} $</span></div>
            </div>
          ) : (
            <div>
              Cart is empty...
            </div>
          )
        }
        <div className='flex gap-6 justify-around items-center text-center mt-4'>
          <div onClick={()=> navigate('/cart')} className="bag p-2 w-[130px] hover:bg-[#cc9966] hover:text-white cursor-pointer">Your Bag</div>
          <div onClick={() => navigate('/checkout')}  className="checkout bg-[#cc9966] p-2 text-white w-[130px] hover:bg-[#c15454] cursor-pointer">Checkout</div>
        </div>
      </div>
    </div>
  );
}





