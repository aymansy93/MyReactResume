import React from 'react'
import {FaWhatsapp ,FaFacebook ,FaGithub} from "react-icons/fa"
import {MdAlternateEmail} from "react-icons/md"
import {SiTryhackme} from 'react-icons/si'
import './SocialMeadia.css'
import { SocialMeadiaData } from '../../Portfolio'

const SocialMeadia = (props) => {
  return (
    <div className="social-icons">
      <a href={SocialMeadiaData.facebook} target={props.newTab && "_blank"}  className='facebook'><i><FaFacebook/></i></a>
      <a href={SocialMeadiaData.github} target={props.newTab && "_blank"} className='github'><i><FaGithub/></i></a>
      <a href={SocialMeadiaData.whatsapp} target={props.newTab && "_blank"} className='whatsapp'><i><FaWhatsapp/></i></a>
      <a href={SocialMeadiaData.email} target={props.newTab && "_blank"} className='email'><i><MdAlternateEmail/></i></a>
      <a href={SocialMeadiaData.tryhackme} target={props.newTab && "_blank"} className='email'><i><SiTryhackme/></i></a>

      
    </div>
  )
}

export default SocialMeadia