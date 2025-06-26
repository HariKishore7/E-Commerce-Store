import React from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ rating }) => {
    return (
        <div className='flex'>
            {
                [1, 2, 3, 4, 5].map(item => (
                    <FaStar key={item} className={rating >= item ? "text-yellow-400" : "text-gray-300"} />
                ))
            }
        </div>
    )
}

export default StarRating