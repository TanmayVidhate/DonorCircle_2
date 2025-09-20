import React from 'react'

function Button({ name, onClick ,className ,hover}) {
    // alert("User clcieked")
    return (
        <>
            <input type='submit' value={name} className={`p-2 uppercase text-lg text-white bg-[#ffac44] ${hover ? "hover:bg-orange-300  transition-colors duration-300 ease-in-out  hover: rounded-3xl hover:cursor-pointer" : ""}  w-4/5 font-semibold tracking-widest ${className} `} onClick={onClick}/>
        </>
    )
}

export default Button