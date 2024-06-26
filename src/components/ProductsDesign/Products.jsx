
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch } from 'react-redux';
import { CiStar } from "react-icons/ci";
import { LiaCartPlusSolid } from "react-icons/lia";
import { LiaBinocularsSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import products from "../../assets/data/products.json";
import './products.css';
import { useNavigate } from 'react-router-dom';
import { addToCart } from "../../store/cartSlice";
import { addToLike } from "../../store/wishSlice";

export default function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth <= 1000 && window.innerWidth >= 700) {
                setSlidesToShow(2);
            } else if (window.innerWidth < 700) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(4);
            }
        };

        updateSlidesToShow();

        window.addEventListener("resize", updateSlidesToShow);

        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
        };
    }, []);

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: slidesToShow,
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

    const handleAddToCart = (product) => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            image: product.images[0],
            quantity: 1,
            price: product.price
        }));
    };

    const handleAddToLike = (product) => {
        dispatch(addToLike({
            id: product.id,
            title: product.title,
            image: product.images[0],
            quantity: 1,
            price: product.price
        }))
    }

    const uniqueCategories = [...new Set(products.map(product => product.category))];

    const filteredProducts = selectedCategory === "ALL" ? products : products.filter(product => product.category === selectedCategory);

    return (
        <div className="slider-container my-5 flex flex-col justify-center">
            <div className='categories flex justify-center flex-wrap items-center text-center px-3 cursor-pointer text-lg text-zinc-400'>
                <ul className="flex gap-5">
                    <li>
                        <button onClick={() => setSelectedCategory("ALL")} className={selectedCategory === "ALL" ? "selected" : ""}>ALL</button>
                    </li>
                    {uniqueCategories.map(category => (
                        <li key={category}>
                            <button onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "selected" : ""}>{category.toUpperCase()}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Slider {...settings}>
                {filteredProducts.slice(0, 5).map((product, index) => (
                    <div className="product-wrapper justify-center items-center w-full">
                        <div key={product.id} className="product flex flex-col justify-center items-center text-center p-5 cursor-pointer transform transition-transform duration-500 hover:scale-10">
                            <div
                                className="pro-img-container w-[280px] relative"
                                onMouseOver={() => handleHover(index)}
                                onMouseOut={handleMouseOut}
                            >
                                <img
                                    className="pro-img"
                                    src={hoveredIndex === index ? product.images[1] : product.images[0]}
                                    alt={product.title}
                                />
                                <div className={`overlay  absolute left-[80%] bottom-[75%] ${hoveredIndex === index ? 'visible' : 'hidden'}`} >
                                    <div onClick={() => handleAddToLike(product)} className="likeProduct border rounded-full p-1"><CiHeart size={20} /></div>
                                    <div onClick={() => navigate(`products/${product?.id}`)} className="viewProduct border rounded-full p-1"><LiaBinocularsSolid size={20} /></div>
                                </div>
                            </div>
                            <div className="pro-text bg-white w-[280px] h-[85px] text-sm p-2">
                                <p className="pb-3">{product.title}</p>
                                <h3>${product.price}</h3>
                                <div className="stars  gap-2 justify-center items-center text-center pt-2 text-zinc-400 hidden"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /> <span>No reviews</span></div>
                                <div className="add justify-center items-center text-center border-b border-black gap-2 pt-3 hover:border hover:bg-black hover:p-2  hover:text-white hidden" onClick={() => handleAddToCart(product)}><LiaCartPlusSolid /> ADD TO CART</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
