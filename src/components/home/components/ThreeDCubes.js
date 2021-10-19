import {ThreeDCubesContainer} from '../styles/ThreeDCubes.styled';
import { Canvas } from '@react-three/fiber';
import { Cube } from './Cube.js';
import {Suspense} from 'react';

export const ThreeDCubes = ({ cubesColor }) => {
    return (
        <ThreeDCubesContainer data-testid="threed-cubes" >
            <Suspense fallback={null}>
                <Canvas colorManagement camera={{ position: [0.0001, -0.0001, 5.7] }}> {/* canvas camera adjustment using camera position attribute */}

                    {/* LIGHTING */}
                    <pointLight position={[10, 0, 0]} intensity={.7} />
                    <pointLight position={[-10, 0, 0]} intensity={.7} />
                    <pointLight position={[0, 10, 0]} intensity={.7} />
                    <pointLight position={[0, -10, 0]} intensity={.4} />
                    <pointLight position={[0, 0, 10]} intensity={.2} />
                    <pointLight position={[0, 0, -10]} intensity={.2} />
                    <pointLight position={[-10, 10, 0]} intensity={.3} />
                    <pointLight position={[10, -10, 0]} intensity={.3} />
                    <pointLight position={[0, -10, 10]} intensity={.3} />
                    <pointLight position={[0, 10, -10]} intensity={.3} />
                    <ambientLight intensity={.5} />

                    {/* CUBES */}
                    <Cube position={[-2, 2, 0]} color={cubesColor} /><Cube position={[0, 2, 0]} color={cubesColor} /><Cube position={[2, 2, 0]} color={cubesColor} />
                    <Cube position={[-2, 0, 0]} color={cubesColor} /><Cube position={[0, 0, 0]} color={cubesColor} />
                    <Cube position={[-2, -2, 0]} color={cubesColor} />
                </Canvas>
            </Suspense>
        </ThreeDCubesContainer>
    )
}