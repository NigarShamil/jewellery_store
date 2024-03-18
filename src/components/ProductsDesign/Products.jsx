
import React, { useState } from "react";
import Slider from "react-slick";
import { CiStar } from "react-icons/ci";
import { LiaCartPlusSolid } from "react-icons/lia";
import products from "../../assets/data/products.json";
import './products.css';

export default function Products() {
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleHover = (index) => {
        setHoveredIndex(index); 
    };

    const handleMouseOut = () => {
        setHoveredIndex(null); 
    };

    return (
        <div className="slider-container m-auto flex flex-col justify-center h-[700px]">
            <Slider {...settings}>
                {products.slice(0, 5).map((product, index) => ( 
                    <div key={product.id} className="product flex flex-col justify-center items-center text-center p-5 cursor-pointer transform transition-transform duration-500 hover:scale-10">
                        <img
                            className="pro-img w-[280px] "
                            src={hoveredIndex === index ? product.images[1] : product.images[0]} // Use second image on hover
                            alt={product.title}
                            onMouseOver={() => handleHover(index)} // Set hovered index on mouse over
                            onMouseOut={handleMouseOut} // Reset hovered index on mouse out
                        />
                        <div className="pro-text bg-white w-[280px] h-[85px] text-sm p-2">
                            <p className="pb-3">{product.title}</p>
                            <h3>${product.price}</h3>
                            <div className="stars  gap-2 justify-center items-center text-center pt-2 text-zinc-400 hidden"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /> <span>No reviews</span></div>
                            <div className="add justify-center items-center text-center border-b border-black gap-2 pt-3 hover:border hover:bg-black hover:p-2  hover:text-white hidden "><LiaCartPlusSolid /> ADD TO CART</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
