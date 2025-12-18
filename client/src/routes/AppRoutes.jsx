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
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<Loader/>}>
                    <LandingPage />
                </Suspense>
            } />
            
            <Route path="/signup" element={
                <Suspense fallback={<Loader/>}>
                    <SignupForm />
                </Suspense>
            } />

            <Route path="/signin" element={
                <Suspense fallback={<Loader/>}>
                    <Signin />
                </Suspense>
                
            } />
            <Route path="/showalluers" element={
                <Suspense fallback={<Loader/>}>
                    <ShowAllUser />
                </Suspense>
            } />

            <Route path="/showuserinfo/:email" element={
                <Suspense fallback={<Loader/>}>
                    <ShowAllUserinfo />
                </Suspense>
            } />

            <Route path="/adduserprofile" element={
                <Suspense fallback={<Loader/>}>
                    <AddUserProfile />
                </Suspense>
            } />

            <Route path='/aboutus' element={
                <Suspense fallback={<Loader/>}>
                    <AboutUs />
                </Suspense>
            } />

            <Route path='/contactus' element={
                <Suspense fallback={<Loader/>}>
                    <ContactUs />
                </Suspense>
            } />

            <Route path='/faq' element={
                <Suspense fallback={<Loader/>}>
                    <FAQ />
                </Suspense>
            } />
            
        </Routes>
    )
}

export default AppRoutes