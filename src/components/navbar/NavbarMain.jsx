
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarRight from './NavbarRight';
import { BiSearch } from "react-icons/bi";
import Logo from "../../assets/images/covers/logo.png";
import "./navbar.css"
import SearchField from './SearchField';

const NavbarMain = () => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isFixed ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 ' : ''}`} style={{ height: '110px' }}>
      <div className='centered w-10/12 m-auto flex items-center justify-between' style={{ minHeight: '110px' }}>
        <SearchField/>
        <div className='cursor-pointer' onClick={() => navigate('/')} >
          <img className='joyeria w-[150px]' src={Logo} alt="logo" />
        </div>
        <div><NavbarRight setCartOpen={setCartOpen} /></div>
      </div>
    </div>
  );
};

export default NavbarMain;
