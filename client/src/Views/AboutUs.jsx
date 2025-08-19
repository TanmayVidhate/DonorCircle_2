import React from 'react'

// import Component
import Navbar from '../Components/Navbar'

function AboutUs() {
    return (
        <div className='flex flex-col w-screen min-h-screen bg-[#ffd6a5]  xl:h-screen  '>
            <Navbar />
            <div className='flex-1 grid place-items-center '>
                <div className='border rounded-lg m-5 mt-24 bg-[#FFFFFF] w-5/6   sm:w-3/4 sm:px-5 lg:mt-10 lg:w-4/5 2xl:w-3/5  '>
                    <div>Welcome to DonorCircle, a platform created to connect blood donors with those in need. We believe that a single donation can save multiple lives, and our mission is to make the process of finding and contacting donors simple, fast, and reliable.</div>
                    <div>At DonorCircle, donors can easily register their details, and people in need can directly reach out to them without any middleman. We aim to build a community of responsible donors and create a network where help is always just a click away.</div>
                    <div>Together, we can make a difference and give the gift of life.</div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs