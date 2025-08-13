import React from 'react'

function Button({ name, onClick ,className}) {
    // alert("User clcieked")
    return (
        <>
            <input type='submit' value={name} className={`p-2 uppercase text-lg text-white bg-[#ffac44] hover:bg-orange-300  transition-colors duration-300 ease-in-out  hover: rounded-3xl w-4/5 font-semibold tracking-widest hover:cursor-pointer ${className} `} onClick={onClick}/>
        </>
    )
}

export default Button