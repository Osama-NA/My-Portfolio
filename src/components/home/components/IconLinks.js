import React from 'react';
import { IconLinksContainer } from '../styles/IconLinks.styled';

export const IconLinks = () => {
    return (
        <IconLinksContainer>
            <div className="circle"></div>
            <a href="https://github.com/Osama-NA" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <div className="circle circle-2"></div>
        </IconLinksContainer>
    )
}
