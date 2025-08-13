import React from 'react'

import img from '../assets/Landing_image/logo.png'


//Components Import
import LinkTo from './LinkTo.jsx'


function Navbar() {

    const Pages = [
        { label: "Home", href: "www.fackbook.com" },
        { label: "About US", href: "www.google.com" },
        { label: "Contact US", href: "#" },
        { label: "FAQ", href: "#" },
    ];

    return (
        <>
            <div className='flex justify-between  w-full p-1 pb-0 bg-[#f7c789] shadow-md '>
                <div className=''>
                    <img src={img} alt='logo' className='w-1/5 h-auto ' />
                </div>
                <div className='flex justify-center items-center'>
                    {
                        Pages.map((page, i) => {
                            const { label, href } = page;
                            return <LinkTo className="hover:text-amber-600 xl:text-lg md:text-sm md:w-full sm:text-sm sm:w-full" PageName={label} url={href} key={i} />
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Navbar
















