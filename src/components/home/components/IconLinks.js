import React from 'react';
import { IconLinksContainer } from '../styles/IconLinks.styled';

export const IconLinks = () => {
    return (
        <IconLinksContainer data-testid="icon-links">
            <div className="github-link">
                <div>
                    <span>G</span>
                    <span>I</span>
                    <span>T</span>
                    <span>H</span>
                    <span>U</span>
                    <span>B</span>
                </div>
                <a href="https://github.com/Osama-NA" target="_blank" rel="noopener noreferrer" data-testid="github-link">
                    <i className="fab fa-github-square"></i>
                </a>
            </div>
        </IconLinksContainer>
    )
}
