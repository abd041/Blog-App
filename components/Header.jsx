import React from 'react'
import { assets } from '../assets/assets'
import Image from "next/image"

const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <div><Image src={assets.logo} alt='blog website logo' className="w-[130px] sm:w-auto" /></div>
                <div><button className='flex items-center gap-2 font-medium py-3 px-6 sm:py-1 sm:px-3 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                    Get Started <Image src={assets.arrow} alt='Getting started' />
                </button></div>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>
                    Latest Blog
                </h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
           <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
            <input type='email' placeholder='Enter your email' className='pl-4 outline-none' />
            <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active-text-white'>Subscribe</button>
           </form>
           </div>
        </div>
    )
}

export default Header
