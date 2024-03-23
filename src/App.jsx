import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import LogIn from './components/login/LogIn'
import About from './components/about/About'
import Faq from './components/FAQ/Faq'
import ShoppingCart from './components/cart/ShoppingCart'
import ContactUs from './components/contactUs/ContactUs'
import Register from './components/login/Register'
import ProductDetail from './components/ProductsDesign/ProductDetail'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
