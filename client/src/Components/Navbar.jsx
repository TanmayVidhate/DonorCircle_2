import React, { useState } from 'react'

import img from '../assets/Landing_image/logo.png'

//Lucid components
import { AlignJustify, X } from 'lucide-react';

//Components Import
import LinkTo from './LinkTo.jsx'
import Translate from './Translate.jsx';

import { useTranslation } from 'react-i18next';
import "../i18n.js";

function Navbar() {

    const { t } = useTranslation(); // add this

    const [isOpen, setIsopen] = useState(false);

    const Pages = [
        { label: t(`${'home'}`), href: "/" },
        { label: t(`${'about_us'}`), href: "/aboutus" },
        { label: t(`${"contact_us"}`), href: "/contactus" },
        { label: t(`${"faq"}`), href: "/faq" },
    ];

    return (
        <>
            <div className='flex justify-between fixed top-0 left-0 w-full z-50  p-1 pb-0 bg-[#f7c789]  '>
                <div className=''>
                    <img src={img} alt='logo' className='w-2/6 sm:w-2/6 md:w-2/6 lg:w-3/12 ' />
                </div>

                <div className='lg:hidden'>

                    <AlignJustify size={30}
                        className='mt-5'
                        onClick={() => {
                            setIsopen(!isOpen)
                        }}
                    />
                    {
                        isOpen && (
                            // mobile width
                            <div className='absolute w-screen h-screen text-xl left-0 top-2 backdrop-blur '>

                                <div className='rounded-2xl w-full '>
                                    <div className=''>
                                        <X size={30} className='absolute right-1 top-4    '
                                            onClick={(e) => {
                                                setIsopen(!isOpen)
                                            }}

                                        />
                                    </div>
                                    {
                                        Pages.map((page, i) => {
                                            const { label, href } = page;
                                            return <LinkTo className=" w-full hover:text-amber-600 my-10 !text-black text-xl transition-transform duration-300 hover:scale-125" PageName={label} url={href} key={i} />
                                        })
                                    }
                                    <div className="w-[100%] m-auto text-center">
                                    <Translate  />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                    {/* full width */}
                <div className=' hidden sm:hidden md:hidden lg:visible lg:flex lg:justify-center lg:items-center  '>
                    {
                        Pages.map((page, i) => {
                            const { label, href } = page;
                            return <LinkTo className="hover:text-amber-600 lg:text-lg transition-transform duration-300 hover:scale-125 " PageName={label} url={href} key={i} />
                        })
                    }
                    <Translate />
                </div>
            </div>
        </>
    )
}

export default Navbar
















