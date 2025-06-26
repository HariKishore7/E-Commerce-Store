import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  return (
    <div className='max-auto flex items-center flex-col gap-3 mt-10 mx-8 my-8 py-6'>
      <div className='text-xs border bg-blue-300 text-white p-0.1 rounded-2xl px-3 py-1'>Contact Us</div>
      <div className='font-bold text-xl'>Let's Get in Touch.</div>
      <div className='flex text-xs'>Or just reach out manually to&nbsp;<p className='text-blue-500'>harikishoret99@gmail</p></div>
      <div className='flex flex-col space-y-2 text-sm w-90'>
        <div className='flex flex-col'>
          <label>*Full name</label>
          <input className='border border-gray-400 rounded-xl p-2' placeholder='Enter your full name' type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label>Email address</label>
          <input type="email" className='border border-gray-400 rounded-xl p-2' placeholder='Enter your email address' />
        </div>
        <div className='flex flex-col'>
          <label>*Phone Number</label>
          <input type="number" className='border border-gray-400 rounded-xl p-2' placeholder='Enter your phone number' onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label>Message</label>
          <textarea className='border border-gray-400 rounded-xl p-2' placeholder='Enter your message' />
        </div>
      </div>
      <button className='bg-blue-600 rounded-xl w-90 text-white text-sm font-semibold mt-4 py-1 hover:cursor-pointer hover:bg-blue-800' onClick={() => {
        (name.length > 2 && phone.length == 10) ?
          toast.success("We'll get in touch soon") : toast.error("Please enter Name and a valid 10-digit Phone number");
      }}>Submit form</button>
    </div>
  )
}

export default Contact