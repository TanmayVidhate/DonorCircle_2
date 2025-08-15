import imgurl from '../assets/longin_image/signup_rem_bg.png'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'

//lucid icons
import { User, Mail, LockKeyhole, Key, BadgeCheck } from 'lucide-react';


import axios from 'axios'
// import dotenv from 'dotenv'

//Components Import
import Label from './Label'
import InputField from './InputField.jsx'
import Image from './Image.jsx'
import Button from './Button.jsx'
import LinkTo from './LinkTo.jsx'
// import Navbar from './Navbar.jsx';


function SingupForm() {

    //react-hook-form

    const { register, handleSubmit, formState: { errors }, control, watch, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            fullname: "",
            username: "",
            email: "",
            password: "",
            // confirm_pass: ""
        }
    });

    // watches live changes
    const fullname = watch("fullname");
    const username = watch("username_field");
    const email = watch("email_field");
    const password = watch("pass_field");

    // console.log("uuuu=",fullname)

    const AddFormData = async (e) => {
       
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.Express_APP_API_URL}/Users/signup`, {
                name: fullname,
                username: username,
                email: email,
                password: password,
                // confirm_pass: confirm_pass
            });
            console.log(response?.data)

            toast.success(response?.data?.message);
            reset();
            // toast.dismiss();
        }
        catch (error) {
            // toast.dismiss();
            toast.error(error?.response?.data?.message)
        }
    }

    const onSubmit = (data) => {
        console.log("Form Submitted...", data)
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center w-screen min-h-screen bg-[#ffd6a5]  '>
                {/* <Navbar /> */}
                <div className='flex flex-col items-center border rounded-lg my-5 w-5/6 p-5 bg-white lg:flex-row lg:justify-center lg:items-center lg:w-3/5 lg:relative'>

                    {/* First Div */}
                    <div className=' order-2  lg:order-1 lg:w-2/5  border-4'>
                        <p className='invisible  text-2xl font-semibold ml-2 tracking-wider lg:visible lg:absolute lg:top-3 lg:left-16   '>Sign Up</p>
                        <Image img_url={imgurl} className="  border-4 !w-full !object-scale-down sm:!object-scale-down md:!object-scale-down lg:!object-contain h-4/6  " />
                    </div>

                    {/* Second Div */}
                    <div className='order-1 w-full  overflow-y-auto overflow-x-hidden scrollbar-hide lg:order-2 lg:h-full lg:w-96 '>
                        <p className='visible text-2xl font-semibold ml-2 tracking-wider sm:text-3xl md:text-4xl lg:invisible  '>Sign Up</p>
                        <form className=' flex flex-col items-center w-full h-[450px] '
                            onSubmit={handleSubmit(onSubmit)}
                        >

                            <div className='p-1 relative w-full '>
                                <Label title="Name"  />
                                <InputField
                                    type="text"
                                    placeholder="John Doe"
                                    name="fullname"
                                    {...register("fullname", {
                                        required: "Name is required",
                                        pattern: {
                                            value: /^(?:[A-Z][a-z]*)(?:\s[A-Z][a-z]*)*$/,
                                            message: "Capitalize each word,letters/spaces only",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "Max 30 chars",
                                        },
                                    })}


                                    icon={<User />} />
                                {
                                    errors?.fullname && <span className='text-red-500 text-sm w-full  absolute  -bottom-5 sm:-bottom-5 sm:text-base md:text-lg lg:text-sm '>{errors?.fullname?.message}</span>
                                }
                            </div>

                            <div className=' p-1 relative mt-5 w-full '>
                                <Label title="Username" />
                                <InputField
                                    type="text"
                                    placeholder="john_doe"
                                    name="username_field"

                                    {...register("username_field", {
                                        required: "Username required",
                                        pattern: {
                                            value: /^[a-z0-9_]{3,16}$/,
                                            message: "3–15 chars, start with letter, letters/numbers/_ only",
                                        },
                                    })}

                                    icon={<BadgeCheck />} />

                                {
                                    errors?.username_field && <span className='text-red-500 text-sm w-full  absolute  -bottom-5 sm:-bottom-5 sm:text-base md:text-lg lg:text-sm '>{errors?.username_field?.message}</span>
                                }
                            </div>

                            <div className=' p-1 relative mt-5 w-full '>
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

                                    icon={<Mail />} />
                                {
                                    errors?.email_field && <span className='text-red-500 text-sm w-full  absolute  -bottom-5  sm:text-base md:text-lg lg:text-sm '>{errors?.email_field?.message}</span>
                                }
                            </div>

                            <div className=' p-1  relative mt-5 w-full '>
                                <Label title="Password" />
                                <InputField
                                    type="password"
                                    // value={formdata?.password}
                                    name="pass_field"
                                    {...register("pass_field", {
                                        required: "Password is required",

                                        pattern: {
                                            value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[0-9!@#$%^&*(),.?":{}|<>]{4,6}$/,
                                            message: "Password must be 4–6 characters, digits and at least one special character",
                                        },
                                    })}
                                    // onChange={(e) => {
                                    //     setFormdata({
                                    //         ...formdata,
                                    //         password: e.target.value
                                    //     })
                                    // }}
                                    icon={<LockKeyhole />}
                                />
                                {
                                    errors?.pass_field && <span className='text-red-500 text-sm w-full absolute  -bottom-10 sm:text-base md:text-lg md:-bottom-12 lg:text-sm lg:-bottom-10'>{errors?.pass_field?.message}</span>
                                }
                            </div>

                            {/* <div className=' p-1  mt-5 relative w-full'>
                                <Label title="Confirm Password" />
                                <InputField
                                    type="password"
                                    name="conf_pass_field"
                                    // value={formdata?.confirm_pass}
                                    {...register("conf_pass_field", {
                                        required: "Confirm Password is required",
                                                            //need to add new validations
                                        // pattern: {
                                        //     value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[0-9!@#$%^&*(),.?":{}|<>]{4,6}$/,
                                        //     message: "Password must be 4–6 characters, digits and at least one special character",
                                        // },
                                    })}
                                    // onChange={(e) => {
                                    //     setFormdata({
                                    //         ...formdata,
                                    //         confirm_pass: e.target.value
                                    //     })
                                    // }}
                                    icon={<Key />}
                                />
                                {
                                    errors?.conf_pass_field && <span className='text-red-500 text-x w-full  absolute  -bottom-5 '>{errors?.conf_pass_field?.message}</span>
                                }
                            </div> */}

                            <div className='w-full p-1   mt-10 mb-5 sm:mt-11 '>
                                <Button name="Create Account"
                                    onClick={AddFormData}
                                    // onClick={handleSubmit(onSubmit)}
                                    className="!px-5 !py-2 !rounded-lg !w-full"
                                />
                            </div>

                            <div className='p-2 flex justify-center items-center sm:-mt-4 '>
                                <LinkTo url={"/signin"} className="capitalize font-normal !text-black text-center w-full sm:text-lg md:text-xl lg:text-base" >All ready have an account ? <br /> <span className='text-blue-800 hover:text-blue-600  '>Sign in</span></LinkTo>
                            </div>
                        </form>
                        <DevTool control={control} />
                    </div>
                </div>

                <Toaster />
            </div>
        </>
    )
}

export default SingupForm