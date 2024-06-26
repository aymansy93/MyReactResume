import React from 'react'
import './Footer.css'
import heart from '../../assets/images/heart.svg'


const Footer = () => {
  return (
    <footer>
      <div className="container main text-center">
        <p className="mb-0">Copyrights &copy;
            {new Date().getFullYear()}
            <span> by</span><img  src={heart} alt=''/><span>Ayman Kanawi</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer