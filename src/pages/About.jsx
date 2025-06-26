import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <div className='flex flex-col items-center  my-8'>
      <h1 className='font-bold text-3xl text-green-500'>HARI KISHORE</h1>
      <div className='w-auto px-15 py-5'>
        <p>Hello buddy, myself <b>Hari Kishore</b>. I'm a professional <b>Software Developer</b> with over <b>5 years</b> of experience in building web applications. I am passionate about creating efficient, user-friendly websites and continuously strive to enhance my skills in both <b>personal and professional</b> domains.</p>
        <div className='flex items-center justify-center mt-4'>
          <p className='mr-2'>You can reach out to me at <b className='text-blue underline hover:cursor-pointer'>harikishoret99@gmail.com</b> Or
          </p>
          <a href='https://www.linkedin.com/in/harikishore7/' target='_blank' rel="noopener noreferrer">
            <FaLinkedin className='hover:text-gray-400 transform transition-transform duration-300 hover:scale-155 hover:cursor-pointer' /></a>
        </div>
      </div>
      <p className='font-bold text-green-500 text-2xl'>THANK YOU...</p>
    </div>
  )
}

export default About