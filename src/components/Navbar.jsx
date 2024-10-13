import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaUser,FaSearch,FaShoppingCart} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'

const Navbar = () => {
    const [isModelopen,setIsModelopen]=useState(false)
    const [isLogin,setIsLogin]=useState(true)
    const [search,setSearch]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const products=useSelector(state=>state.cart.products)


    const handleSearch=(e)=>{
        e.preventDefault();
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }
    const openSignUp=()=>{
        setIsLogin(false)
        setIsModelopen(true)

    }
    const openLogin=()=>{
        setIsLogin(true)
        setIsModelopen(true)

    }
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/">e-SHOP</Link>
            </div>
            <div className='relative flex-1 mx-4'>
            <form onSubmit={handleSearch}>
                <input type='text' placeholder='Search Product here' className='w-full border py-2 px-4 rounded-lg'
                onChange={(e)=>setSearch(
                 e.target.value
                )}></input>
                <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
            </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="/cart" className='relative'>
                <FaShoppingCart className='text-lg'></FaShoppingCart>
                {products.length > 0 && (
                    <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                   {products.length}
                    </span>
                   )}
                </Link>
                <button className='hidden md:block'
                onClick={()=>setIsModelopen(true)}>
                    Login | Register
                </button>
                <button className='block md:hidden'>
                    <FaUser></FaUser>
                </button>
            </div>
        </div>
        <div className='flex items-center justify-center space-x-10 font-bold py-4 text-sm'>
            <Link to="/" className='hover:underline'>Home</Link>
            <Link to="/shop" className='hover:underline'>Shop</Link>
            <Link to="/contact" className='hover:underline'>Contact</Link>
            <Link to="/about" className='hover:underline'>About</Link>
        </div>
        <Modal isModelopen={isModelopen} setIsModelopen={setIsModelopen}>
            {isLogin?<Login openSignUp={openSignUp}/>:<Register openLogin={openLogin}/>}
        </Modal>
    </nav>
  )
}

export default Navbar
