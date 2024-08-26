import React from 'react'
import './Footer.css'
import Data from '../utils/Data'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
      <h1 className='footer_title'><a href="#home" className='text-yellow-400'>UNIQUE ADHIKARI</a></h1>

        <ul className="footer_list">
          
          <li>
            <a href="#about" className='footer_link'>ABOUT</a>
          </li>

          <li>
            <a href="#project" className='footer_link'>PROJECTS</a>
          </li>

          <li>
            <a href="#skill" className='footer_link'>SKILLS</a>
          </li>

          <li>
            <a href="#contact" className='footer_link'>CONTACT</a>
          </li>
        </ul>

        <div className="footer_social">
        {Object.keys(Data.socials).map(key=>(
                    <a className='footer_social-link' href={Data.socials[key].link} target='_blank' rel='noopener noreferrer' key={key}>{Data.socials[key].icon}</a>
                ))}
        </div>
      <span>
      Copyright &#169; 2024 UNIQUE ADHIKARI. All right reserved.
      </span>
      </div>
    </footer>
  )
}

export default Footer
