
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarRight from './NavbarRight';
import Logo from "../../assets/images/covers/logo.png";
import NavbarLeft from './NavbarLeft';

const NavbarMain = () => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change the state based on the scroll position
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isFixed ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 ' : ''}`}>
      <div className='w-10/12 m-auto flex items-center justify-between'>
        <div><NavbarLeft/></div>
        <div className='cursor-pointer' onClick={()=> navigate('/')}>
          <img className='w-[150px]' src={Logo} alt="logo" />
        </div>
        <div><NavbarRight setCartOpen={setCartOpen}/></div>
      </div>
    </div>
  );
};

export default NavbarMain;
