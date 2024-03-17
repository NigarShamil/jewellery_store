import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { SliderComp } from './components/home/SliderComp'
import PageContainer from './components/home/PageContainer'
import Home from './components/home/Home'
import NewArrival from './components/NewArrival/NewArrival'
import Footer from './components/footer/Footer'
import LogIn from './components/login/LogIn'
import About from './components/about/About'
import ContactUs from './components/contactUs/ContactUs'
import Faq from './components/FAQ/Faq'
import ShoppingCart from './components/cart/ShoppingCart'
import HighQuality from './components/home/HighQuality'
import Content from './components/Contents/Content'
import Categories from './components/Categories'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home/>
      <Footer />

    </>
  )
}

export default App
