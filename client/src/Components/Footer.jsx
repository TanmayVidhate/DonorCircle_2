import React from "react";
import LinkTo from "./LinkTo";

function Footer() {
  return (
    <>
      <footer className="bg-[#243447] w-full py-10">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 px-8 md:flex-row md:justify-between">
          {/* About */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold text-red-500">DonorCircle.in</h2>
            <p className="mt-2 font-semibold text-white">
              Connecting donors and recipients to save lives — every match
              brings hope and healing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold text-red-500 ">
              Quick Links
            </h2>
            <div className="flex flex-col items-start mt-2 gap-0-1">
              <LinkTo
                PageName="About us"
                url="/aboutus"
                className="text-white capitalize"
              />
              <LinkTo
                PageName="Home"
                url="/"
                className="text-white capitalize"
              />
              <LinkTo
                PageName="Login"
                url="/signin"
                className="text-white capitalize"
              />
            </div>
          </div>

          {/* Blood Groups */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold text-red-500 ">Blood Groups</h2>
            <div className="mt-2 space-y-1 text-white ">
              <div>A+</div>
              <div>B+</div>
              <div>O+</div>
              <div>AB+</div>
            </div>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold text-red-500">Support</h2>
            <p className="mt-2 text-white">Coming Soon</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 text-base text-center text-white">
          © 2025 DonorCircle.in. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
