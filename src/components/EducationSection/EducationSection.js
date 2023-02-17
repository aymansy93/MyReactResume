import React from 'react'
import './EducationSection.css'
import {FaRegCalendarAlt} from 'react-icons/fa'


const EducationSection = (props) => {
  return (
    <div className="edu-custom col-lg-6">
      {
      props.img ? (
        <img src={props.img} alt={props.name} className="img-fluid"/>
      ) : null
      }
            <h3>{props.name}</h3>
        <p className={props.className}><i><FaRegCalendarAlt/> </i>{props.date}</p>
    </div>
  )
}

export default EducationSection