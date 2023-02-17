import React from 'react'
import "./Education.css"

import { EducationData } from '../../Portfolio'
import {EducationSection} from '../../components/index'

const Education = () => {
  return (
  <div className='main' id='education'>
    <div className="container ms-auto">
        <div className='row'>
            <h2 className='title'>Education</h2>
            {
            EducationData.edu.map((element,i) => (
                <EducationSection
                key={i}
                img={element.img}
                name={element.name}
                date={element.date}
                />
            ))
            }
        </div>
    </div>
</div>
  )
}

export default Education