import React from 'react'


//Components import
import Label from './Label'

function UploadFile({ type, name, onChange }) {
    // console.log("type=",type);
    // console.log("name=",name);
    // console.log("onChange=",onchange);
    return (
        <>
            <div className=''>
                <input className=' m-1 p-2 rounded w-96 focus:outline-none ' 
                type={type}
                name={name} 
                onChange={onChange} />
            </div>
        </>
    )
}

export default UploadFile