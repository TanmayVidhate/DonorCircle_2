import React from 'react'

function InputField({ type, name, className, placeholder, value, onChange, icon, ...register }) {


    return (
        <>
            <div className={`relative w-96   ${className}`}>
                {icon && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        {icon}
                    </span>
                )}
                <input className='border-2 m-1 p-2 rounded w-96 focus:outline-none' {...register} name={name} type={type}  placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        </>
    )
}

export default InputField