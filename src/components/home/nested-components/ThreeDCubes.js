import {ThreeDCubesContainer} from './ThreeDCubes.styled';
import {RoundedBox, OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export const ThreeDCubes = () => {
    return (
        <ThreeDCubesContainer>
            <Canvas colorManagement camera={{ position: [-1, 1, 5] }} >
                <ambientLight intensity={1} />
                <pointLight position={[0, 10, 0]} intensity={.5} />
                <pointLight position={[-10, 10, 0]} intensity={1.5} />
                <pointLight position={[-10, 0, 0]} intensity={.5} />
                <pointLight position={[0, 0, 10]} intensity={.2} />
                <ambientLight intensity={.5} />
                <RoundedBox args={[1.5, 1.5, 1.5]} position={[0, 0, 0]} radius={0.2} smoothness={10}>
                    <meshPhongMaterial attach="material" color="green" />
                </RoundedBox>
                <RoundedBox args={[1.5, 1.5, 1.5]} position={[1.8, 0, 0]} radius={0.2} smoothness={10}>
                    <meshPhongMaterial attach="material" color="green" />
                </RoundedBox>
                <RoundedBox args={[1.5, 1.5, 1.5]} position={[3.8, 0, 0]} radius={0.2} smoothness={10}>
                    <meshPhongMaterial attach="material" color="green" />
                </RoundedBox>
            </Canvas>
        </ThreeDCubesContainer>
    )
}