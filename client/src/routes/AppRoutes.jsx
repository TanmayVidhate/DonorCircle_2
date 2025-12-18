
import {Route, Routes } from "react-router";
//Views Import

import Signin from "../Views/Signin.jsx"
import ShowAllUser from "../Views/ShowAllUser.jsx"
import AddUserProfile from "../Views/AddUserProfile.jsx"
import ShowAllUserinfo from "../Views/ShowAllUserInfo.jsx"
import AboutUs from '../Views/AboutUs.jsx';
import ContactUs from '../Views/ContactUs.jsx';
import FAQ from '../Views/FAQ.jsx';
import Loader from "../Components/Loader.jsx";

//Components Import
import SignupForm from "../Components/SignupForm.jsx"
import { lazy, Suspense } from "react";
// import { Loader } from "lucide-react";
// import Cards from "./Components/Cards.jsx"

const LandingPage = lazy(()=> import("../Views/LandingPage.jsx"))

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<Loader/>}>
                    <LandingPage />
                </Suspense>
            } />
            
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/showalluers" element={<ShowAllUser />} />
            <Route path="/showuserinfo/:email" element={<ShowAllUserinfo />} />
            <Route path="/adduserprofile" element={<AddUserProfile />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/faq' element={<FAQ />} />
            
        </Routes>
    )
}

export default AppRoutes