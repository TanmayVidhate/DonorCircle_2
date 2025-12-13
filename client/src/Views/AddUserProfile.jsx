import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import imgurl from "../assets/User_profile_update_img/user_edit_pro.png";
import { useNavigate } from "react-router";

//Components Import
import Label from "../Components/Label";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import Image from "../Components/Image";
import UploadFile from "../Components/UploadFile";

//lucid icons
import {
  MapPinHouse,
  Phone,
  UsersRound,
  Mail,
  ArrowUp10,
  HeartHandshake,
} from "lucide-react";

function AddUserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email_field: "",
      mobile_no_field: "",
      gender_field: "",
      blood_gup_field: "",
      address_field: "",
      user_profile: "",
    },
  });

  // watches live changes
  const email = watch("email_field");
  const age = watch("age_field");
  const mobile = watch("mobile_no_field");
  const gender = watch("gender_field");
  const blood_gup = watch("blood_gup_field");
  const address = watch("address_field");
  const userpro = watch("user_profile");

  // console.log("e==", email)
  // console.log("age==", age)
  // console.log("mobile==",mobile)
  // console.log("gender==", gender)
  //   console.log("blood_gup==", blood_gup);
  // console.log("address==", address)
  // console.log("userpro==", userpro)

  const upload = async (formData) => {
    try {
      const data = new FormData();
      if (formData.user_profile && formData.user_profile.length > 0) {
        data.append("avatar", formData.user_profile[0]); // 'avatar' must match multer field name
      }
      data.append("email", formData.email_field);

      const res = await axios.post(
        "http://localhost:5001/Users/uploadimage",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("res=", res);
      toast.success("Profile image uploaded successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed");
    }
  };

  const navigate = useNavigate();

  const editprofile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5001/Users/addprofileinfo",
        {
          email: email,
          age: age,
          mobile_no: mobile,
          gender: gender,
          blood_group: blood_gup,
          address: address,
          userpro: userpro,
        }
      );

      console.log(response?.data);

      toast.success(response?.data?.message);

      reset();

      navigate("/showalluers");
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-[#ffd6a5] ">
        <Navbar />
        <div className="flex flex-col items-center  border rounded-lg mt-20 m-5 bg-white w-5/6  p-5 lg:flex-row lg:justify-center lg:items-center lg:w-3/5">
          {/* second div */}
          <div className="order-2 w-full  lg:w-2/5 lg:relative ">
            <p className="invisible text-2xl font-semibold ml-2 tracking-wider lg:order-1 lg:visible lg:absolute lg:-top-14 lg:-left-4 ">
              Update profile
            </p>
            <Image img_url={imgurl} className="w-full  !object-scale-down  " />
          </div>
          {/* first div */}
          <div className="order-1 w-full overflow-y-auto overflow-x-hidden scrollbar-hide  lg:w-96 lg:order-2">
            <p className=" text-2xl font-semibold ml-2 tracking-wider sm:text-3xl md:text-3xl lg:invisible lg:text-2xl  ">
              Update profile
            </p>
            <form
              className="flex flex-col w-full h-[450px] "
              encType="multipart/form-data"
              onSubmit={handleSubmit(upload)}
            >
              <div className="flex flex-col p-1 relative ">
                <Label title="Upload Image" />
                <UploadFile
                  type="file"
                  name="avatar"
                  {...register("user_profile", {
                    required: "Upload Photos",
                  })}
                />
                {errors?.user_profile && (
                  <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                    {errors?.user_profile?.message}
                  </span>
                )}
              </div>
              <div className="p-1 mt-3 relative ">
                <Label title="Email" />
                <InputField
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  {...register("email_field", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  icon={<Mail />}
                />
                {errors?.email_field && (
                  <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                    {errors?.email_field?.message}
                  </span>
                )}
              </div>

              <div className="p-1 mt-3 relative">
                <Label title="Age" />
                <InputField
                  type="number"
                  placeholder="18"
                  {...register("age_field", {
                    required: "Age is required",
                    min: { value: 18, message: "You must be at least 18" },
                    max: { value: 100, message: "Age cannot be more than 100" },
                  })}
                  icon={<ArrowUp10 />}
                />
                {errors?.age_field && (
                  <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                    {errors?.age_field?.message}
                  </span>
                )}
              </div>

              <div className="p-1 mt-3 relative">
                <Label title="Mobile No" />
                <InputField
                  type="text"
                  placeholder="7056832147"
                  {...register("mobile_no_field", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/, // For Indian numbers: starts with 6-9, total 10 digits
                      message: "Enter a valid 10-digit mobile number",
                    },
                  })}
                  icon={<Phone />}
                />
                {errors?.mobile_no_field && (
                  <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                    {errors?.mobile_no_field?.message}
                  </span>
                )}
              </div>

              <div className="p-1 mt-3 relative">
                <Label title="Gender" />

                <div className="ml-2">
                  <div className=" p-1  flex justify-start gap-2 ">
                    <input
                      type="radio"
                      value="Male"
                      {...register("gender_field", {
                        required: "Gender is Required",
                      })}
                    />
                    Male
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender_field", {
                        required: "Gender is Required",
                      })}
                    />
                    Female
                    {errors?.gender_field && (
                      <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                        {errors?.gender_field?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className=" p-1 mt-3 relative">
                <Label title="Blood Group" />
                <div className="relative  border-2  rounded-md ">
                  <select
                    {...register("blood_gup_field", {
                      required: true,
                    })}
                    className={`w-full p-2  overflow-y-auto 
                         ${blood_gup === "" ? "text-gray-400" : "text-black"}`}
                    defaultValue={"AB+"}
                  >
                    <option value="" disabled hidden>
                      Select Blood Group
                    </option>
                    <option value="A+" className="text-black">A+</option>
                    <option value="A-" className="text-black">A-</option>
                    <option value="B+" className="text-black">B+</option>
                    <option value="B+" className="text-black">B-</option>
                    <option value="AB+" className="text-black">AB+</option>
                    <option value="AB-" className="text-black">AB-</option>
                    <option value="O+" className="text-black">O+</option>
                    <option value="O-" className="text-black">O-</option>
                  </select>

                  {errors?.blood_gup_field && (
                    <span className="text-red-500 text-x  absolute left-2 -bottom-10 mt-9 ">
                      {errors?.blood_gup_field?.message}
                    </span>
                  )}
                </div>

                {/* <InputField
                                    type="text"
                                    placeholder="Enter blood group (A+, B-, O+, etc.)"
                                    {
                                    ...register("blood_gup_field", {
                                        required: "Blood Group is required",
                                        pattern: {
                                            value: /^(A|B|AB|O)[+-]$/,
                                            message: "Enter a valid blood group (A+, A-, B+, B-, AB+, AB-, O+, O-)"
                                        }
                                    })
                                    }
                                    icon={<HeartHandshake />} 
                                    /> */}

                {/* {
                                    errors?.blood_gup_field && <span className='text-red-500 text-x  absolute left-2 -bottom-10 mt-9 '>{errors?.blood_gup_field?.message}</span>
                                } */}
              </div>

              <div className=" p-1 relative mt-7">
                <Label title="Address" />
                <InputField
                  type="text"
                  placeholder="M.G Road"
                  {...register("address_field", {
                    required: "Address is required",
                    minLength: {
                      value: 4,
                      message: "Address must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 100,
                      message: "Address cannot exceed 100 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9\s,.'-]{5,}$/,
                      message: "Enter a valid address",
                    },
                  })}
                  icon={<MapPinHouse />}
                />
                {errors?.address_field && (
                  <span className="text-red-500 text-x absolute left-2 -bottom-5 ">
                    {errors?.address_field?.message}
                  </span>
                )}
              </div>

              <div className="p-1 mt-8">
                {Object.entries(errors).length > 0 ? (
                  <Button
                    name="Update Profile"
                    disabled={true}
                    type="submit"
                    onClick={editprofile}
                    className="!px-1 !py-2 !rounded-lg !w-full"
                  />
                ) : (
                  <Button
                    name="Update Profile"
                    disabled={false}
                    type="submit"
                    onClick={editprofile}
                    className="!px-1 !py-2 !rounded-lg !w-full"
                  />
                )}
              </div>
            </form>
            <DevTool control={control} />
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default AddUserProfile;
