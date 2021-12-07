import React from 'react'
import {HomeContainer} from './styles/Home.styled.js';
import {ThreeDCubes} from './components/ThreeDCubes';
import { ThemesButton } from '../ThemesButton/ThemesButton.js';
import { Info } from './components/Info';
import {Quote} from './components/Quote';
import { IconLinks } from './components/IconLinks';

export const Home = ({cubesColor, circleBackground}) => {
    return (
        <HomeContainer data-testid="home">
            <header>
                <ThreeDCubes cubesColor={cubesColor} />
                <ThemesButton className="themes-button"/>
            </header>
            <Info circleBackground={circleBackground} />
            <footer>
                <Quote />
                <IconLinks />
            </footer>
        </HomeContainer>
    )
}