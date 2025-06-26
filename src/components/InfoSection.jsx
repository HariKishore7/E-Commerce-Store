import React from 'react'
import { FaHeadset, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600' />,
            title: 'Free Shipping',
            description: "Get your orders delivered with no extra cost"
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600' />,
            title: 'Support 24/7',
            description: "24/7 assist"
        },
        {
            icon: <FaMoneyBillWave className='text-3xl text-red-600' />,
            title: '100% Money Back',
            description: "Full refund if not satisfied with the product"
        },
        {
            icon: <FaTag className='text-3xl text-red-600' />,
            title: 'Discount',
            description: "Enjoy 75% Discount"
        },
    ]
    return (
        <div className='bg-white pb-8 pt-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {infoItems.map((item, index) => {
                    return (
                        <div className='bg-white flex flex-col items-center text-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer' key={index}>
                            {item.icon}
                            <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                            <p className='mt-2 text-gray-600'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InfoSection