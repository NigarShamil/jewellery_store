
// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { getCategories } from '../store/categorySlice';


// const Categories = () => {
//     const dispatch = useDispatch();
//     const { categories } = useSelector(state => state.categories)

//     console.log(categories, "categories");

//     useEffect(() => {
//         dispatch(getCategories())
//     }, [dispatch])

//     return (
//         <div className='category flex items-center justify-center gap-3'>
//             {categories?.map((category, index) => (
//                 <div className='categories text-xl cursor-pointer' key={index}>{category}</div>
//             ))}
//         </div>
//     )
// }


// export default Categories;

import React from 'react';
import { category } from '../../assets/data/categories';

const Categories = () => {
    return (
        <div>
            <div className='container m-auto'>
                {category.map((item) => (
                    <div className='category' key={item.id}>
                        <div className='flex justify-center items-center text-center px-3 cursor-pointer text-lg text-zinc-400'>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;


