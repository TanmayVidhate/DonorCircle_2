import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { ErrorBoundary } from "react-error-boundary";

//Views Import
const Signin = lazy(() => import("../Views/Signin.jsx"));
const ShowAllUser = lazy(() => import("../Views/ShowAllUser.jsx"));
const AddUserProfile = lazy(() => import("../Views/AddUserProfile.jsx"));
const ShowAllUserinfo = lazy(() => import("../Views/ShowAllUserInfo.jsx"));
const AboutUs = lazy(() => import("../Views/AboutUs.jsx"));
const ContactUs = lazy(() => import("../Views/ContactUs.jsx"));
const FAQ = lazy(() => import("../Views/FAQ.jsx"));
const ForgotPassword = lazy(()=> import("../Views/ForgotPassword.jsx"));

import Loader from "../Components/Loader.jsx";
import UploadImg from "../Views/UploadImg.jsx";

//Components Import
const SignupForm = lazy(() => import("../Components/SignupForm.jsx"));
const LandingPage = lazy(() => import("../Views/LandingPage.jsx"));

import Fallback from "../Components/FallBackErrorHandle.jsx";

function AppRoutes() {
  
  const isChkSigninUp = JSON.parse(localStorage.getItem("keepLoggedIn")) === true;

  return (
    <SkeletonTheme color="#202020" highlightColor="#bbb">
      <ErrorBoundary FallbackComponent={Fallback} onReset={() => {}}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={isChkSigninUp ? <Navigate to="/showalluers"  /> : <LandingPage />  } />
            <Route path="/signup" element={ <SignupForm />} />
            <Route path="/forgotpassword" element={ <ForgotPassword/>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/showalluers" element={<ShowAllUser />} />
            <Route path="/showuserinfo/:email" element={<ShowAllUserinfo />} />
            <Route path="/uploadImg/:email" element={<UploadImg />} />
            <Route path="/adduserprofile/:email" element={<AddUserProfile />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </SkeletonTheme>
  );
}

export default AppRoutes;
