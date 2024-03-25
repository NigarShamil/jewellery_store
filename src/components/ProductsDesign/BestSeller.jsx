import React from 'react'
import "./products.css"
import BestProducts from './BestProducts'


const BestSeller = () => {
    return (
        <div>
            <div className='new flex flex-col h-[800px] items-center pt-5 '>
                <h3 className='arrival text-3xl pb-5'>BEST SELLER</h3>
                <BestProducts/>
            </div>
        </div>
    )
}

export default BestSeller