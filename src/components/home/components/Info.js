import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {InfoContainer} from '../styles/Info.styled';
import {WavyCircle} from './WavyCircle';

export const Info = ({circleBackground}) => {
    return (
        <InfoContainer>
            <h1>Osama Al Hajj Ali</h1>
            <h3>I am a web developer</h3>
            <ul>
                <li><Link to="">Projects</Link></li>
                <li><Link to="">Contact me</Link></li>
                <li><Link to="">About me</Link></li>
            </ul>
            <div className="globe-container">
                <div className="globe">
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