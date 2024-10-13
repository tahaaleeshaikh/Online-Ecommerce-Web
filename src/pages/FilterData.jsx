import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Notfound from '../assets/Images/nofound.jpg'
const FilterData = () => {
    const filterProducts=useSelector(state=>state.product.filtereddata)
  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        {filterProducts.length>0?
        <><h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {filterProducts?.map((product, index) => (
      <ProductCard product={product}/>
))}
        </div>
        </>:
      <div className='flex justify-center'>
        <img src={Notfound} alt=''></img>
      </div>
}
      </div>      
  )
}

export default FilterData
