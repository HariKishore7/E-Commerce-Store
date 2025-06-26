import React from 'react'

const Register = ({ setIsLogin }) => {
    return (
        <div className='flex flex-col space-y-4 text-sm'>
            <h2 className='font-bold'>Register</h2>
            <form className='space-y-4'>
                <div className='flex flex-col'>
                    <label htmlFor=''>Name</label>
                    <input type="email" placeholder='Enter Name' className='border rounded border-gray-400 py-1 px-2' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>Email</label>
                    <input type="email" placeholder='Enter email' className='border rounded border-gray-400 py-1 px-2' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>Password</label>
                    <input type="password" placeholder='Enter password' className='border rounded border-gray-400 py-1 px-2 ' />
                </div>
                <div>
                    <button className='bg-red-600 w-full text-white py-1 hover:bg-red-800 hover:cursor-pointer'>Register</button>
                </div>
            </form>

            <div className='flex justify-between space-x-4'>
                <span>Already have an account?</span>
                <button className='text-red-500 hover:cursor-pointer' onClick={() => setIsLogin(true)} >Login</button>
            </div>
        </div>
    )
}

export default Register