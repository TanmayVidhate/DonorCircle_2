import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import img from '../assets/longin_image/singin.png'

import axios from 'axios';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router'


import { DevTool } from '@hookform/devtools'

//Lucid Icon Import
import { Mail, LockKeyhole } from 'lucide-react';

//Compoents Import
import Label from '../Components/Label'
import InputField from '../Components/InputField'
import Button from '../Components/Button'
import Image from '../Components/Image';
import LinkTo from '../Components/LinkTo';

// import { Navigate } from 'react-router';


function Signin() {

    const navigate = useNavigate();

    //react-hook-form
    // const form = useForm()
    const { register, handleSubmit, formState: { errors }, watch, control } = useForm({
        mode: "onChange",
        defaultValues: {
            email_field: "",
            pass_field: ""
        }
    });


    // watches live changes
    const input_email = watch("email_field");
    const input_password = watch("pass_field");

    // console.log("y=",input_email);
    // console.log("u=",input_password);


    // const [formdata, setFormdata] = useState({
    //     email: "",
    //     password: ""
    // })

    const [isSignIn, setIsSignIn] = useState(false);

    // console.log("after usestate isSignIn==:::::", isSignIn)

    const isuserisValid = async (e) => {
        e.preventDefault();

        // alert("bnt clciked...")

        try {
            const response = await axios.post(`http://localhost:5001/Users/signin`, {
                email: input_email,
                password: input_password
            })

            // console.log(response?.data);

            setIsSignIn(response?.data?.success);

            // console.log("isSignIn==:::::", isSignIn)

            toast.success(response?.data?.message);

            reset();
        }

        catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message)
        }
    }

    const onSubmit = (data) => {
        console.log("Form Submitted...", data);
    }


    useEffect(() => {
        if (isSignIn) {
            navigate('/showalluers');
        }
    }, [isSignIn]);

    return (
        <>
            <div className='flex flex-col w-screen min-h-screen bg-[#ffd6a5] '>

                <div className='flex-1 grid place-items-center mt-5'>
                    <div className='border rounded-lg bg-white w-5/6  p-4 lg:flex lg:justify-center lg:items-center lg:w-3/5 '>

                        {/* first div    */}
                        <div className=' '>
                            <form className='lg:w-96 h-[500px] ' onSubmit={handleSubmit(onSubmit)} >
                                <p className='text-2xl font-semibold ml-2 tracking-wider sm:text-3xl md:text-4xl lg:text-2xl '>Sign In</p>

                                <div className='flex flex-col p-1 relative '>
                                    <Label title="Email" />
                                    <InputField
                                        type="email"
                                        name="email_field"
                                        placeholder="user@example.com"
                                        {...register("email_field", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                                                message: "Enter a valid email address",
                                            },
                                        })}

                                        icon={<Mail />}
                                    />
                                    {
                                        errors?.email_field && <span className='text-red-500 text-sm w-full absolute -bottom-5 sm:text-base md:text-lg lg:text-sm'>{errors?.email_field?.message}</span>
                                    }
                                </div>

                                <div className='flex flex-col p-1 relative mt-9 sm:mt-4 '>
                                    <Label title="Password" />
                                    <InputField
                                        type="password"

                                        name="pass_field"
                                        {...register("pass_field", {
                                            required: "Password is required",

                                            pattern: {
                                                value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[0-9!@#$%^&*(),.?":{}|<>]{4,6}$/,
                                                message: "Password must be 4–6 characters, digits and at least one special character",
                                            },
                                        })}
                                        icon={<LockKeyhole />}
                                    />
                                    {
                                        errors?.pass_field && <span className='text-red-500 text-sm w-full absolute -bottom-16 sm:text-base sm:-bottom-11 md:text-lg md:-bottom-12 lg:-bottom-14 lg:text-sm '>{errors?.pass_field?.message}</span>
                                    }
                                </div>

                                <div className='flex justify-center items-center p-1 mt-16 '>
                                    <Button name="Signin"
                                        onClick={isuserisValid}
                                        className="!px-6 !py-2 !rounded-lg !w-full"
                                    />
                                </div>

                                <div className='p-1 mt-2'>
                                    <div className='mb-2'>
                                        <LinkTo url={"#"} className="capitalize !text-base !text-blue-800  w-full md:!text-lg  " >Forgot Password </LinkTo>
                                    </div>

                                    <div>
                                        <LinkTo url={"/signup"} className="capitalize font-normal !text-black w-full sm:text-lg md:text-xl lg:text-base " >Don't  have an account ? <br /> <span className='text-blue-800 hover:text-blue-600 '>Sign up </span></LinkTo>
                                    </div>

                                </div>
                            </form>
                            <DevTool control={control} />
                        </div>


                        {/* second div */}

                        <div className='   flex justify-center items-center '>
                            <Image img_url={img} className="object-scale-down h-4/6 lg:!object-contain lg:!h-1/3 " />
                        </div>
                    </div>
                </div>

                <Toaster />
            </div>
        </>
    )
}

export default Signin