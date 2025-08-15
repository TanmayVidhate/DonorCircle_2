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

    return (
        <>
            <div className=' w-5/6 m-auto border-2 rounded-md  bg-[#FFFFFF] max-h-min p-3 my-5 shadow-md relative  '>

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
                    <div className='rounded-full border-2  w-20 h-20'  >
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
                        {/* <img src='' alt="profile_image"/> */}
                    </div>

                    {/* second div */}
                    <p className=''>{name}</p>
                </div>

                <div className='text-center leading-6  mt-5'>
                    {/* first div */}
                    <p className=''>{address}</p>

                    {/* second div */}
                    <p className=''>{mobile_no}</p>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    {/* first div */}
                    <p className=''>{age}</p>

                    {/* second div */}
                    <p className=''>{blood_group}</p>
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