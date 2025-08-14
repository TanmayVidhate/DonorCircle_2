import React, { useState } from 'react'

import img from '../assets/Landing_image/logo.png'

//Lucid components
import { AlignJustify, X } from 'lucide-react';

//Components Import
import LinkTo from './LinkTo.jsx'

function Navbar() {

    const [isOpen, setIsopen] = useState(false);

    const Pages = [
        { label: "Home", href: "www.fackbook.com" },
        { label: "About US", href: "www.google.com" },
        { label: "Contact US", href: "#" },
        { label: "FAQ", href: "#" },
    ];

    return (
        <>
            <div className='flex justify-between  w-full p-1 pb-0 bg-[#f7c789]  relative'>
                <div className=''>
                    <img src={img} alt='logo' className='w-2/5 sm:w-2/6 md:w-2/6 lg:w-3/12 ' />
                </div>
                <div className='lg:hidden'>

                    <AlignJustify size={40}
                        className='mt-5'
                        onClick={() => {
                            setIsopen(!isOpen)
                        }}
                    />
                    {
                        isOpen && (
                            <div className='absolute w-screen h-screen text-xl left-0 top-2 backdrop-blur '>

                                <div className='rounded-2xl w-full '>
                                    <div className=''>
                                        <X size={50} className='absolute right-0 top-0    '
                                            onClick={(e) => {
                                                setIsopen(!isOpen)
                                            }}

                                        />
                                    </div>
                                    {
                                        Pages.map((page, i) => {
                                            const { label, href } = page;
                                            return <LinkTo className=" w-full hover:text-amber-600 my-10 text-black text-xl " PageName={label} url={href} key={i} />
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className=' hidden sm:hidden md:hidden lg:visible lg:flex lg:justify-center lg:items-center  '>
                    {
                        Pages.map((page, i) => {
                            const { label, href } = page;
                            return <LinkTo className="hover:text-amber-600 lg:text-lg " PageName={label} url={href} key={i} />
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Navbar
















