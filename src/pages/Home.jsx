import React from 'react'
import { Categories } from '../assets/mockData'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import TopProducts from '../components/TopProducts'
import Shop from './Shop'
import { Link, useNavigate } from 'react-router-dom'
import Image1 from '../assets/Images/Others/shopping-cart.jpg'


const Home = ({ search }) => {
    const navigate = useNavigate();
    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
                <div className='w-full md:w-3/12'>
                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>Shop By Categories</div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                        {Categories.map((item, index) => (
                            <li key={index} className='flex items-center text-sm font-medium'>
                                <div className='w-2 h-2 border rounded-full border-red-500 mr-2'></div>
                                <Link to={`/category/${item}`} className='hover:cursor-pointer hover:underline'>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:w-9/12 mt-8 md:mt-0 relative'>
                    <div>
                        <img className="h-65.5 w-full" src={Image1} alt="cart image" />
                    </div>
                    <div className='absolute top-16 left-8 text-sm font-medium'>
                        <p className='text-3xl bold'>Hi, Welcome</p>
                        <h2 className='text-xl mt-2.5 font-bold text-gray-500'>Enjoy Shopping</h2>
                        <button className='bg-red-600 px-8 py-1.5  text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105' onClick={() => navigate('/shop')}>Shop Now</button>
                    </div>
                </div>
            </div>
            {search.length > 0 ? <Shop /> :
                <>
                    <InfoSection />
                    <CategorySection />
                    <TopProducts />
                    <Shop />
                </>
            }
        </div>

    )
}

export default Home