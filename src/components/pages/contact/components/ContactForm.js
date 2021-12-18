import React, { useRef, useState, useContext, useEffect } from 'react';
import { ContactFormContainer } from '../styles/ContactForm.styled.js';
import emailjs from 'emailjs-com';
import {EmailSuccessContext} from '../../../../contexts/EmailSuccessContext.js';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const contactForm = useRef();

    // EmailSuccessContext is used here to let the parent container know when an email 
    //has been successfully sent in order to display email success message container
    const { setEmailSuccess } = useContext(EmailSuccessContext);
    const [emailSuccessState, setEmailSuccessState] = useState(false);

    //Function to send email to 'my email' using Email.Js
    const sendEmail = (e) => {
        e.preventDefault();

        //Only send email if message is not less than 8 characters 
        if (message.length < 8) {
            alert("Tell me more . . .");
            e.target.reset();
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            contactForm.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(() => {
            setEmailSuccessState(true);
        }, (error) => {
            alert(error.text);
        });

        e.target.reset();
        return;
    };

    // When email has been successfully sent email success context is set to true 
    //after setting emailSuccessState in sendEmail function
    useEffect(() => {
        if (emailSuccessState) {
            setEmailSuccess(true);
        }
    }, [emailSuccessState, setEmailSuccess]);


    return (
        <ContactFormContainer ref={contactForm} onSubmit={sendEmail}>
            <div className="form-row">
                <label>Name</label>
                <div className="form-row-split-line"></div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  name="name" placeholder="Gyōmei Himejima" required />
            </div>
            <div className="form-row">
                <label>Email</label>
                <div className="form-row-split-line"></div>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  name="email" placeholder="Gyōmei@gmail.com" required />
            </div>
            <div className="form-row">
                <label>Subject</label>
                <div className="form-row-split-line"></div>
                <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}  name="subject" placeholder="Web Project . ." required />
            </div>
            <div className="form-row">
                <label>Message</label>
                <div className="form-row-split-line"></div>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  name="message" placeholder="Hello Osama . ." required />
            </div>
            <div className="form-row-buttons">
                <button type="reset" className="reset">RESET</button>
                <button type="submit" className="submit"><i className="fas fa-paper-plane"></i> SEND</button>
            </div>
        </ContactFormContainer>
    )
}
