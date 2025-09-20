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
                <div className='flex justify-center items-center border rounded-lg m-5 mt-24 bg-[#FFFFFF] w-5/6 h-4/6 sm:w-3/4 sm:px-5 lg:mt-10 lg:w-4/5 2xl:w-3/5  '>
                    <div className=' h-full p-4 mx-5  '>
                        <div className=' my-2'>
                            <p className='text-3xl font-bold'>Get in Touch</p>
                        </div>
                        <div className=''>
                            <p className='font-light'>Need help? Have questions? We're here to support you 24/7. Reach out to us anytime - every inquiry matters.</p>
                        </div>

                        <div className='flex  my-2  h-max'>
                            <ContactUSCard className="bg-slate-500" Icon={Phone} title="Phone Support" info="Speak directly with our support team." mobile="+91 1234567890" action="24/7 Available" btntext="Call Now" />
                            <ContactUSCard className="bg-slate-500" Icon={Mail} title="Email Support" info="Send us detailed queries." mobile="support@blooddonor.in" action="Response in 2 hours" btntext="Send Email" />
                            <ContactUSCard className="bg-slate-500" Icon={MessageSquare} title="WhatsApp" info="Quick support via WhatsApp." mobile="+91 9970714597" action="Business hours" btntext="Message" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs