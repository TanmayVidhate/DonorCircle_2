import React from 'react'

// import Component
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import ContactUSCard from '../Components/ContactUSCard'

//Import lucid 
import { Phone, Mail, MessageSquare } from 'lucide-react';


function ContactUs() {
    return (
        <div className='flex flex-col w-screen min-h-screen bg-[#ffd6a5] xl:h-screen'>
            <Navbar />
            <div className='flex-1 grid place-items-center'>
                <div className='flex justify-center items-center rounded-lg bg-[#FFFFFF] border border-red-600 mt-24 mx-10  sm:min-h-max  sm:w-3/4 sm:px-5  lg:mt-10 lg:w-4/5  2xl:w-3/5  '>
                    <div className='w-full h-full p-4 '>
                        <div className=''>
                            <p className='text-3xl font-bold '>Get in Touch</p>
                        </div>
                        <div className='sm:mt-2'>
                            <p className='font-light'>Need help? Have questions? We're here to support you 24/7. Reach out to us anytime - every inquiry matters.</p>
                        </div>

                        <div className='flex my-2 flex-col w-full h-3/5 items-center lg:flex-row lg:justify-center  '>
                            <ContactUSCard className="bg-cyan-300" Icon={Phone} title="Phone Support" info="Speak directly with our support team." mobile="+91 1234567890" action="24/7 Available" btntext="Call Now" btnbgcolor="bg-cyan-300" />
                            <ContactUSCard className="bg-red-300" Icon={Mail} title="Email Support" info="Send us detailed queries." mobile="support@blooddonor.in" action="Response in 2 hours" btntext="Send Email" btnbgcolor="bg-red-300"/>
                            <ContactUSCard className="bg-green-300" Icon={MessageSquare} title="WhatsApp" info="Quick support via WhatsApp." mobile="+91 9970714597" action="Business hours" btntext="Message" btnbgcolor="bg-green-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs