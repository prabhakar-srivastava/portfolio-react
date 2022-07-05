import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'


function Experience() {
  return (
    <section id='exp'>

      <h5 >What Skills I Have</h5>
      <h2>MY EXPERIENCE</h2>
      
      <div className='container experience_container'>
        <div className='front'>
          <h3>FRONTEND DEVELOPMENT</h3>
          <div className='experience_content'>
            
            <article className='experience_detail'>
              <BsPatchCheckFill className='icon' />
              <div>

                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>CSS</h4>

                <small className='text-light'>Experienced</small>
              </div>
                
                

            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='icon' />
              <div>

                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>

              </div>
            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='icon' />
              <div>

                <h4>REACT JS</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='icon' />
              <div>

                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
          </div>
        </div>

          {/* end of front end */}

       <div className='back'>
         <h3>BACKEND DEVELOPMENT</h3>
            <div className='experience_content'>
              
              <article className='experience_detail'>
                <BsPatchCheckFill className='icon' />
                <div>

                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>
              <article className='experience_detail'>
                <BsPatchCheckFill className='icon' />
                <div>

                  <h4>C / C++</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>
              <article className='experience_detail'>
                <BsPatchCheckFill className='icon' />
                <div>

                  <h4>JAVA</h4>
                  <small className='text-light'>Intermediate </small>
                </div>

              </article>
              <article className='experience_detail'>
                <BsPatchCheckFill className='icon' />
                <div>
                  <h4>PYTHON</h4>

                  <small className='text-light'>Intermediate</small>

                </div>
              </article>
              <article className='experience_detail'>
                <BsPatchCheckFill className='icon' />
                <div>

                  <h4>NODE JS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>

              </article>
          
              <article className='experience_detail'>
                <BsPatchCheckFill className='icon' />
                <div>

                  <h4>MY SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>

              </article>
          
            </div>

        </div>
        

      </div>
    </section>
  )
} 
export default Experience