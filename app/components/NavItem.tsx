import React, { useState } from 'react'

export default function NavItem({title, items}){
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className='relative text-sm font-serif hover:underline cursor-pointer'
        >
        <p>{title}</p>
        {isHovering && (
            <div className='absolute top-[19vh] z-20 w-screen h-[75vh] bg-white flex'>
                <div id="SideNav" className=' bg-black text-white border-r pr-4 h-full w-[220px] overflow-auto'>
                    <p>lets try</p>
                    <p>whats new</p>
                </div>
                <div className='border-1 overflow-auto'>
                    <p>whats here</p>
                </div>

            </div>
        )}


        </div>
    )


}