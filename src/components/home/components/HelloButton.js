import {useState} from 'react';
import {HelloButtonContainer} from '../styles/HelloButton.styled';
import {Link} from 'react-router-dom';

export const HelloButton = () => {

    const [messageBoxStyle, setMessageBoxStyle] = useState({});

    const displayMessageBox = () => {
        setMessageBoxStyle(animateMessageBoxIn);
    }

    const closeMessageBox = () => {
        setMessageBoxStyle(animateMessageBoxOut);
    }

    const animateMessageBoxIn = {
        animationName: "animateBox"
    }

    const animateMessageBoxOut = {
        animationName: "animateBoxOut"
    }

    return(
        <HelloButtonContainer data-testid="hello-button">
            <p onClick={displayMessageBox} className="hello-btn" >Hello there<span>!</span></p>

            {/* MESSAGE BOX */}
            <div 
                className="message-box"
                data-testid="message-box"
                style={messageBoxStyle}
            >
                <p>
                    Don’t waste your time clicking a hello text, 
                    <Link to="/Router/Projects" data-testid="message-box-link"> view my work here.</Link>
                </p>

                {/* CLOSE BUTTON */}
                <i 
                    className="fas fa-times close-btn"
                    onClick={closeMessageBox}
                ></i>
            </div>
        </HelloButtonContainer>
    )
}