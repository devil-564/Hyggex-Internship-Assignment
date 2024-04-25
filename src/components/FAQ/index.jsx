import React from 'react'
import "./index.css"
import DownArrow from "../../assets/faq_down_arrow.svg"
const index = (props) => {
    const {question, answer} = props
  return (
    <div className=' w-3/5 h-14 border border-blue-600 rounded-3xl flex justify-between items-center mb-3'>
        <p className=' text-base cursor-pointer font-medium ml-2'>{question}</p>
        <img src={DownArrow} alt="" className=' mr-2'/>
    </div>
  )
}

export default index
