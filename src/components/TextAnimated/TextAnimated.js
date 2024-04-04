import React from 'react'
import "./TextAnimated.css"
import Typewriter from 'typewriter-effect'
import { TextAnimated as TextAn } from '../../Portfolio';


const TextAnimated = () => {
  return (
    <span className="typed">
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
            delay:60,
            strings:TextAn
        }}
        />
    </span>
  )
}

export default TextAnimated