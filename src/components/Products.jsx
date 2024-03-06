import React from 'react';
import products from "../assets/data/products.json"

const Products = () => {
    return (
        <div>
            <section className='product'>
                <div className='container grid3'>
                    {products.map((item) => (
                        <div className='details' key={item.id}>
                            {item.images && item.images[0] && (
                                <img style={{ width: "80px" }} src={item.images[0]} alt="" />
                            )}
                            <h3>${item.price}</h3>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Products;



