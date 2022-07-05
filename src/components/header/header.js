import React from 'react'
import './header.css'
import Cta from './cta'
import Img from '../../assets/IMG_20220328_131124.jpg'
import Sociallink from './sociallink'



const Header = () => {
  return (
    <section id='header'>
      <header>
        <div className= "container header_container">

          <h5>Hello , I am</h5>
          <h1>PRABHAKAR</h1>
          <h5 className='text-light'>full stack developer</h5>
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