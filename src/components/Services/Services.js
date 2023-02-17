import React from 'react'
import "./Services.css"


const Services = (props) => {
  return (
    <div>
      <p className='sub-text'>
        <img src={props.img} className='img-icon' alt=''/>
        {props.text}
      </p>
    </div>
  )
}

export default Services