import React from 'react'
import './ProjectsOnline.css'
import {OlineProjects} from '../../Portfolio'
import { Project } from '../../components/index'


const ProjectsOnline = () => {
  return (
    <section className="main bg-dark" id="projects">
    <div className="container">
        <h2 className="title mb-4">Projects online</h2>
        <div className="row">
            {
                OlineProjects.projects.map((element,i)=>(
                    <Project
                    key={i}
                    name={element.name}
                    des={element.des}
                    img={element.img}
                    url={element.url}
                    />
                ))
            }
        </div>
    </div>
    </section>
  )
}

export default ProjectsOnline