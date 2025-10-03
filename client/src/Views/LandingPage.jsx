import React from 'react'

import img from '../assets/Landing_image/landing.jpg'

import { useNavigate } from 'react-router'


//Components Import
import Image from '../Components/Image'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import Footer from '../Components/Footer'


function LandingPage() {

    const navigate = useNavigate();

    return (
        <>
            <div className='flex flex-col w-screen min-h-screen bg-[#ffd6a5]  xl:h-screen  '>
                <Navbar />
                <div className='flex-1 grid place-items-center '>
                    <div className='flex justify-center  items-center border rounded-lg m-5 mt-24 bg-[#FFFFFF] w-5/6   sm:w-3/4 sm:px-5 lg:mt-36 lg:mb-24 lg:w-4/5 lg:h-4/5 2xl:w-3/5  '>
                        <div className='  lg:flex   '>
                            {/* First div */}
                            <div className='p-1   mt-5 w-full sm:py-7 md:px-4 lg:w-4/6 xl:w-5/6 xl:h-5/6 '>
                                <div className='text-[#FBA943] text-4xl font-bold uppercase mx-5 tracking-wide sm:w-full sm:mx-1 md:mx-1 md:text-4xl lg:mt-10 '>Donor<br />Circle</div>
                                <div className='mx-5 my-4 text-gray-700 tracking-wide sm:w-full sm:mx-1  lg:text-base 2xl:w-3/4  '>
                                    Accidents, Surgeries, Cancer treatments,
                                    All need blood. Every single day.
                                    Be someone’s miracle.<br/> <span className='text-[#FBA943] text-2xl font-bold opacity-0 animate-fadeIn mt-5 '  >Join DonorCircle.</span>
                                </div>
                                <Button name={"SignUp"} className={"ml-5 bg-[#FBA943] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50 sm:py-2 sm:mx-1 sm:w-full lg:w-1/2 "} 
                                    hover={true}
                                    onClick={() => {
                                        navigate("/signup")
                                    }}
                                />
                            </div>

                            {/* second div */}
                            <div className=' w-full my-5  grid place-items-center   '>
                                <Image img_url={img} className="w-auto h-1/3  object-scale-down sm:object-scale-down md:object-scale-down lg:object-cover   " />
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
            </div>
        </>
    )
}

export default LandingPage