import React from 'react'
import "./button.css"


export default function Button(props) {

    const handleClick = () => {props.onClick(props.label)}


  return (
    <div onClick={handleClick} className='buttonName'>{props.label}</div>
    
  )
}
