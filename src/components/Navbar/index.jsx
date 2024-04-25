import React from 'react'
import logo from "../../assets/logo_svg.svg"

const index = () => {
  return (
    <nav className=' w-full h-20 flex justify-around'>
        <div className=' w-1/5 h-full flex justify-center items-center'>
            <img src={logo} alt="logo" srcset="" className='w-26 h-8 object-cover'/>
        </div>

        <div className=' w-4/5 h-full flex justify-end items-center '>
            <div className=' w-3/6 h-full flex justify-around items-center'>
                <span className=' text-base ml-3 cursor-pointer font-medium'>Home</span>
                <span className=' text-base ml-3 cursor-pointer font-medium'>Flashcard</span>
                <span className=' text-base ml-3 cursor-pointer font-medium'>Contact</span>
                <span className=' text-base ml-3 cursor-pointer font-medium'>FAQ</span>
                <button className=' text-base ml-3 bg-blue-600 rounded-2xl w-24 text-white font-medium cursor-pointer' style={{background: "linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 1%, rgba(8,42,143,1) 43%, rgba(1,201,248,1) 99%, rgba(0,212,255,1) 100%, rgba(0,212,255,1) 100%)"}}>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default index
