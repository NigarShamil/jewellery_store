import React from 'react'

const HighQuality = () => {
  return (
    <div>
      <div className="quality_banner relative">
        <img src="https://molla-theme.myshopify.com/cdn/shop/files/banner-5_13f87845-4db2-4f26-8174-0adb31710889.jpg?v=1614737649" className='quality_cover ' />
        <div className='quality_text  flex flex-col justify-center items-center gap-3'>
          <h3 className='quality_title '>HIGH QUALITY SINCE 2001</h3>
          <p className='quality_subt'>Everything you need to complete the perfect collection.</p>
          <p className='quality_desc text-sm text-gray-500 text-center '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
            malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>
          <div className='btn tracking-wide cursor-pointer'>SEE WHAT'S NEW</div>
        </div>
      </div>
    </div>
  )
}

export default HighQuality