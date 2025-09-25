import React from 'react'
import LinkTo from './LinkTo'

function Footer() {
    return (
        <>
            <div className='bg-[#243447]  h-2/4 '>
                <div className='flex justify-center mt-5'>
                    <div className=' text-center w-1/4 p-2 '>
                        <div className='font-bold text-white text-lg '>DonorCircle.in</div>
                        <div className='text-left font-semibold text-white  '>We bring donors and recipients together to ensure that no life is lost for want of blood. Every connection we enable is a step toward hope and healing.</div>
                    </div>

                    <div className='text-center w-1/4 p-2 '>
                        <div className='text-center font-bold text-white text-lg'>Quick Links</div>
                        <LinkTo PageName="About us" url="/aboutus" className="text-white capitalize" />
                        <LinkTo PageName="Home" url="/" className="text-white capitalize" />
                    </div>

                    <div className='text-center w-1/4 p-2'>
                        <div className='font-bold text-white text-lg'>Blood Groups</div>
                        <div className='text-white'>A+</div>
                        <div className='text-white'>B+</div>
                        <div className='text-white'>O+</div>
                        <div className='text-white'>AB+</div>
                    </div>

                    <div className='text-center w-1/4 p-2'>
                        <div className='font-semibold text-white text-lg'>Support</div>
                    </div>


                </div>
                <div className='text-center mt-44 text-base text-white  h-min  '>
                    <div className='h-full text-xl'>© 2025 DonorCircle.in. All rights reserved.</div>
                </div>
            </div>

        </>
    )
}

export default Footer