import React from 'react';
import {Link} from 'react-router-dom';
import {InfoContainer} from '../styles/Info.styled';

export const Info = () => {
    return (
        <InfoContainer>
            <h1>Osama Al Hajj Ali</h1>
            <h3>I am a web developer</h3>
            <ul>
                <li><Link to="">Projects</Link></li>
                <li><Link to="">Contact me</Link></li>
                <li><Link to="">About me</Link></li>
            </ul>
        </InfoContainer>
    )
}
