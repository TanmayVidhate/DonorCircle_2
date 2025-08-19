import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'

import App from './App.jsx'

import '@fontsource/balsamiq-sans'; 

//Views Import
import Landingpage from "./Views/Landingpage.jsx"
import Signin from "./Views/Signin.jsx"
import ShowAllUser from "./Views/ShowAllUser.jsx"
import AddUserProfile from "./Views/AddUserProfile.jsx"
import ShowAllUserinfo from "./Views/ShowAllUserInfo.jsx"
import AboutUs from './Views/AboutUs.jsx';
import Contact from './Views/ContactUs.jsx';
import FAQ from './Views/FAQ.jsx';

//Components Import
import SingupForm from "./Components/SingupForm.jsx"
// import Cards from "./Components/Cards.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<SingupForm />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/showalluers" element={<ShowAllUser/>}/>
        <Route path="/showuserinfo/:email" element={<ShowAllUserinfo/>}/>
        <Route path="/adduserprofile" element={<AddUserProfile />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<Contact/>} />
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
