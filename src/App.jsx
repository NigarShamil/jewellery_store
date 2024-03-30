import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import LogIn from './components/login/MyAccount'
import About from './components/about/About'
import Faq from './components/FAQ/Faq'
import ShoppingCart from './components/cart/ShoppingCart'
import ContactUs from './components/contactUs/ContactUs'
import Register from './components/login/Register'
import ProductDetail from './components/ProductsDesign/ProductDetail'
import Wishlist from './components/cart/Wishlist'
import SigIn from './components/login/SigIn'
import MyAccount from './components/login/MyAccount'
import Checkout from './components/cart/Checkout'
import PageContainer from './components/container/PageContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <PageContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/signIn" element={<SigIn />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/like" element={<Wishlist />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </PageContainer>
      </Router>
    </>
  )
}

export default App
