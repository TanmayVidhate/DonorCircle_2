import React from 'react'

import img from '../assets/Landing_image/landing.jpg'

import { useNavigate } from 'react-router'


//Components Import
import Image from '../Components/Image'
import Navbar from '../Components/navbar'
import Button from '../Components/Button'


function Landingpage() {

    const navigate = useNavigate();

    return (
        <>
            <div className='flex flex-col w-screen h-screen bg-[#ffd6a5]  '>
                <Navbar />
                <div className='flex-1 grid place-items-center'>
                    <div className='flex justify-center items-center rounded bg-[#FFFFFF] w-3/5 h-4/5  '>
                        <div className='flex justify-center items-center p-4  '>

                            {/* First div */}
                            <div className='p-3 m-3 w-[50%] mt-3 '>
                                <div className='text-[#FBA943] text-5xl font-bold uppercase m-5 tracking-wide  '>Donor<br />Circle</div>
                                <div className='m-5 tracking-wide '>
                                    Accidents, Surgeries, Cancer treatments,
                                    All need blood. Every single day.
                                    Be someone’s miracle.<br/> <span className='text-[#FBA943] text-2xl font-bold opacity-0 animate-fadeIn mt-5' >Join DonorCircle.</span>
                                </div>
                                <Button name={"SignUp"} className={" ml-5 bg-[#FBA943] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50 "}
                                    onClick={() => {
                                        navigate("/signup")
                                    }}
                                />
                            </div>

                                {/* second div */}
                            <div className='p-3 m-3 w-[70%] grid place-items-center  '>
                                <Image img_url={img} className="w-auto " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage