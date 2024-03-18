import React from 'react'
import Categories from './Categories'
import Products from './Products'
import "./products.css"

const NewArrival = () => {
    return (
        <div className='new flex flex-col  items-center m-auto  pt-5 '>
            <h3 className='arrival text-3xl pb-5'>NEW ARRIVALS</h3>
            <Categories />
            <Products/>
        </div>
    )
}

export default NewArrival