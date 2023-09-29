import React, { useState } from 'react'
import '../Styling/ContactPage.css';
import backgroundImage from '../images/BackgroundPic.jpg';
import emailjs from 'emailjs-com';

function ContactPage() {

    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) =>{
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(
            'service_e59gabx',
            'template_cpegyzq',
            e.target,
            'BJQiQI86fT0QitWtc'
        )
        .then((result) => {
            console.log('Email sent successfully: ', result.text);
        })
        .catch((err) => {
            console.error('Error sending email: ', err);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

  return (
    <div className='contact-container'>
        <div className='contact-title'>
        Contact me    
        </div>       
        <form
            className='contact-form-container'
            action='index.html'
            method='post'
            onSubmit={sendEmail}
        >
            <input 
                type='text'
                className='contact-form-text'
                name='name'
                placeholder='Your Name'
            />
            <input 
                type='text'
                className='contact-form-text'
                name='email'
                placeholder='Your Email'
            />
            <input 
                type='text'
                className='contact-form-text'
                name='phone'
                placeholder='Your Phone'
            />
            <textarea 
                className='contact-form-text'
                name='message'
                placeholder='Your Message'
            />

            <div className='button-container'>
                <input 
                    type='submit' 
                    className={`contact-form-btn ${isLoading ? 'loading': ''}`}
                    value={isLoading ? 'Sending...' : 'Send'}
                    disabled={isLoading}
                />
                {isLoading && <div className='loading-spinner'></div>}
            </div>            
        </form>
    </div>
  )
}

export default ContactPage