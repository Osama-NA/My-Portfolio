import React from 'react'
import {HomeContainer} from './styles/Home.styled.js';
import {ThreeDCubes} from './components/ThreeDCubes';
import { HelloButton } from './components/HelloButton';
import { Info } from './components/Info';
import {Quote} from './components/Quote';
import { IconLinks } from './components/IconLinks';
import {ThemesButton} from '../ThemesButton/ThemesButton';

export const Home = ({cubesColor, circleBackground}) => {
    
    return (
        <HomeContainer data-testid="home">
            <div className="designs-container">
                <ThreeDCubes cubesColor={cubesColor}/>
                <HelloButton />
            </div>
            <Info circleBackground={circleBackground} />
            <footer>
                <Quote />
                <IconLinks />
                <ThemesButton />
            </footer>
        </HomeContainer>
    )
}