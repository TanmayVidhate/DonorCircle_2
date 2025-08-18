import React, { useState } from 'react'
import UploadFile from './UploadFile';


//Components Import
import LinkTo from './LinkTo';

//Lucid icon Import
import { EllipsisVertical, UserPlus, UserRound } from 'lucide-react';
import axios from 'axios';

function Cards({ name, email, mobile_no, age, blood_group, address, profileimg, message }) {
    // console.log("e==",email)

    const [open, setOpen] = useState(false);

    const secondWord = name?.split(" ")[1]
    //    console.log("sss=",secondWord[0])

    return (
        <>
            <div className='text-center w-5/6  rounded-xl 
     hover:shadow-2xl hover:scale-105 hover:bg-orange-50 
     transition-all duration-300 cursor-pointer  bg-[#FFFFFF] max-h-min p-3 my-5 shadow-md relative sm:w-4/6 sm:my-2 md:w-2/5 md:justify-evenly md:m-5  '>

                <div className='flex justify-end  '>
                    {/* First div */}
                    <div>
                        <EllipsisVertical className='' size={20}
                            onClick={(e) => {
                                setOpen(() => { setOpen(!open) })
                            }}
                        />
                    </div>
                    {
                        open && (
                            <div className='bg-white w-50 shadow-xl h-auto p-3 absolute top-8 -right-3 z-10'>
                                <ul className="" onClick={() => { setOpen(() => { false }) }}>
                                    <div className='flex justify-between items-center rounded-sm hover:bg-blue-100 p-1'>
                                        <UserPlus />
                                        <LinkTo PageName="Add User info" url="/adduserprofile" className='!mr-0 !text-black !text-center  !capitalize !text-sm  p-1 cursor-pointer   ' />
                                    </div>
                                    <div className='flex justify-between items-center rounded-sm hover:bg-blue-100 p-1'>
                                        <UserRound />
                                        <LinkTo PageName="view details" url={`/showuserinfo/${email}`} className='!mr-0 !text-black !text-right !capitalize !text-sm  p-1 cursor-pointer rounded-sm hover:bg-blue-100' />
                                    </div>
                                </ul>

                            </div>
                        )
                    }
                </div>

                <div className='flex justify-between  items-center'>
                    {/* first div */}
                    <div className='w-20 h-20 flex items-center justify-center rounded-full bg-orange-200 text-orange-700 font-bold text-lg'  >
                        {/* <UploadFile
                            type="file"
                            name="avatar"

                            onChange={async (e) => {
                                const selectedFile = e.target.files[0];
                                console.log("Selected File:", selectedFile);

                                SetUserProfile({
                                    ...userprofile,
                                    userprofile: selectedFile,

                                });
                                await UploadImg();
                            }}

                        /> */}
                        {`${name[0]?.toUpperCase()} ${secondWord?.[0] ? secondWord?.[0].toUpperCase() : " "}`}
                        {/* <img src='' alt="profile_image"/> */}
                    </div>

                    {/* second div */}
                    <p className='text-lg font-bold text-gray-900'>{name}</p>
                </div>

                <div className='text-center leading-6  mt-5'>
                    {/* first div */}
                    <p className='font-medium text-green-600 mt-1'>{address}</p>

                    {/* second div */}
                    <p className=' block  text-yellow-900 font-semibold px-4 py-2 '>{mobile_no}</p>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    {/* first div */}
                    <p className='text-purple-500'>{age}</p>

                    {/* second div */}
                    {
                        blood_group ? <p className='inline-block px-3 py-1 bg-red-100 text-red-600 font-bold rounded-full shadow'>{blood_group}</p> : " "
                    }

                </div>

                <div className='flex justify-around'>

                    {/* second div */}
                    <p className='p-2 text-red-600 animate-bounce'>{message}</p>
                </div>

            </div>
        </>
    )
}

export default Cards;