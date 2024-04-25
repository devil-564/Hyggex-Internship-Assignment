import React from 'react'
import Home from "../../assets/home.svg"
import RightArrow from "../../assets/right_arrow.svg"

const index = () => {
  return (
    <div className=' w-full h-20 flex justify-start items-center translate-x-10'>
      <div className=' w-2/5 flex justify-evenly items-center'>
        <img src={Home} alt="home" srcset="" className=' w-6 h-6'/>
        <img src={RightArrow} alt="right_arrow" srcset="" />
        <p className=' text-sm  cursor-pointer font-medium'>Flashcards</p>
        <img src={RightArrow} alt="right_arrow" srcset="" />
        <p className=' text-sm  cursor-pointer font-medium'>Mathematics</p>
        <img src={RightArrow} alt="right_arrow" srcset="" />
        <p className=' text-sm  cursor-pointer text-blue-800 font-bold'>Relation and Function</p>
      </div>
    </div>
  )
}

export default index
