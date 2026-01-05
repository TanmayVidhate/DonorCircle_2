import React, { useContext, useState } from 'react'

//Lucide import
import { FunnelPlus } from 'lucide-react';
function FilterUsers({role,setRole}) {

    const [isOpen, setIsOpen] = useState(false);
    
    
    return (
        <>
            <div className='relative w-full '>
                <FunnelPlus className='hover:text-[#ffd6a5] cursor-pointer ' onClick={() => { setIsOpen(!isOpen) }} />
                {(isOpen)
                    &&
                    <div className=' border border-red-600 absolute'>
                        <label>
                            <input type="radio" name="role" value="donor" checked={role === "donor"} onChange={(e) => setRole(e.target.value)} />
                            Donor
                        </label>

                        <label>
                            <input type="radio" name="role" value="receiver" checked={role === "receiver"} onChange={(e) => setRole(e.target.value)} />
                            Receiver
                        </label>

                    </div>
                }
            </div>
        </>
    )
}

export default FilterUsers;