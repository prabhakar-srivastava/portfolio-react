import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>PRABHAKAR</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href='#exp'>Experience</a></li>
        <li><a href='#project'>Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://m.me/profile.php?id=100008924291714" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/lazy_coder._/" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/lazy_coder__" target='_blank'><IoLogoTwitter /></a>

      </div>
      <div className="footer_copyright">
        <small>&copy; PRABHAKAR , All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer