import React from 'react'
import './testimonial.css'

function Testimonial() {
  return (
    <section id='testimonial' style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <h2>Testimonial</h2>
        
        <div className='testCSS' style={{
               background: 'var(--colof-bg-variant)',
               padding: '1.5rem ',
               borderRadius: '2rem',
               border: '1px solid transparent',
               transition: 'var(--transition)',
               boxShadow:'10px 20px 50px 5px rgba(18, 8, 10, 0.704)',
            
        }}>
            <p>
                Mr. Prabhakar has worked directly under my supervision for the past weeks and one of those rare individuals who can both follow instructions and take initiative .
                He is strong in problem solving skills and his competence extends beyonds the skills for which he was originally hired . I would never stop vouching got him . <br />
                <br />
                
                Seldom have i been able to make such a enthusiastic recommendation. I have no hesitation in recommending Prabhakar and I am sure he will be valuable addition to any organization he joins. 
            </p>
            <a className='btn'style={{
                marginTop:'2rem'
            }} href='https://drive.google.com/file/d/1JUabBa2CUGh7TFVkTUfmXKowBnKMTkIT/view' target='_blank'>Recommendation Letter</a>  
        </div>
       
    </section>
  )
}

export default Testimonial