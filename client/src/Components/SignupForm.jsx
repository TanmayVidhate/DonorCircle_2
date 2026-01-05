import imgurl from '../assets/longin_image/signup_rem_bg.png'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'

//lucid icons
import { User, Mail, BadgeCheck, Eye, EyeClosed } from 'lucide-react';


import axios from 'axios'
// import dotenv from 'dotenv'

//Components Import
import Label from './Label.jsx'
import InputField from './InputField.jsx'
import Image from './Image.jsx'
import Button from './Button.jsx'
import LinkTo from './LinkTo.jsx'
// import Navbar from './Navbar.jsx';

//Translation
import { useTranslation } from 'react-i18next';

function SignupForm() {

    const { t, i18n } = useTranslation();

    const [openeye, setOpeneye] = useState(false);

    //react-hook-form

    const { register, handleSubmit, formState: { errors }, control, watch, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            fullname: "",
            username: "",
            email: "",
            role:"",
            password: "",
            // confirm_pass: ""
        }
    });

    // watches live changes
    const fullname = watch("fullname");
    const username = watch("username_field");
    const email = watch("email_field");
    const role = watch("role_field");
    const password = watch("pass_field");

    // console.log("uuuu=",fullname)

    const AddFormData = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/Users/signup`, {
                name: fullname,
                username: username,
                email: email,
                password: password,
                role:role
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
                    <div className=' order-2  lg:order-1 lg:w-2/5 '>
                        <p className='invisible  text-2xl font-semibold ml-2 tracking-wider lg:visible lg:absolute lg:top-3 lg:left-16   '>{t(`${'sign_up'}`)}</p>
                        <Image img_url={imgurl} className=" !w-full !object-scale-down sm:!object-scale-down md:!object-scale-down lg:!object-contain h-4/6  " />
                    </div>

                    {/* Second Div */}
                    <div className='order-1 w-full  overflow-y-auto overflow-x-hidden scrollbar-hide lg:order-2 lg:h-full lg:w-96 '>
                        <p className='visible text-2xl font-semibold ml-2 tracking-wider sm:text-3xl md:text-4xl lg:invisible  '>{t(`${'sign_up'}`)}</p>
                        <form className=' flex flex-col items-center w-full h-[450px] '
                            onSubmit={handleSubmit(onSubmit)}
                        >

                            <div className='p-1 relative w-full '>
                                <Label title={t(`${"name"}`)} />
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
                                    errors?.fullname && <span className='text-red-500 text-sm w-full  absolute  -bottom-10 sm:-bottom-5 sm:text-base md:text-lg lg:text-sm '>{errors?.fullname?.message}</span>
                                }
                            </div>

                            <div className=' p-1 relative mt-8 w-full '>
                                <Label title={t(`${"user_name"}`)} />
                                <InputField
                                    type="text"
                                    placeholder="john_doe"
                                    name="username_field"

                                    {...register("username_field", {
                                        required: t(`${"user_req"}`),
                                        pattern: {
                                            value: /^[a-zA-Z0-9_-]{3,16}$/,
                                            message: t(`${'3-15_char'}`),
                                        },
                                    })}

                                    icon={<BadgeCheck />} />

                                {
                                    errors?.username_field && <span className='text-red-500 text-sm w-full  absolute  -bottom-10 sm:-bottom-5 sm:text-base md:text-lg lg:text-sm '>{errors?.username_field?.message}</span>
                                }
                            </div>

                            <div className=' p-1 relative mt-8 w-full '>
                                <Label title={t(`${"email"}`)} />
                                <InputField
                                    type="email"
                                    name="email_field"
                                    placeholder="user@example.com"
                                    {...register("email_field", {
                                        required: t(`${'email_req'}`),
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: t(`${"enter_a_valid_email"}`),
                                        },
                                    })}

                                    icon={<Mail />} />
                                {
                                    errors?.email_field && <span className='text-red-500 text-sm w-full  absolute  -bottom-5  sm:text-base md:text-lg lg:text-sm '>{errors?.email_field?.message}</span>
                                }
                            </div>

                            <div className=" p-1 relative mt-8 w-full ">
                                <Label title={t(`${"role"}`)} />

                                <div className="">
                                    <div className=" p-1  flex justify-start gap-2 ">
                                        <input
                                            type="radio"
                                            value="donor"
                                            {...register("role_field", {
                                                required: "Role is Required",
                                            })}
                                        />
                                        {t(`${"donor"}`)}
                                        <input
                                            type="radio"
                                            value="reciver"
                                            {...register("role_field", {
                                                required: "Role is Required",
                                            })}
                                        />
                                        {t(`${"reciver"}`)}
                                        {errors?.gender_field && (
                                            <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                                                {errors?.gender_field?.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className=' p-1  relative mt-5 w-full '>
                                <Label title={t(`${"password"}`)} />
                                <InputField
                                    type={openeye ? "text" : "password"}
                                    name="pass_field"
                                    {...register("pass_field", {
                                        required: t(`${"password_req"}`),

                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: t(`${"password_validation"}`),
                                        },
                                    })}

                                    icon={openeye ? <EyeClosed onClick={(e) => { setOpeneye(!openeye) }} className="cursor-pointer" /> : <Eye onClick={(e) => { setOpeneye(!openeye) }} className="cursor-pointer" />}
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
                                {
                                    (Object.entries(errors).length > 0) ? (<Button name={t(`${"create_acc"}`)}
                                        disabled={true}
                                        hover={true}
                                        onClick={AddFormData}
                                        // onClick={handleSubmit(onSubmit)}
                                        className="!px-5 !py-2 !rounded-lg !w-full"
                                    />)
                                        : (
                                            <Button name={t(`${"create_acc"}`)}
                                                disabled={false}
                                                hover={true}
                                                onClick={AddFormData}
                                                // onClick={handleSubmit(onSubmit)}
                                                className="!px-5 !py-2 !rounded-lg !w-full"
                                            />
                                        )
                                }
                            </div>

                            <div className='p-2 flex justify-center items-center sm:-mt-4 '>
                                <LinkTo url={"/signin"} className="capitalize font-normal !text-gray-700 text-center w-full sm:text-lg md:text-xl lg:text-base" >{t(`${'all_ready'}`)} <br /> <span className='text-blue-800 hover:text-blue-600  '>{t(`${'sign_in'}`)}</span></LinkTo>
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

export default SignupForm