import React from 'react'
import './ContactMe.css'
import {ContactMeData ,isHireable } from '../../Portfolio'
import { Bubbles, SocialMeadia } from '../../components'

const ContactMe = () => {
  return (
    <section className="main" id='contact'>
      <Bubbles/>
        
        <div className="container">
            <div className="row">
            <div className="col-md-8 mx-auto text-center">
            
                <h2 className="title">Get in Touch!</h2>
                <hr className="my-4"/>
                <p className="mb-5">{ContactMeData.title}</p>
                <div className='social'>
                <SocialMeadia newTab={true}/>
                </div>
                
                <p className="mb-5">Available for freelance work:
                <span className='hireable'>{isHireable ? ' Yes' : ' NO'}</span>
                </p>
                <p className="mb-5 font-weight-bold text-danger">{ContactMeData.msg}</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe