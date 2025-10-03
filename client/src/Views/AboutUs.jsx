import React from 'react'

//import image
import img from "../assets/User_profile_update_img/about.png"



// import Component
import Navbar from '../Components/Navbar'
import Image from '../Components/Image'
import Footer from '../Components/Footer'

function AboutUs() {
    return (
        <div className='flex flex-col w-screen min-h-screen bg-[#ffd6a5]  xl:h-screen  '>
            <Navbar />
            <div className='flex-1 grid place-items-center '>
                <div className='border  rounded-lg m-5 mt-24 bg-[#FFFFFF]  min-h-max w-5/6  p-5  sm:w-3/4 sm:px-5  lg:py-10  lg:mt-36 lg:mb-24 lg:w-4/5 lg:h-4/5 2xl:w-3/5 '>
                    <p className='text-2xl font-semibold tracking-wider my-5'>About Us</p>
                    <div className='lg:flex lg:justify-center lg:items-center my-5 '>
                        <div className="text-gray-700 leading-relaxed lg:w-5/6">Welcome to <span className='font-semibold text-red-500'>DonorCircle</span> a platform created to connect blood donors with those in need. We believe that a single donation can save multiple lives, and our mission is to make the
                            process of finding and contacting donors simple, fast, and reliable.
                            At DonorCircle, donors can easily register their details, and people in need can directly
                            reach out to them without any middleman. We aim to build a community of responsible donors and create a network where help is always just a click away.
                            <div className="text-center text-red-600 font-semibold mt-2 ">Together, we can make a difference and give the gift of life.</div>
                        </div>
                        <div className='  lg:h-4/5 lg:-my-16  '>
                            <Image img_url={img} className="!w-full !object-scale-down sm:!object-scale-down md:!object-scale-down lg:!object-contain h-4/5 " />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs