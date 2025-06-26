import React from 'react'
import Image1 from '../assets/Images/Gender/Men.jpg'
import Image2 from '../assets/Images/Gender/Women.jpg'
import Image3 from '../assets/Images/Gender/Kids.jpg'
import { Link } from 'react-router-dom'

const CategorySection = () => {
    const categoryItems = [
        {
            title: "Men",
            imageURL: Image1
        },
        {
            title: "Women",
            imageURL: Image2
        },
        {
            title: "Kids",
            imageURL: Image3
        },
    ]
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
            {categoryItems.map((item, index) => {
                return (
                    <Link to={`/Collections/${item.title}`}>
                        <div key={index} className='relative h-44 transform transition-transform duration-300 hover:scale-105'>
                            <img src={item.imageURL} className='w-full h-full rounded-lg object-cover shadow-md' />
                            <div className='absolute top-17 left-2'>
                                <p className='text-xl font-bold'>{item.title}</p>
                                <p className='text-gray-900'>View all</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CategorySection