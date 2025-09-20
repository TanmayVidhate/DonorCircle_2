import React from 'react'
import Button from './Button'

function ContactUSCard({className,Icon,title,info,mobile,action,btntext,btnbgcolor}) {

    return (
        <>
            
            <div className='border border-red-700 rounded-md text-center w-5/6 h-[750px] m-5 p-2 '>
                <div className={`m-auto  rounded-full w-[25%] h-[25%] mt-3 relative ${className}`}>
                    <p className='absolute left-7 top-6 text-white '><Icon/></p>
                </div>
                <div className='mt-3'>
                    <p>{title}</p>
                </div>
                <div className='m-2'>
                    <p className='text-gray-400 m-1 leading-5'>{info}</p>
                </div>
                <div className='m-1'>
                    <p className='text-xl font-semibold'>{mobile}</p>
                </div>
                <div>
                    <p className='text-gray-400 '>{action}</p>
                </div>
                <div className='mt-2' >
                    <Button name={btntext} className={`w-1/2 text-sm rounded-md ${btnbgcolor} hover:bg-none`} hover={false}/>
                </div>
            </div>
        </>
    )
}

export default ContactUSCard