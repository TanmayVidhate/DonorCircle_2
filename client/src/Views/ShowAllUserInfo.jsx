import React, { useEffect, useState } from 'react'

//Components Import
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";




function ShowAllUserInfo() {
    const [user, setUser] = useState({})

    let { email } = useParams();
    // console.log("ShowallUser=", email)

    const getUserAllInfoByemail = async (email) => {
        toast.loading("Data is Loading ⌛...");
        try {
            toast.dismiss();
            const records = await axios.get(`${import.meta.env.VITE_API_URL}/Users/user/${email}`)
            toast.dismiss();
            toast.success("Data is Fetch 👍");
            // console.log("r==", records.data.data)

            setUser(() => records.data.data)
        }
        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message)
        }

    }

    useEffect(() => {
        getUserAllInfoByemail(email)

    }, [])

    const { name,
        username,
        email: userEmail,
        other_info: [
            {
                address,
                age,
                blood_group,
                gender,
                mobile_no
            } = {}
        ] = []
    } = user || {};


    return (
        <>
            <div className='flex flex-col w-screen min-h-screen  bg-[#ffd6a5]  '>
                <Navbar />
                <div className='flex-1 grid place-items-center '>
                    <div className='flex justify-center items-center w-4/6 h-4/6 border rounded-lg bg-[#FFFFFF] '>
                        {/* card */}
                        <div className='bg-white  rounded-xl shadow-md p-5 text-center 
     hover:shadow-2xl hover:scale-105 hover:border 
     transition-all duration-300 cursor-pointer leading-9 hover:bg-orange-50 '>
                            <div className='w-full m-auto'>
                                {/* first div */}
                                <div className="text-xl font-bold text-gray-900  ">{name}</div>

                                {/* second div */}
                                <div>{username}</div>
                            </div>

                            <div className=' w-full m-auto'>
                                {/* first div */}
                                <div className="text-sm text-gray-600">{userEmail}</div>
                                {/* second div */}
                                <div>📍{address}</div>
                            </div>

                            <div className=' w-full m-auto'>
                                {/* first div */}
                                <div>{age} years</div>
                                {/* second div */}
                                <div className='inline-block px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full'>🩸{blood_group}</div>
                            </div>

                            <div className=' w-full  m-auto'>
                                {/* first div */}
                                <div>{gender}</div>
                                {/* second div */}
                                <div className=" text-yellow-900 font-semibold  py-1  ">📞{mobile_no}</div>
                            </div>

                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    )
}

export default ShowAllUserInfo