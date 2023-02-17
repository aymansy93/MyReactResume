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
                "Back End Web Developer",
                "useing laravel framework",
                "web manager",
                "Penetration Testing",
                "Bug Hunting"
            ],
        }}
        />
    </span>
  )
}

export default TextAnimated