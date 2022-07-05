import React,{useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm ('service_erw9jd5', 'template_6fdj0ch',form.current, 'yb6W_qr4MKMScmXZX')
      e.target.reset()
    }



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>prabhakarsrivastava73<br/>@gmail.com</h5>
          <a href="mailto:prabhakarsrivastava73@gmail.com" >Send a message</a>
          </article>
          <article className="contact_option">
          <AiOutlineMessage className='contact_option-icon'/>
          <h4>Message</h4>
          <h5></h5>
          <a href="https://m.me/profile.php?id=100008924291714" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatts App</h4>
          <h5>+917766800886</h5>
          <a href="https://api.whatsapp.com/send?phone=7766800886" target='_blank'> Send a message</a>
          {/* <a href="mailto:dummyegator@gmail.com">Send a message</a> */}
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} className='form'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>

    </section>
  )
}

export default Contact