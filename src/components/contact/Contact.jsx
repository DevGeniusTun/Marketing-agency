import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
          alert("Thanks for your time we will reach you back via email!")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
   <>
   <div className='contact-title'><h2 className="Home-sections-title">Contact us</h2></div>
   <form ref={form} onSubmit={sendEmail}>
        <input name="from_name" type="text" class="feedback-input" placeholder="Name" />
        <input type="email" name="user_email" class="feedback-input" placeholder="Email"/>
        <textarea name="message" class="feedback-input" placeholder="Comment"/>
        <button type="submit" value="Send" className='submit' >Send</button>
      </form>
      </>
    );
  };


export default Contact