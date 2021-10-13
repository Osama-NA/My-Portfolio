import {ThreeDCubesContainer} from './ThreeDCubes.styled';
import { Canvas } from '@react-three/fiber';
import { Cube } from './3D/Cube.js';

export const ThreeDCubes = ({cubesColor}) => {
    return (
        <ThreeDCubesContainer>
            <Canvas colorManagement camera={{position:[0.0001, -0.0001, 5.7]}}>
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

                <Cube position={[-2, 2, 0]} color={cubesColor} /><Cube position={[0, 2, 0]} color={cubesColor} /><Cube position={[2, 2, 0]} color={cubesColor} />
                <Cube position={[-2, 0, 0]} color={cubesColor} /><Cube position={[0, 0, 0]} color={cubesColor} />
                <Cube position={[-2, -2, 0]} color={cubesColor} />

            </Canvas>
        </ThreeDCubesContainer>
    )
}