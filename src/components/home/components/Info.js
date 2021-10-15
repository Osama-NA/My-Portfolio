import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {InfoContainer} from '../styles/Info.styled';
import {WavyCircle} from './WavyCircle';

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
            <div className="globe-container">
                <div className="globe" data-testid="globe">
                    <Canvas>
                        <Suspense fallback={null}>
                            <pointLight position={[10, 10, 10]} />
                            <pointLight position={[-10, -10, -10]} />
                            <pointLight position={[0, 0, 10]} />
                            <pointLight position={[10, 0, 0]} />
                            <pointLight position={[0, 10, 0]} />
                            <pointLight position={[0, 0, -10]} />
                            <pointLight position={[-10, 0, 0]} />
                            <pointLight position={[0, -10, 0]} />
                            <WavyCircle circleBackground={circleBackground} />
                            <OrbitControls />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </InfoContainer>
    )
}