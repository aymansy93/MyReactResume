import React from 'react'
import { Proficiency } from '../../Portfolio'
import "./SkillProgress.css"


const SkillProgress = () => {
  return (
    <div className='main proficiency' id='proficiency'>
         <div className="container ms-auto">
            <div className='row'>
            <div className="skills-content col-6 col-sm-4 ">
                <h2 className='title'>Proficiency</h2>
                {
                    Proficiency.experience.map((element,i) => {
                        const style = {
                        width: element.progressPercentage
                        };
                        return (
                        <div key={i} className="skill">
                            <h4>{element.Stack}</h4>
                            <div className="progress">
                                <div className="progress-bar" style={style}>{element.progressPercentage}</div>
                            </div>
                        </div>
                        );
                    })
                }


            </div>
            </div>
         </div>
    </div>
  )
}

export default SkillProgress