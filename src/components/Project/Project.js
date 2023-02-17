import React from 'react'
import './Project.css'
import {ButtonSplashScreen} from '../../components/index'

const Project = (props) => {
  return (
    <div className="col-md-6 mb-4 project">
        
            <div className="card">
            {
            props.img ? (
            <img src={props.img} className="card-img-top" alt={props.name} />
            ) : null
            }
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.des}</p>
                <ButtonSplashScreen name='More Details' url={props.url} newTab={true}/>
            </div>

            </div>
    </div>
  )
}

export default Project