import React from 'react'
import './Achievements.css'
import {FaAward} from 'react-icons/fa'
import {EducationSection} from '../../components/index'
import { AchievementsData } from '../../Portfolio'

const Achievements = () => {
  return (
    <section className="main achievements-section" id='Achievements'>
        <div className="container">
            <h2 className='title'>Achievements &amp; Certifications</h2>
            <div className="row">
                {
                    AchievementsData.Achievement.map((element,i)=>(
                        <div className="col-lg-6">
                            <div className="achievement-item">
                                    <div className="achievement-icon">
                                        <i className="fas fa-award"><FaAward/></i>
                                    </div>
                                    <EducationSection
                                    img={element.img}
                                    name={element.name}
                                    date={element.date}
                                    className={'achievement-date'}
                                    />
                            
                                <p>{element.des}</p>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
    </section>

)
}

export default Achievements