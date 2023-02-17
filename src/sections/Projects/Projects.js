import React from 'react'
import "./Projects.css"
import {ButtonSplashScreen, Project} from '../../components/index'
import { ProjectsData, SocialMeadiaData } from '../../Portfolio'

const Projects = () => {
  return (
        <section className="main bg-dark" id="projects">
    <div className="container">
        <h2 className="title mb-4">Projects Open Source</h2>
        <div className="row">
            {
                ProjectsData.projects.map((element,i)=>(
                    <Project
                    key={i}
                    name={element.name}
                    des={element.des}
                    img={element.img}
                    url={element.url}
                    />
                ))
            }
            <div className='d-flex justify-content-center' id='btn-project'>
                <ButtonSplashScreen name='View More Projects' url={SocialMeadiaData.github} newTab={true}/>
            </div>
        </div>
    </div>
    </section>

  )
}

export default Projects