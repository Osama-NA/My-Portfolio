import React, { useRef } from 'react';
import { ContactFormContainer } from '../styles/ContactForm.styled.js';
import emailjs from 'emailjs-com';

export const ContactForm = () => {

    const contactForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const message = e.target.message.value;
        if (message.length < 6) {
            alert("Tell us more . . .");
            e.target.reset();
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            contactForm.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(() => {
            alert("Email successfully sent, thank you!");
        }, (error) => {
            alert(error.text);
        });

        e.target.reset();
    };


    return (
        <ContactFormContainer ref={contactForm} onSubmit={sendEmail}>
            <div className="form-row">
                <label>Name :</label>
                <input type="text" name="name" placeholder="Enter your full name . . ." required />
            </div>
            <div className="form-row">
                <label>Email :</label>
                <input type="text" name="email" placeholder="Enter your email . . ." required />
            </div>
            <div className="form-row">
                <label>Subject :</label>
                <input type="text" name="subject" placeholder="Enter the subject . . ." required />
            </div>
            <div className="form-row">
                <label>Message :</label>
                <textarea name="message" placeholder="Enter the message . . ." required />
            </div>
            <div className="form-row-buttons">
                <button type="reset" className="reset">RESET</button>
                <button type="submit">SEND<i className="fas fa-paper-plane"></i></button>
            </div>
        </ContactFormContainer>
    )
}
