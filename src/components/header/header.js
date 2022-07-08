import React from 'react'
import './header.css'
import Cta from './cta'
import Img from '../../assets/IMG_20220707_172351-removebg.png'
import Sociallink from './sociallink'
// import { Typewriter } from 'react-simple-typewriter'
import Typewriter  from 'typewriter-effect'


const Header = () => {
  return (
    <section id='header'>
      <header>
        <div className="container header_container">

          <h5>Hy , I am</h5>
          <h1>PRABHAKAR</h1>
          <h5 className='text-light'>
            I'm a <span><Typewriter
             onInit={(typewriter)=>{ typewriter
            .typeString("Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Designer")
            .pauseFor(1000)
            .deleteAll()
            .typeString(" & ")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Programmer ...")
            .start()
          }}

          /></span>
          </h5>
          <Cta />
          <Sociallink />
          <div className='me'>
            <img src={Img} alt='img not found'></img>
          </div>
        </div>




      </header>
    </section>
  )
}

export default Header