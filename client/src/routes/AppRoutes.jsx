import {Route, Routes } from "react-router";
import { lazy, Suspense } from "react";


//Views Import
const Signin = lazy(()=> import("../Views/Signin.jsx"))
const ShowAllUser = lazy(()=> import("../Views/ShowAllUser.jsx"))
const AddUserProfile = lazy(()=> import("../Views/AddUserProfile.jsx"))
const ShowAllUserinfo = lazy(()=> import("../Views/ShowAllUserInfo.jsx"))
const AboutUs = lazy(()=> import("../Views/AboutUs.jsx"))
const ContactUs = lazy(()=> import("../Views/ContactUs.jsx"))
const FAQ = lazy(()=> import("../Views/FAQ.jsx"))

import Loader from "../Components/Loader.jsx";

//Components Import
const SignupForm = lazy(()=> import("../Components/SignupForm.jsx"))
const LandingPage = lazy(()=> import("../Views/LandingPage.jsx"))

function AppRoutes() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/showalluers" element={<ShowAllUser />} />
                <Route path="/showuserinfo/:email" element={<ShowAllUserinfo />} />
                <Route path="/adduserprofile" element={<AddUserProfile />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/faq' element={<FAQ />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes