import React, { useState } from 'react'

const ChangeAddress = ({ address, setAddress, setIsModelOpen }) => {
    const [newAddress, setNewAddress] = useState(address);
    return (
        <div>
            <div className='font-bold text-lg'>Update Shipping address </div>
            <input type="text" placeholder='Enter new address' className='border p-2 w-full mb-4 mt-4 rounded-md' value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
            <div className='flex justify-end'>
                <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:cursor-pointer' onClick={() => setIsModelOpen(false)}>Cancel</button>
                <button className='bg-blue-500 text-white py-2 px-4 rounded hover:cursor-pointer' onClick={() => {
                    setIsModelOpen(false);
                    setAddress(newAddress)
                }}>Save Address</button>
            </div>
        </div>
    )
}

export default ChangeAddress