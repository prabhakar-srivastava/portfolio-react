import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function Sociallink() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/prabhakar-8aa302240/' target='_blank'><BsLinkedin /></a>  
        <a href='https://github.com/prabhakar-srivastava' target='_blank'><BsGithub /></a>
        <a href='https://www.instagram.com/lazy_coder._' target='_blank'><BsInstagram /></a>
        <a href='https://www.twitter.com/lazy_coder_'  target='_blank'><BsTwitter /></a>
        
    </div>
  )
}

export default Sociallink