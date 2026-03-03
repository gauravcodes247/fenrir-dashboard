import React from 'react'
import SignUpForm from '../components/SignUpForm'
const LoginPage = () => {
  return (
   <>
   <div className='min-h-screen flex flex-col hero-background'>

   <div className='w-full text-white'>
    <div className="flex items-center gap-3 ml-5 ">
  <div className="h-3 w-3 bg-[#0CC8A8] rounded-full"></div>
  <span className="text-white font-medium text-lg tracking-tight">
    aps
  </span>
</div></div>
   <div className='flex flex-1'>
<div className='flex-1 flex flex-col justify-center px-20 '>
    <div className="max-w-2xl">

    <h1 className='text-5xl font-bold mb-6 text-white'>Expert level Cybersecurity in <span className="text-[#0CC8A8]"> hours </span>
not weeks.</h1>
    <p className='mt-8 mb-1 text-white'>What's included</p>
    <div className='flex flex-col gap-4 text-white max-w-lg'>

    <p>✅Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptatum rerum.</p>
    <p>✅Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptatum rerum.</p>
    <p>✅Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, voluptatum rerum.</p>
    </div>
    </div>
</div>
<div className="flex-1 flex justify-center items-center"><SignUpForm></SignUpForm></div>
   </div>
   </div>
   
   </>
  )
}

export default LoginPage
