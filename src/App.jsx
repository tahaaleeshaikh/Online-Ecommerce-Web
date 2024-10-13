import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import CartSlice from './redux/cartSlice'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useState } from 'react'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import ProductDeatail from './pages/ProductDeatail'
import Contact from './pages/Contact'
import About from './pages/About'


function App() {
  const[order,setOrder]=useState(null)
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}></Route>
      <Route path='/order-confirmation' element={<Order order={order}/>}></Route>
      <Route path='/filter-data' element={<FilterData/>}></Route>
      <Route path='/product/:id' element={<ProductDeatail/>}></Route>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
