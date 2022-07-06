import React from 'react'
import './project.css'
import Img from '../../assets/PhotoEditor_20227616212413.jpg'
import Img2 from '../../assets/PhotoEditor_2022761698218.jpg'
import Img3 from '../../assets/PhotoEditor_202276162741247.jpg'

const data = [
  {
    
    id: 1,
    image: Img,
    title: 'Portfolio Using React',
    github: 'https://github.com/prabhakar-srivastava/portfolio-react.git',
    demo: 'https://prabhakar-profile.000webhostapp.com/'
    
  },
  {
    
    id: 2,
    image: Img2,
    title: 'Pynch - A Social Media Web App',
    github: 'https://github.com/prabhakar-srivastava/pynch-socialMedia.git',
    demo: 'http://pynch.epizy.com/?i=1'
    
  },
  {
    
    id: 3,
    image: Img3,
    title: 'Loan Eligibility Prediction ',
    github: 'https://github.com/prabhakar-srivastava/Loan-Eligibility-Prediction.git',
    // demo: 'saddas'
    
  },
  // {
    
  //   id: 4,
  //   image: Img,
  //   title: 'Crypto Currency Dashboard & Financial Visualization',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    
  // }
]

const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                 
              
                  
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

                </div>
              </article>
            )
            }
          )
        }
       </div> 
    </section>
  )
      }
export default Project
