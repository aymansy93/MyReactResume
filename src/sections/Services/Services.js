import React from 'react';
import { Services } from '../../components/index';
import './Services.css'
import {ServicesData} from '../../Portfolio'



const services = () => {
  return (
    <div className='services' id='services'>
      {
      ServicesData.map((element,i)=>(
        
        <Services img={element.img} text={element.text} key={i} />
      ))
      }

    </div>
  )
}

export default services