import React, {useContext, useEffect, useState} from 'react';
import { ContactContainer } from './styles/Contact.styled.js';
import { Header } from '../pages_header/Header';
import { ContactForm } from './components/ContactForm';
import { EmailSuccessContext} from '../../../contexts/EmailSuccessContext.js';

export const Contact = () => {

    const { emailSuccessState, setEmailSuccess } = useContext(EmailSuccessContext);

    const [displayEmailSuccessMessage, setDisplayEmailSuccessMessage] = useState({ display: "none" });

    const closeSuccessMessageContainer = () => setDisplayEmailSuccessMessage({ display: "none" });

    useEffect(() => {
        if (emailSuccessState) {
            setDisplayEmailSuccessMessage({ display: "grid" });
        }
    }, [emailSuccessState])

    useEffect(() => {
        setEmailSuccess(false);
    }, [displayEmailSuccessMessage, setEmailSuccess])

    return (
            <ContactContainer>
                <Header page="Contact" />
                <h3 className="contact-heading">Get in touch</h3>
                <main className="contact-container">
                    <div className="contact-form">
                        <h4>
                            <i className="far fa-envelope"></i>
                            Send me an email
                        </h4>
                        <ContactForm />
                    </div>
                </main>
                <div 
                className="email-success-message-container" 
                onClick={closeSuccessMessageContainer}
                style={displayEmailSuccessMessage}
                >
                    <div className="email-success-message">
                        <h6>
                            <i className="fas fa-check-circle"></i>
                            Email Successfully Sent
                        </h6>
                        <p>Click anywhere</p>
                    </div>
                </div>
            </ContactContainer>
    )
}
