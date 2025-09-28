import React from 'react'
import LinkTo from './LinkTo'

function Footer() {
    return (
        <>
            <div className='bg-[#243447]  h-3/6  lg:p-8'>
                <div className='flex-row justify-center mt-5 sm:flex-col md:flex-row lg:flex'>
                    <div className=' w-2/3 mx-7 sm:w-3/4 sm:mx-8 md:w-10/12'>
                        <div className='font-bold text-red-500 text-lg sm:text-left '>DonorCircle.in</div>
                        <div className='text-left font-semibold text-white   '>Connecting donors and recipients to save lives — every match brings hope and healing.</div>
                    </div>

                    <div className=' w-2/3 mx-7 my-2 sm:mx-8 md:w-1/3  '>
                        <div className='  font-bold text-red-500 text-lg sm:text-left'>Quick Links</div>
                        <LinkTo PageName="About us" url="/aboutus" className="!text-left text-white capitalize sm:text-left " />
                        <LinkTo PageName="Home" url="/" className="!text-left text-white capitalize sm:text-left" />
                        <LinkTo PageName="Login" url="/signin" className="!text-left text-white capitalize sm:text-left" />
                    </div>

                    <div className=' w-2/4 mx-7 sm:mx-8  sm:text-left md:w-1/3'>
                        <div className='font-bold text-red-500 text-lg '>Blood Groups</div>
                        <div className='text-white'>A+</div>
                        <div className='text-white'>B+</div>
                        <div className='text-white'>O+</div>
                        <div className='text-white'>AB+</div>
                    </div>

                    <div className=' w-1/4 mx-7 sm:mx-8 sm:text-left'>
                        <div className='font-semibold text-red-500 text-lg'>Support</div>
                    </div>


                </div>
                <div className='text-center mt-32 mb-10 text-base text-white  h-min  '>
                    <div className='h-full text-xl'>© 2025 DonorCircle.in. All rights reserved.</div>
                </div>
            </div>

        </>
    )
}

export default Footer