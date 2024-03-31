
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import products from "../../assets/data/products.json";
import { BiSearch } from "react-icons/bi";
import "./navbar.css"

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate(); 

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };

    const filterData = (searchTerm) => {
        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setFilteredData(filteredProducts);
    };


    return (
        <div className='searchField'>
            <div className='search flex items-center'>
                <BiSearch className='icons' size={22} />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className='search-input outline-none'
                />
            </div>

            {searchTerm.length > 0 && filteredData.length > 0 && (
                <ul className="search-results bg-white text-[#cc9966] z-50 overflow-y-auto  absolute left-[10%] top-[18%] w-[400px]">
                    {filteredData.map((product) => (
                        <li key={product.id} onClick={() => navigate(`/products/${product.id}`)} className='cursor-pointer p-1 border-b hover:bg-gray-50'>
                            {product.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchField;

