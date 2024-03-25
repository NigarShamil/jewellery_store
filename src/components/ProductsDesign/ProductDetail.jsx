
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import products from "../../assets/data/products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const decrement = () => {
    console.log("Decreasing quantity");
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  
  const increment = () => {
    console.log("Increasing quantity");
    if (product.quantity && quantity < product.quantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };
  
  
  const addCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.images[selectedImageIndex],
        quantity: quantity,
        price: product.price
      })
    );
  };

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-detail w-100 flex justify-center m-auto p-5 ">
        <div className="flex">         <div className="flex flex-col mx-6">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              className={`w-[130px] pb-5 cursor-pointer ${selectedImageIndex === index ? 'border-2 border-[#cc9966]' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
          <img
            src={product.images[selectedImageIndex]}
            alt={product.title}
            className="w-[420px]"
          />
        </div>
        <div className="description w-[600px] p-5 ">
          <h2 className="text-2xl">{product.title}</h2>
          <div className="stars flex gap-2 items-center text-center pt-2 text-zinc-400  "><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /> <span>No reviews</span></div>
          <p className=" text-zinc-500 pt-2">Vendor : {product.category}</p>
          <p className="text-2xl py-3">${product.price}</p>
          <p className="text-sm py-3">{product.description}</p>
          <div className="py-5 flex border-b">
            <div className="border p-2 w-[120px] flex justify-between items-center mr-5">
              <span onClick={decrement} className="cursor-pointer">-</span>
              <span>{quantity}</span>
              <span onClick={increment} className="cursor-pointer">+</span>
            </div>
            <div onClick={addCart} className="adding p-2 w-[300px] flex justify-center items-center gap-3 cursor-pointer"><MdAddShoppingCart /> Add to Cart</div>
          </div>
          <div className="ask flex gap-2 text-sm items-center py-3 text-center hover:text-[#cc9966] cursor-pointer"><FaRegEnvelope /> Ask about this product</div>
          <div className="flex items-center gap-3 py-5 text-zinc-500">Share on : <span className="border rounded-full p-2 hover:text-[#cc9966] hover:border-[#cc9966]  cursor-pointer"><FaFacebookF size={15} /></span>
            <span className="border rounded-full p-2 hover:text-[#cc9966] hover:border-[#cc9966]  cursor-pointer"><RiTwitterXFill size={15} /></span>
            <span className="border rounded-full p-2 hover:text-[#cc9966] hover:border-[#cc9966]  cursor-pointer"><FaInstagram size={15} /></span>
            <span className="border rounded-full p-2 hover:text-[#cc9966] hover:border-[#cc9966]  cursor-pointer"><FaPinterestP size={15} /></span> </div>
        </div>
      </div>
    </>
  );
}
