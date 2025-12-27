import React from "react";
import toast, { Toaster } from "react-hot-toast";
import img from "../assets/longin_image/forgotten-password.jpg";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { DevTool } from "@hookform/devtools";

//Lucid Icon Import
import { Mail } from "lucide-react";

//Compoents Import
import Label from "../Components/Label";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import Image from "../Components/Image";
import LinkTo from "../Components/LinkTo";

// import { Navigate } from 'react-router';

//Translation
import { useTranslation } from "react-i18next";
import { use } from "react";
import { useState } from "react";

function ForgotPassword() {
  const { t, i18n } = useTranslation();

  const [forgotLink,setForgotLink] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email_field: "",
      pass_field: "",
    },
  });

  // watches live changes
  const input_email = watch("email_field");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/Users/forgot-password`,
        {
          email: input_email,
        }
      );

      setForgotLink(response?.data?.data);
      console.log(response?.data?.data)
      toast.success(response?.data?.message);

    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message)
    }
  };
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen bg-[#ffd6a5] ">
        <div className="flex-1 grid place-items-center ">
          <div className="border rounded-lg bg-white w-5/6 my-4 p-4 lg:flex lg:justify-center lg:items-center lg:w-3/5 ">
            {/* first div    */}
            <div className="">
              <form className="lg:w-96 h-[500px]">
                <p className="text-2xl font-semibold ml-2 tracking-wider sm:text-3xl md:text-4xl lg:text-2xl ">
                  {t(`${"forgot"}`)}
                </p>

                <div className="mt-24">
                  <div className="flex flex-col p-1 relative  ">
                    <Label title={t(`${"email"}`)} />
                    <InputField
                      type="email"
                      name="email_field"
                      placeholder="user@example.com"
                      {...register("email_field", {
                        required: t(`${"email_req"}`),
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: t(`${"enter_a_valid_email"}`),
                        },
                      })}
                      icon={<Mail />}
                    />
                    {errors?.email_field && (
                      <span className="text-red-500 text-sm w-full absolute -bottom-5 sm:text-base md:text-lg lg:text-sm">
                        {errors?.email_field?.message}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center items-center p-1 mt-12  ">
                    {Object.entries(errors).length > 0 ? (
                      <Button
                        name={t(`${"new_password"}`)}
                        disabled={true}
                        hover={true}
                        // onClick={handleForgotPassword }
                        className="!px-6 !py-2 !rounded-lg !w-full"
                      />
                    ) : (
                      <Button
                        name={t(`${"new_password"}`)}
                        disabled={false}
                        hover={true}
                        onClick={handleForgotPassword}
                        className="!px-6 !py-2 !rounded-lg !w-full"
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* second div */}
            <div className="   flex justify-center items-center ">
              <Image
                img_url={img}
                className="object-scale-down h-4/6 lg:!object-contain lg:!h-1/3 "
              />
            </div>
          </div>
        </div>
        <Toaster/>
      </div>
    </>
  );
}

export default ForgotPassword;
