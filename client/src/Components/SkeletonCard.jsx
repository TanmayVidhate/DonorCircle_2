import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <>
      <div className="text-center w-5/6  rounded-xl hover:shadow-2xl hover:scale-105  transition-all duration-300 cursor-pointer bg-[#FFFFFF] max-h-min p-3 my-5 shadow-md relative sm:w-4/6 sm:my-2 md:w-2/5 md:justify-evenly md:m-5  ">
        <div className="flex justify-between  items-center">
          {/* first div */}
          <div className="w-20 h-20 relative  rounded-full bg-orange-200 text-orange-700 font-bold text-lg">
            <div className="absolute -top-1 ">
              <Skeleton circle className="absolute " width={80} height={80} />
            </div>
          </div>

          {/* second div */}
          <p className="text-lg font-bold text-gray-900 ">
            <Skeleton width={100} height={20} />
          </p>
        </div>

        <div className="text-center leading-6  mt-5">
          {/* first div */}
          <p className="font-medium text-green-600 mt-1">
            <Skeleton width={100} height={20}/>
          </p>

          {/* second div */}
          <p className=" block  text-yellow-900 font-semibold px-4 py-2 ">
            <Skeleton width={120} height={20}/>
          </p>
        </div>

        <div className="flex justify-between items-center mt-5">
          {/* first div */}
          <p className="text-purple-500">
            <Skeleton width={25} height={20} />
          </p>

          {/* second div */}
          <p className="text-purple-500">
            <Skeleton width={25} height={20} />
          </p>
        </div>

        <div className="flex justify-around">
          {/* second div */}
          <p className="p-2 text-red-600 animate-bounce">
            
          </p>
        </div>
      </div>
    </>
  );
}

export default SkeletonCard;
