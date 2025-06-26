import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white w-full px-36 py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* <div className='flex flex-col md:flex-row'> */}
        <div className='w-full md:w-6/12'>
          <h3 className='font-bold text-md mb-5'>e-Shop</h3>
          <p className='w-10/12'>A great place to buy all your stuff with best discounts. Shop with us and experience the best online shopping experience.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          {/* <div className='w-full md:w-3/12 sm:py-10 md:py-0'> */}
          <h4 className='font-bold text-md mb-5'>Quick links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link className='hover:underline' to='/'>Home</Link>
            </li>
            <li>
              <Link className='hover:underline' to='/Shop'>Shop</Link>
            </li>
            <li>
              <Link className='hover:underline' to='/Contact'>Contact us</Link>
            </li>
            <li>
              <Link className='hover:underline' to='/About'>About us</Link>
            </li>
          </ul>
          {/* <div className='flex flex-col h-35 justify-between'>
            <Link to='/'>Home</Link>
            <Link to='/Shop'>Shop</Link>
            <Link to='/Contact'>Contact us</Link>
            <Link to='/About'>About us</Link>
          </div> */}
        </div>
        <div>
          {/* <div className='w-full md:w-3/12'> */}
          <h4 className='font-bold text-md mb-5'>Follow Us</h4>
          <div className='flex gap-4'>
            <FaInstagramSquare className='hover:text-gray-400 transform transition-transform duration-300 hover:scale-155' />
            <FaTwitter className='hover:text-gray-400 transform transition-transform duration-300 hover:scale-155' />
            <FaFacebook className='hover:text-gray-400 transform transition-transform duration-300 hover:scale-155' />
            <FaLinkedin className='hover:text-gray-400 transform transition-transform duration-300 hover:scale-155' />
          </div>
          <form className='flex pt-6'>
            <input type='email' className='border rounded-l-sm w-40 text-white bg-gray-800 border-gray-600' placeholder=' Your email'></input>
            <button className='bg-red-500 text-sm hover:br-red-700 hover:cursor-pointer rounded-r-sm'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'></div>
      {/* <div className='underline bg-red-600 mt-6 mb-5 border mr-20'></div> */}
      <div className='flex mr-20 flex-col md:flex-row justify-between items-center'>
        <p>&copy; 2025 e-shop, All Rights reserved</p>
        <div className='flex gap-4 xs:flex-col md:flex-row'>
          <div className='hover:underline'>Privacy policy</div>
          <div className='hover:underline'>Terms of services</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer