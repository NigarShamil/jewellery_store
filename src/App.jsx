import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { SliderComp } from './components/home/SliderComp'
import PageContainer from './components/home/PageContainer'
import Home from './components/home/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
