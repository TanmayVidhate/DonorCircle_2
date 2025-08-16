import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router'
import axios from 'axios';


//components import
import Navbar from '../Components/Navbar.jsx'
import Cards from '../Components/Cards.jsx'


function ShowAllUser() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([])

  const loadUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/Users/");
      toast.dismiss();
      toast.success("Data fetch 👍");
      console.log(response?.data)
      setUsers(response?.data?.data);
    }
    catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }

  }

  useEffect(() => {
    loadUserData();
  }, [])


  return (
    <>
      <div className='flex flex-col  bg-[#ffd6a5]  w-screen min-h-screen '>
        <Navbar />
        <div className='flex-1 grid place-items-center '>

          <div className='border rounded-lg bg-white w-4/5 my-20 p-3 sm:my-28 '>

            <div className='w-full  h-[550px]  overflow-y-auto scrollbar-hide py-2 '>

              <div className='w-full sm:flex sm:justify-center sm:items-center sm:flex-wrap  '>
              {
                users.map((user, i) => {
                  const { name, email, other_info } = user;
                  const { mobile_no, blood_group, address, age } = other_info?.[0] || {};
                  // console.log("tt=", other_info?.length)
                  if (other_info?.length) {
                    return <Cards name={name} email={email} mobile_no={mobile_no} blood_group={blood_group} address={address} age={age} key={i} />
                  }
                  else {
                    return <Cards name={name} key={i} message="Please Add User's Other Info" />
                  }
                })
              }
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  )
}

export default ShowAllUser