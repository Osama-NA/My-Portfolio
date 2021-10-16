import React from 'react'
import {HomeContainer} from '../styles/Home.styled.js';
import {ThreeDCubes} from './ThreeDCubes';
import {HelloButton} from './HelloButton';
import {Info} from './Info';
import {Quote} from './Quote';
import {IconLinks} from './IconLinks';

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
            </footer>
        </HomeContainer>
    )
}