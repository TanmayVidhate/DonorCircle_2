import React from 'react'
import Button from './Button'
function ContactUSCard({title,info,mobile,action,btntext}) {
    return (
        <>
            <div className='border rounded-md text-center w-2/6  h-max m-2 py-10 '>
                <div className='border m-auto border-red-500 rounded-full w-1/2 h-2/5 '>
                    <p className='text-center'>Img</p>
                </div>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p className='text-gray-400'>{info}</p>
                </div>
                <div>
                    <p className='text-xl font-semibold'>{mobile}</p>
                </div>
                <div>
                    <p className='text-gray-400'>{action}</p>
                </div>
                <div >
                    <Button name={btntext} className='w-1/2 text-sm rounded-md'/>
                </div>
            </div>
        </>
    )
}

export default ContactUSCard