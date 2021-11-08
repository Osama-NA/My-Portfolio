import React from 'react';
import { AboutContainer } from './styles/About.styled.js';
import { Header } from '../pages_header/Header';

export const About = () => {
    return (
        <AboutContainer>
            <Header page="About" />
        </AboutContainer>
    )
}