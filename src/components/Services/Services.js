import React from 'react'
import "./Services.css"


const Services = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <img src={props.img} className='' alt="..." />
          {/* <div className="card-body text-center mt-4"> */}
            <p className="card-text text-center">{props.text}</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Services