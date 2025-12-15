import React from "react";
import LinkTo from "./LinkTo";

//Translation
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <footer className="bg-[#243447] w-full py-10">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 px-8 md:flex-row md:justify-between">
          {/* About */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold text-red-500">{t(`${"donorcircle_in"}`)}</h2>
            <p className="mt-2 font-semibold text-white">
              {t(`${"connecting"}`)}
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold text-red-500 ">
              {t(`${"quick_links"}`)}
            </h2>
            <div className="flex flex-col items-start mt-2 gap-0-1">
              <LinkTo
                PageName={t(`${"about_us"}`)}
                url="/aboutus"
                className="text-white capitalize"
              />
              <LinkTo
                PageName={t(`${"home"}`)}
                url="/"
                className="text-white capitalize"
              />
              <LinkTo
                PageName={t(`${"login"}`)}
                url="/signin"
                className="text-white capitalize"
              />
            </div>
          </div>

          {/* Blood Groups */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold text-red-500 ">{t(`${'blood_groups'}`)}</h2>
            <div className="mt-2 space-y-1 text-white ">
              <div>{t(`${'a+'}`)}</div>
              <div>{t(`${'b+'}`)}</div>
              <div>{t(`${'o+'}`)}</div>
              <div>{t(`${'ab+'}`)}</div>
            </div>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold text-red-500">{t(`${"support"}`)}</h2>
            <p className="mt-2 text-white">Coming Soon</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 text-base text-center text-white">
          {t(`${"©_2025"}`)}
        </div>
      </footer>
    </>
  );
}

export default Footer;
