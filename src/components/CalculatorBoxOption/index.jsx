import React from 'react'
import "./index.css"
import blub from "../../assets/blub.svg"
import sound from "../../assets/sound.svg"
import restart from "../../assets/restart.svg"
import zoom from "../../assets/zoom_in.svg"
import forward from "../../assets/forward_button.svg"
import prev from "../../assets/prev_button.svg"
const index = () => {


  return (
    <>
      {/* // CALCULATOR NAV SECTION */}
      <div className=' w-full h-20 flex justify-center items-center'>
        <div className=' w-2/6 h-full flex justify-between items-center'>
          <p className=' text-base  cursor-pointer font-medium' id='common'>Study</p>
          <p className=' text-base  cursor-pointer font-medium' id='common'>Quiz</p>
          <p className=' text-base  cursor-pointer font-medium' id='common'>Test</p>
          <p className=' text-base  cursor-pointer font-medium' id='common'>Game</p>
          <p className=' text-base  cursor-pointer font-medium' id='common'>Other</p>
        </div>
      </div>

      {/* // CALCULATOR CONTAINER SECTION */}
      <div className=' bg-blue-600 m-auto rounded-3xl relative' id='calculator_container' style={{background: "linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 1%, rgba(8,42,143,1) 43%, rgba(1,201,248,1) 99%, rgba(0,212,255,1) 100%, rgba(0,212,255,1) 100%)"}}>
        <div className=' w-full h-20 flex justify-between items-center absolute top-2 rounded-3xl'>
          <img src={blub} alt="" className=' w-8 h-8 ml-2' />
          <img src={sound} alt="" className=' w-8 h-8 mr-2' />
        </div>

        <div className=' w-full h-20 flex justify-center items-center absolute top-1/3 rounded-3xl'>
          <h1 className=' text-white text-3xl'>9 + 6 + 7x - 2x - 3</h1>
        </div>
      </div>

        <div id='control_container'>
          <img src={restart} alt="" className=' w-6 h-6 ml-5' />
          <div className=' w-2/5 h-full flex justify-between items-center'>
            <img src={prev} alt="" className=' w-10 h-10' />
            <h1 className='text-black font-medium text-xl'>1 / 10</h1>
            <img src={forward} alt="" className=' w-10 h-10' />
          </div>
          <img src={zoom} alt="" className=' w-6 h-6 mr-5' />
        </div>
    </>
  )
}

export default index
