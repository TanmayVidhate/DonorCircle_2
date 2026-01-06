import React, { useContext, useState } from 'react'

import { UserRoleContext } from "../Context/UserRoleContext.jsx";

//Lucide import
import { FunnelPlus } from 'lucide-react';
function FilterUsers() {

    const { role, setRole } = useContext(UserRoleContext);

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className=' w-full  '>
                <FunnelPlus className='hover:text-[#ffd6a5] cursor-pointer  ' onClick={() => { setIsOpen(!isOpen) }} />
                {(isOpen)
                    &&
                    <div className='absolute mt-2 px-2 py-2 rounded cursor-pointer bg-[#f7c789] text-white'>
                        <div>
                            <label  >
                                <input className='m-1' type="radio" name="role" value="donor" checked={role === "donor"} onChange={(e) => setRole(e.target.value)} />
                                Donors
                            </label>
                        </div>
                        <div>
                            <label>
                                <input className='m-1' type="radio" name="role" value="receiver" checked={role === "receiver"} onChange={(e) => setRole(e.target.value)} />
                                Receivers
                            </label>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default FilterUsers;