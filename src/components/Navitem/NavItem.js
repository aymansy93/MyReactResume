import React from 'react'
import './Navitem.css'


const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.url}>{props.text}</a>
    </li>
  )
}

export default NavItem