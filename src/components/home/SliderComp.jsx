import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'
import PageContainer from './PageContainer';

export const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div className='slider-slide'>
                    <img className='slider_cover' src="https://molla-theme.myshopify.com/cdn/shop/files/slider-1.jpg?v=1614737567" alt="Slider 1" />
                    <div className='slider-text-overlay_st '>
                        <div className='slide_title mb-3 text-xl'>Deal of the day</div>
                        <div className='slide-subtitle text-7xl'>Our Favorite Things</div>
                        <div className='slide-description italic text-7xl'>up to <span className='text-primary italic text-6xl'>60% off</span></div>
                        <div className='slider-btn border bg-white cursor-pointer text-lg text-black w-[200px] h-12 flex items-center justify-center px-2 mt-[50px] outline-none border-none'>DISCOVER NOW</div>
                    </div>
                </div>
                <div className='slider-slide'>
                    <img className='slider_cover' src="https://molla-theme.myshopify.com/cdn/shop/files/slider-2.jpg?v=1614737569" alt="Slider 2" />
                    <div className='slider-text-overlay_nd'>
                        <div className='slide_title mb-3 text-xl'>Deal of the day</div>
                        <div className='slide-subtitle text-5xl normal'>DISCOVER OUR </div>
                        <div className='slide-description text-5xl normal'> ONE KIND JEWELRY</div>
                        <div className='slider-btn border bg-white cursor-pointer text-lg text-black w-[200px] h-12 flex items-center justify-center p-2 mt-[50px] outline-none border-none'>DISCOVER NOW</div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};
