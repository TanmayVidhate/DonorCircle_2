import React from 'react'
import Button from './Button'

function ContactUSCard({className,Icon,title,info,mobile,action,btntext,btnbgcolor}) {

    return (
        <>
            <div className='border border-red-700 rounded-md text-center w-5/6 h-[300px] m-5 p-2  md:w-[300px] lg:w-[350px]'>
                <div className={`m-auto  rounded-full w-[20%] h-[20%] mt-3 relative ${className} sm:w-[20%] sm:h-[20%] lg:w-[25%] lg:h-[20%]`}>
                    <p className='absolute left-4 top-4 text-white sm:left-5 sm:top-4 md:left-4'><Icon/></p>
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