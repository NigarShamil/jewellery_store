import React, { useState, useEffect } from 'react'
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const ShippingAccord = () => {
    const [data, setData] = useState([
        { title: "How will my parcel be delivered?", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi." },
        { title: "Do I pay for delivery?", content: "Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros." },
        { title: "Will I be charged customs fees?", content: "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros." },
        { title: "My item has become faulty", content: "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros." }
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
      );
}

export default ShippingAccord