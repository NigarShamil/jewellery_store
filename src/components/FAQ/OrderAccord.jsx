import React, { useState, useEffect } from 'react'
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import "./faq.css"

const OrderAccord = () => {

  const [data, setData] = useState([
    { title: "Tracking my order", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum." },
    { title: "I haven't received my order", content: "Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros." },
    { title: "How can I return an item?", content: "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." },
  ]);

  const [activeItem, setActiveItem] = useState(null);
     
      const accordionClick = (item) => {
        setActiveItem((prevItem) => (prevItem === item ? null : item));
      };
     
      useEffect(() => {
        console.log('Active item changed:', activeItem);
      }, [activeItem]);

  return (
     <div className="container border mt-5">
          <div className="accordion">
            {data.map((item) => (
              <div className="accordion-item" key={item.title}>
                <h2 className="accordion-header">
                  <button className="accordion-button bg-gray-50 font-medium" type="button" onClick={() => accordionClick(item)}>
                    {item.title}
                    <span className='icon'>
                    {activeItem === item ?  <MdExpandLess className='icons'/>:<MdExpandMore className='icons'/>}</span>
                  </button>
                </h2>
                {activeItem === item && (
                  <div className="accordion-content">
                    <p className='p-5'>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  )
}

export default OrderAccord