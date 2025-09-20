import React from 'react'
import Button from './Button'

function ContactUSCard({Icon,title,info,mobile,action,btntext}) {
    console.log("mm=",Icon)
    return (
        <>
            <div className='border rounded-md text-center w-2/6 h-[300px] m-2 p-2 '>
                <div className='border m-auto border-red-500  rounded-full w-[30%] h-[25%] mt-3 relative'>
                    <p className='absolute right-6 top-5 text-white '><Icon/></p>
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
                    <Button name={btntext} className='w-1/2 text-sm rounded-md'/>
                </div>
            </div>
        </>
    )
}

export default ContactUSCard