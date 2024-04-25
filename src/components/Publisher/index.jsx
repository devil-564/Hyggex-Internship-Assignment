import React from 'react'
import publisher_logo from "../../assets/publisher_logo.png"
import plus from "../../assets/plus.svg"
const index = () => {
  return (
    <div className=' w-11/12 h-20 flex justify-between items-center m-auto' style={{width : "95%"}}>
      <img src={publisher_logo} alt="" className='w-38 h-20'/>
      <div className=' w-1/5 h-20 flex justify-evenly items-center'>
        <img src={plus} alt="" className=' w-12 h-12'/>
        <h1 className=' text-blue-700 text-xl'>Create Flashcard</h1>
      </div>
    </div>
  )
}

export default index
