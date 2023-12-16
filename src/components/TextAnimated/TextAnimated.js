import React from 'react'
import "./TextAnimated.css"
import Typewriter from 'typewriter-effect'


const TextAnimated = () => {
  return (
    <span className="typed">
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
            delay:60,
            strings:[
                "Experienced Back-End Web Developer",
                "Proficient in utilizing the Laravel framework",
                "Skilled Web Manager",
                "Specialized in Penetration Testing",
                "Adept in Bug Hunting"
            ],
        }}
        />
    </span>
  )
}

export default TextAnimated