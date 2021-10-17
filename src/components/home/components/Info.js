import React from 'react';
import { Link } from 'react-router-dom';
import { InfoContainer } from '../styles/Info.styled';
import { GlobeContainer } from './GlobeContainer';

export const Info = ({circleBackground}) => {
    return (
        <InfoContainer data-testid="info">
            <h1>Osama Al Hajj Ali</h1>
            <h3>I am a web developer</h3>

            <nav>
                <ul data-testid="nav-bar">
                    <li><Link to="/Router/Projects" data-testid="projects-link">Projects</Link></li>
                    <li><Link to="/Router/Contacts" data-testid="contacts-link">Contact me</Link></li>
                    <li><Link to="/Router/About" data-testid="about-link">About me</Link></li>
                </ul>
            </nav>

            <GlobeContainer circleBackground={circleBackground} />
        </InfoContainer>
    )
}