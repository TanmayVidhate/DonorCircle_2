import React from 'react'

function InputField({ type, name, className, placeholder, value, onChange, icon, ...register }) {


    return (
        <>
            <div className={`relative  border-2  ${className}`}>
                {icon && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        {icon}
                    </span>
                )}
                <input className=' m-1 p-2 rounded w-4/5 focus:outline-none sm:text-lg' {...register} name={name} type={type}  placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        </>
    )
}

export default InputField