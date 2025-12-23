import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//Translation
import { useTranslation } from "react-i18next";

function SkeletonShowAllUserInfo() {
    const { t, i18n } = useTranslation();
  return (
    <>
      <div className="flex-1 flex justify-center items-start p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-4xl bg-white  p-6 sm:p-8 md:p-10">
          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
             {t(`${"user_name"}`)}
          </h1>

          {/* Always 2 Columns – Even on tiny screens */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-10">
            {/* Label + Value */}
            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"full_name"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                <Skeleton width={100} height={20} />
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"user_name"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                <Skeleton width={100} height={20} />
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"address"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                <Skeleton width={100} height={20} />
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"email"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                <Skeleton width={150} height={20} />
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"age"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                <Skeleton width={100} height={20} />
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"blood_group"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-bold text-red-600">
                <Skeleton width={100} height={20} />
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"gender"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                <Skeleton width={100} height={20} />
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                {t(`${"mobile_no"}`)}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                <Skeleton width={100} height={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonShowAllUserInfo;
