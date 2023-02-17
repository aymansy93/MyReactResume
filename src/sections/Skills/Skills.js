import React from 'react'
import "./Skills.css"
import img from "../../assets/images/undraw_laravel_and_vue_-59-tp.svg"
import { SkillsData } from '../../Portfolio'

const Skills = () => {
  return (
    <div className='main' id='skills'>
      
        <div className="container ms-auto">
            <div className="row">
              
              <div className="skills-content col-6 col-sm-4 ">
                <h2 className='title'>My Expertise</h2>
                <p className='text-title-1'> 
                {SkillsData.title1}<span>{SkillsData.titlecolor}</span> {SkillsData.title2}
                </p>
                <div className='icon'>
                  {
                    SkillsData.skills.map((element,i)=>(
                      <i key={i}>{element.iconname}<span>{element.name}</span></i>
                    ))
                  }
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <img src={img} className='img img-fluid' alt=''/>
              </div>

              
            </div>
            
        </div>

    </div>
  )
}

export default Skills
