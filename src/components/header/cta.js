import React from 'react'
import Resume from '../../assets/Prabhakar_resume.pdf'

function Cta() {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume   </a> 
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>


    </div>
  )
}

export default Cta