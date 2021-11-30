import React from 'react';
import { ContactContainer } from './styles/Contact.styled.js';
import { Header } from '../pages_header/Header';
import {ContactForm} from './components/ContactForm';

export const Contact = () => {
    return (
        <ContactContainer>
            <Header page="Contact" />
            <h3 className="contact-heading">Get in touch</h3>
            <main className="contact-container">
                <div className="contact-form">
                    <h4>Send me and email <i className="far fa-envelope"></i></h4>
                    <ContactForm />
                </div>
            </main>
        </ContactContainer>
    )
}
