import React from 'react'
import {HomeContainer} from './Home.styled.js';
import {ThreeDCubes} from './nested-components/ThreeDCubes';
import {HelloButton} from './nested-components/HelloButton';

export const Home = () => {
    return (
        <HomeContainer>
            <div className="designs-container">
                <ThreeDCubes />
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
