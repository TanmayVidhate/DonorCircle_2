import React from 'react'

// import Component
import Navbar from '../Components/Navbar'

function ContactUs() {
    return (
        <div className='flex flex-col w-screen min-h-screen bg-[#ffd6a5]  xl:h-screen  '>
            <Navbar />
            <div className='flex-1 grid place-items-center '>
                <div className='flex justify-center  items-center border rounded-lg m-5 mt-24 bg-[#FFFFFF] w-5/6   sm:w-3/4 sm:px-5 lg:mt-10 lg:w-4/5 2xl:w-3/5  '>
                    <div className='border rounded-lg border-red-700 w-full'>
                        <div className='my-2'>
                            <p className='text-3xl font-bold' >Get in Touch</p>
                        </div>
                        <div className=''>
                            <p className=' font-semibold'>Need help? Have questions? We're here to support you 24/7. Reach out to us anytime - every inquiry matters.</p>
                        </div>
                    </div>
                    <div className='border rounded-lg border-red-700 w-full'>
                        Second
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs