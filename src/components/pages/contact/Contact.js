import React, {useContext, useEffect, useState} from 'react';
import { ContactContainer } from './styles/Contact.styled.js';
import { Header } from '../pages_header/Header';
import { ContactForm } from './components/ContactForm';
import { Socials } from './components/Socials';
import { EmailSuccessContext} from '../../../contexts/EmailSuccessContext.js';

export const Contact = () => {

    const { emailSuccessState, setEmailSuccess } = useContext(EmailSuccessContext);

    const [displayEmailSuccessMessage, setDisplayEmailSuccessMessage] = useState({ display: "none" });

    const closeSuccessMessageContainer = () => setDisplayEmailSuccessMessage({ display: "none" });

    // Displays email success message, when emailSuccessState is set in child component 'ContactForm'
    useEffect(() => {
        if (emailSuccessState) {
            setDisplayEmailSuccessMessage({ display: "grid" });
        }
    }, [emailSuccessState])

    // Hides email success message, when closeSuccessMessageContainer is called
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
                    <div className="contact-socials">
                        <h4>
                            <i className="fas fa-hashtag"></i>
                            Check out my socials
                        </h4>
                        <Socials />
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
