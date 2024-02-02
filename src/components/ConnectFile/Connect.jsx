import React, { useRef } from 'react';
import './Connect.css';
import emailjs from '@emailjs/browser';

const Connect = () => {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1d72qt6', 'template_5jvsy3x', form.current, 'ALTTX9bjmbmTcJE0M')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Connect" id="Connect-us">
        <div className="leftconnect">
            <hr />
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="rightconnect">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter Your Email Address' />
                <button className="btn btn-connect">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Connect;