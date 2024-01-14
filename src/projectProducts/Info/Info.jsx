import React from 'react'
import person from "../../assets/img/personImg.svg";
import "./Info.scss"
function Info() {
  return (
    <div className='Info'>
        <img className='InfoImage' src={person} />
        <div className="InfoText">
            <h1 className='title'>What is Lorem Ipsum?</h1>
             <p className='describtion'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap
             into electronic typesetting, remaining essentially unchanged. It was popularised in  
             </p>
        </div>
    </div>
  )
}

export default Info