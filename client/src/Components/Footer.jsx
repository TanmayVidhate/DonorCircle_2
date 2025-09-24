import React from 'react'
import LinkTo from './LinkTo'

function Footer() {
    return (
        <>
            <div className='flex justify-center w-full border border-red-500 '>
                <div className='border border-red-500 w-full text-center'>
                    <div>DonorCircle.in</div>
                    <div className='text-left font-semibold'>Connecting blood donors with those in need. Together, we save lives.</div>
                </div>

                <div className='w-full border border-red-500 text-center'> 
                    <div className='text-center'>Quick Links</div>
                    <LinkTo PageName="About us" url="/aboutus" className="text-black capitalize" />
                    <LinkTo PageName="Home" url="/" className="text-black capitalize"/>
                </div>

                <div className='w-full border border-red-500 text-center'>
                    <p>Blood Groups</p>
                </div>

                <div className='w-full border border-red-500 text-center'>
                    <p>Support</p>

                </div>
            </div>
        </>
    )
}

export default Footer