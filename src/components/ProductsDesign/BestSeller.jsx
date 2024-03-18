import React from 'react'
import "./products.css"
import BestProducts from './BestProducts'
import Categories from './Categories'

const BestSeller = () => {
    return (
        <div>
            <div className='new flex flex-col  items-center m-auto  pt-5 '>
                <h3 className='arrival text-3xl pb-5'>BEST SELLER</h3>
                <Categories />
                <BestProducts/>
            </div>
        </div>
    )
}

export default BestSeller