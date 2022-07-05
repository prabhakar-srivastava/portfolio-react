import React from 'react'
import './project.css'
import Img from '../../assets/download (1).jpg'

const data = [
  {
    
    id: 1,
    image: Img,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    
  },
  {
    
    id: 2,
    image: Img,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    
  },
  {
    
    id: 3,
    image: Img,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    
  },
  {
    
    id: 4,
    image: Img,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    
  }
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
