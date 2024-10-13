import React, { useState } from 'react'

const ChangeAddress = ({setaddress,setIsModelopen}) => {
    const[newAddress,setNewAddress]=useState("")
    const onClose=()=>{
        setaddress(newAddress)
        setIsModelopen(false)
    }
  return (
    <div>
        <input type='text' placeholder='Enter new address' className='border p-2 w-full mb-4'
        onChange={(e)=>setNewAddress(e.target.value)}></input>
        <div className='flex justify-end'>
            <button className='bg-gray-500 text-white p-2 px-4 rounded mr-2' onClick={()=>setIsModelopen(false)}>
                Cancel
            </button>
            <button className='bg-blue-500 text-white p-2 px-4 rounded' onClick={onClose}>
                Save Address
            </button>

        </div>
      
    </div>
  )
}

export default ChangeAddress
