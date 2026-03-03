import React from 'react'
import SignUpForm from '../components/SignUpForm'
import StarIcon from '@mui/icons-material/Star';
const LoginPage = () => {
  return (
   <>
   <div className='min-h-screen flex flex-col hero-background'>

   <div className='w-full text-white'>
    <div className="flex items-center gap-3 ml-5 ">
  <span className="h-6 w-6 bg-[#0CC8A8] rounded-full"></span>
  <span className="text-white font-medium text-2xl tracking-tight">
    aps
  </span>
</div>
</div>
   <div className='flex flex-1'>
<div className='flex-1 flex flex-col justify-center px-20 '>
    <div className="max-w-2xl">

    <h1 className='text-5xl font-bold mb-6 text-white'>Expert level Cybersecurity in <span className="text-[#0CC8A8]"> hours </span>
not weeks.</h1>
    <p className='mt-8 mb-1 text-white'>What's included</p>
    <div className='flex flex-col gap-4 text-white max-w-lg'>

    <p>✅Effortlessly spider and map targets to uncover hidden security flaws.</p>
    <p>✅Deliver high-quality, validated findings in hours, not weeks.</p>
    <p>✅Generate professional, enterprise-grade security reports automatically.</p>
    </div>
    <div className='mt-20 text-white flex items-center gap-2'>
      <StarIcon className='text-[#0CC8A8]'></StarIcon> <span>Trustpilot</span>
    </div>
    <div className='flex items-center gap-2 text-white mt-2'>
      <span className='text-xl'>Rated 4.5/5.0</span> <span className='text-gray-400 text-[13px]'>(
100k+ reviews)</span>
    </div>
    </div>
</div>
<div className="flex-1 flex justify-center items-center">
  
  <SignUpForm></SignUpForm></div>
   </div>
   </div>
   
   </>
  )
}

export default LoginPage
