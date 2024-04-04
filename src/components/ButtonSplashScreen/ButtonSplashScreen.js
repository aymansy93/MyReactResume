import React from 'react'
import "./ButtonSplashScreen.css"

const ButtonSplashScreen = (props) => {
  return (
    <a href={props.url} className="main-btn" target={props.newTab ? '_blank' : '_self'}  rel={props.newTab ? "noopener noreferrer" : null}>{props.name}</a>
  )
}

export default ButtonSplashScreen