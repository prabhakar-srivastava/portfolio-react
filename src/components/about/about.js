import React from 'react'
import './about.css'
import Me from '../../assets/IMG_20220205_160410.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>

      <div className='container about_container'>

        <div className='about_me'>
          <img src={Me} alt='imahe not found' />

        </div>
        <div className='about_content'>
          <h4>
          I am <b>PRABHAKAR</b>, a computer science student at <b>Punjab Technical University</b>.
          Specialize in <b>Web Development & Web desiging</b> with experience in project 
          creation and management. My interests include automation, web desiging, managing backend server 
          and data analyzing. Outside of class I'm a athelete, photographer and a cook. I also mantain a number of neat projects.


          </h4>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>


        </div>

      </div>




    </section>
  )
}

export default About