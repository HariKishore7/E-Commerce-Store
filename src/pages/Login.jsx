import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = ({ setIsLogin, setIsModelOpen }) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col space-y-4 text-sm'>
            <h2 className='font-bold'>Login</h2>
            <form className='space-y-4'>
                <div className='flex flex-col'>
                    <label htmlFor=''>Email</label>
                    <input type="email" placeholder='Enter email' className='border rounded border-gray-400 py-1 px-2' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>Password</label>
                    <input type="password" placeholder='Enter password' className='border rounded border-gray-400 py-1 px-2 ' />
                </div>
                <div className='flex justify-between gap-2'>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='hover:cursor-pointer' />
                        <label htmlFor='' >Remember me</label>
                    </div>
                    <a className='text-red-500 hover:cursor-pointer' onClick={() => {
                        toast.success("An email will be sent to you to reset your password");
                        setIsModelOpen(false);

                    }}>Forgot Password?</a>
                </div>
                <div>
                    <button className='bg-red-600 w-full text-white py-1 hover:bg-red-800 hover:cursor-pointer'>Login</button>
                </div>
            </form>

            <div className='flex justify-between space-x-4'>
                <span>Don't have an account?</span>
                <button className='text-red-500 hover:cursor-pointer' onClick={() => setIsLogin(false)}>Register</button>
            </div>
        </div>
    )
}

export default Login