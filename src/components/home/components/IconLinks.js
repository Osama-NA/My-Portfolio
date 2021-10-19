import React from 'react';
import { IconLinksContainer } from '../styles/IconLinks.styled';

export const IconLinks = () => {
    return (
        <IconLinksContainer data-testid="icon-links"> 
            {/* mini circle beside git icon */}
            <div className="circle"></div>

            {/* GIT LINK ICON */}
            <a href="https://github.com/Osama-NA" target="_blank" rel="noopener noreferrer" data-testid="github-link">
                <i className="fab fa-github"></i>
            </a> 

            {/* mini circle beside git icon */}
            <div className="circle circle-2"></div>
        </IconLinksContainer>
    )
}
