import React from 'react'
import Products from './Products'
import "./products.css"

const NewArrival = () => {
    return (
        <div className='new flex flex-col h-[800px] items-center  pt-5 '>
            <h3 className='arrival text-3xl pb-5'>NEW ARRIVALS</h3>
            <Products/>
        </div>
    )
}

export default NewArrival