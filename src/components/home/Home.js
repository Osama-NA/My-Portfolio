import React from 'react'
import {HomeContainer} from './Home.styled.js';
import {ThreeDCubes} from './nested-components/ThreeDCubes';
import {HelloButton} from './nested-components/HelloButton';

export const Home = ({theme, cubesColor}) => {
    
    return (
        <HomeContainer>
            <div className="designs-container">
                <ThreeDCubes cubesColor={cubesColor}/>
                <HelloButton />
            </div>
            <main className="info-container">

            </main>
            <div className="quote">

            </div>
            <div className="github-icon">

            </div>
        </HomeContainer>
    )
}
