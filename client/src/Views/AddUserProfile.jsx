import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import imgurl from "../assets/User_profile_update_img/user_edit_pro.png";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

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

//Translation
import { useTranslation } from "react-i18next";

function AddUserProfile() {
  const { t, i18n } = useTranslation();

  const [user, setUser] = useState({});

  const { email } = useParams();

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
  const emaill = watch("email_field");
  const age = watch("age_field");
  const mobile = watch("mobile_no_field");
  const gender = watch("gender_field");
  const blood_gup = watch("blood_gup_field");
  const address = watch("address_field");
  const userpro = watch("user_profile")?.[0];

  // console.log("e==", email)
  // console.log("age==", age)
  // console.log("mobile==",mobile)
  // console.log("gender==", gender)
  //   console.log("blood_gup==", blood_gup);
  // console.log("address==", address)
  // console.log("userpro==", userpro)

  const navigate = useNavigate();

  const editprofile = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5001/Users/addprofileinfo",
        {
          emaill: emaill,
          age: age,
          mobile_no: mobile,
          gender: gender,
          blood_group: blood_gup,
          address: address,
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

  const getUserAllInfoByemail = async (email) => {
    toast.loading("Data is Loading ⌛...");
    try {
      toast.dismiss();
      const records = await axios.get(
        `${import.meta.env.VITE_API_URL}/Users/user/${email}`
      );
      toast.dismiss();
      toast.success("Data is Fetch 👍");
      // console.log("r==", records.data.data)

      setUser(() => records.data.data);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUserAllInfoByemail(email);
  }, []);

  useEffect(() => {
    if (user?.email) {
      reset({
        email_field: user.email,
      });
    }
  }, [user, reset]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-[#ffd6a5] ">
        <Navbar />
        <div className="flex flex-col items-center  border rounded-lg mt-20 m-5 bg-white w-5/6  p-5 lg:flex-row lg:justify-center lg:items-center lg:w-3/5">
          {/* second div */}
          <div className="order-2 w-full  lg:w-2/5 lg:relative ">
            <p className="invisible text-2xl font-semibold ml-2 tracking-wider lg:order-1 lg:visible lg:absolute lg:-top-14 lg:-left-4 ">
              {t(`${"update_profile"}`)}
            </p>
            <Image img_url={imgurl} className="w-full  !object-scale-down  " />
          </div>
          {/* first div */}
          <div className="order-1 w-full overflow-y-auto overflow-x-hidden scrollbar-hide  lg:w-96 lg:order-2">
            <p className=" text-2xl font-semibold ml-2 tracking-wider sm:text-3xl md:text-3xl lg:invisible lg:text-2xl  ">
              {t(`${"update_profile"}`)}
            </p>
            <form
              className="flex flex-col w-full h-[450px] "
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit(editprofile)}
            >
              <div className="p-1 mt-3 relative ">
                <Label title={t(`${"email"}`)} />
                <InputField
                  disabled={true}
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  {...register("email_field", {
                    required: t(`${"email_req"}`),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: t(`${"enter_a_valid_email"}`),
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
                <Label title={t(`${"age"}`)} />
                <InputField
                  type="number"
                  placeholder="18"
                  {...register("age_field", {
                    required: t(`${"age_is"}`),
                    min: { value: 18, message: t(`${"you_must"}`) },
                    max: { value: 100, message: t(`${"age_cannot"}`) },
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
                <Label title={t(`${"mobile_no"}`)} />
                <InputField
                  type="text"
                  placeholder="7056832147"
                  {...register("mobile_no_field", {
                    required: t(`${"mobile_req"}`),
                    pattern: {
                      value: /^[6-9]\d{9}$/, // For Indian numbers: starts with 6-9, total 10 digits
                      message: t(`${"enter_a_valid_10"}`),
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
                <Label title={t(`${"gender"}`)} />

                <div className="ml-2">
                  <div className=" p-1  flex justify-start gap-2 ">
                    <input
                      type="radio"
                      value="Male"
                      {...register("gender_field", {
                        required: "Gender is Required",
                      })}
                    />
                    {t(`${"male"}`)}
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender_field", {
                        required: "Gender is Required",
                      })}
                    />
                    {t(`${"female"}`)}
                    {errors?.gender_field && (
                      <span className="text-red-500 text-x w-5/6 absolute left-2 -bottom-5 ">
                        {errors?.gender_field?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className=" p-1 mt-3 relative">
                <Label title={t(`${"blood_group"}`)} />
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
                      {t(`${"select_blood"}`)}
                    </option>
                    <option value="A+" className="text-black">
                      A+
                    </option>
                    <option value="A-" className="text-black">
                      A-
                    </option>
                    <option value="B+" className="text-black">
                      B+
                    </option>
                    <option value="B+" className="text-black">
                      B-
                    </option>
                    <option value="AB+" className="text-black">
                      AB+
                    </option>
                    <option value="AB-" className="text-black">
                      AB-
                    </option>
                    <option value="O+" className="text-black">
                      O+
                    </option>
                    <option value="O-" className="text-black">
                      O-
                    </option>
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
                <Label title={t(`${"address"}`)} />
                <InputField
                  type="text"
                  placeholder="M.G Road"
                  {...register("address_field", {
                    required: t(`${"address_req"}`),
                    minLength: {
                      value: 4,
                      message: t(`${"address_must_be"}`),
                    },
                    maxLength: {
                      value: 100,
                      message: t(`${"address_cannot_excees"}`),
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9\s,.'-]{5,}$/,
                      message: t(`${"address"}`),
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
                    name={t(`${"update_profile"}`)}
                    disabled={true}
                    type="submit"
                    className="!px-1 !py-2 !rounded-lg !w-full"
                  />
                ) : (
                  <Button
                    name={t(`${"update_profile"}`)}
                    disabled={false}
                    type="button"
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
