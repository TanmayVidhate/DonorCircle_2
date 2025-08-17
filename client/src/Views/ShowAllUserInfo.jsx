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
            const records = await axios.get(`http://localhost:5001/Users/user/${email}`)
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
            <div className='flex flex-col w-screen min-h-screen  bg-[#ffd6a5] '>
                <Navbar />
                <div className='flex-1 grid place-items-center '>
                    <div className='flex justify-center items-center w-4/5 h-4/6 border rounded-lg bg-[#FFFFFF]'>
                        {/* content */}
                        <div className='border-2  rounded-lg p-2 '>
                            <div className='flex w-full justify-around items-center m-2'>
                                {/* first div */}
                                <div>{name}</div>

                                {/* second div */}
                                <div>{username}</div>
                            </div>

                            <div className='flex w-full justify-around items-center m-2'>
                                {/* first div */}
                                <div>{userEmail}</div>
                                {/* second div */}
                                <div>{address}</div>
                            </div>

                            <div className='flex w-full justify-around items-center m-2'>
                                {/* first div */}
                                <div>{age}</div>
                                {/* second div */}
                                <div>{blood_group}</div>
                            </div>

                            <div className='flex w-full justify-around items-center m-2'>
                                {/* first div */}
                                <div>{gender}</div>
                                {/* second div */}
                                <div>{mobile_no}</div>
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