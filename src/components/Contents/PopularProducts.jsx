import React from 'react'
import products from "../../assets/data/products.json";
import { CiStar } from "react-icons/ci";

const PopularProducts = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-[530px]'>
                {products.slice(8, 11).map((product) => (
                    <div key={product.id} className='pop flex justify-center items-center  py-6 border-b'>
                        <img
                            className="w-[88px]"
                            src={product.images && product.images[0]}
                            alt={product.title}
                        />
                        <div className="bg-white w-[280px] h-[85px] text-sm p-2">
                            <p className="pb-2">{product.title}</p>
                            <div className="stars flex gap-2 pb-2  text-zinc-400 "><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>
                            <h3>${product.price}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default PopularProducts