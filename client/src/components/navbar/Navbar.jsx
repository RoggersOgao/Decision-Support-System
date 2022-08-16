import React from 'react'
import "./navbar.scss"
import { FaLanguage, FaEnvelope } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container--lang">
          <FaLanguage size={26}/> ENG
        </div>
        <div className="navbar__container--email">
          <a href="mailto:anudom@anu.ac.ke"><FaEnvelope size={18}/> anudom@anu.ac.ke</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar