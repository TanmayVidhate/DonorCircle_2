import React from 'react'
import Button from './Button'
function ContactUSCard({title,info,mobile,action}) {
    return (
        <>
            <div className='border rounded-md text-center w-2/6 m-2 py-5'>
                <div className=''>
                    <p>Img</p>
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
                    <Button name="Call Now" className='w-1/3 text-sm rounded-md'/>
                </div>
            </div>
        </>
    )
}

export default ContactUSCard