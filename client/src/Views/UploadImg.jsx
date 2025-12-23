import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

//Components imports
import Label from "../Components/Label";
import UploadFile from "../Components/UploadFile";
import InputField from "../Components/InputField";
import Button from "../Components/Button";

//view imports

//lucid import
import { Mail } from "lucide-react";

//Translation
import { useTranslation } from "react-i18next";


function UploadImg() {
  const { t, i18n } = useTranslation();
  
  const navigate = useNavigate();

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
      user_profile: "",
    },
  });

  // watches live changes
  const email = watch("email_field");
  const userpro = watch("user_profile");

  const upload = async () => {
    try {
      const data = new FormData();
      if (userpro && userpro?.length > 0) {
        data.append("avatar", userpro?.[0]); // 'avatar' must match multer field name
      }
      data.append("email", email);

      console.log(data.get("email"));
      console.log(data.get("avatar"));

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

      navigate("/showalluers");
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-[#ffd6a5] ">
        <div className="flex flex-col items-center  border rounded-lg mt-20 m-5 bg-white w-5/6  p-5 lg:flex-row lg:justify-center lg:items-center lg:w-3/5">
          {/* first  div */}
          <div className="order-2 w-full  lg:w-2/5 lg:relative ">
            <form
              className="flex flex-col w-full h-[450px] "
              encType="multipart/form-data"
              // method="post"
              onSubmit={handleSubmit(upload)}
            >
              <div className="flex flex-col p-1 relative ">
                <Label title={t(`${"upload_image"}`)} />
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

              <div className="p-1 mt-3 mb-8  relative ">
                <Label title={t(`${"email"}`)} />
                <InputField
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

              <Button
                name={t(`${"update_photo"}`)}
                disabled={false}
                type="button"
                className="!px-1 !py-2 !rounded-lg !w-full"
              />
            </form>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default UploadImg;
