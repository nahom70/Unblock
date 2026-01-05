import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
    <div className='flex items-baseline px-20 rounded-2xl w-full justify-between text-text-600 font-raptor-bold'>
      <div>
        <h1 className='text-9xl'>UnBlock</h1>
      </div>
      <div>
        <button>Sign in</button>
      </div>
    </div>

    <div className='text-text-200 text-4xl absolute top-[40%] right-0 p-10 font-raptor-medium flex flex-col gap-5 *:cursor-pointer'>
      <span className='flex'><HiArrowLongRight/> How  it works</span>
      <span className='flex'><HiArrowLongRight/> Why Unblock</span>
      <span className='flex'><HiArrowLongRight/> About</span>
    </div>
    </>
  )
}

export default Navbar