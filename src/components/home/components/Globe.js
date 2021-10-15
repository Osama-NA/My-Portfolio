import React, { useRef } from 'react';
import { Sphere} from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export const Globe = ({circleBackground}) => {

    const meshRef = useRef();

    // Rotates the globe
    useFrame(() => meshRef.current.rotation.x = meshRef.current.rotation.z += 0.0025)

    return (
        <>
            <mesh ref={meshRef}>
                <Sphere args={[2.65, 25]}> 
                    <meshStandardMaterial color={circleBackground}  wireframe />
                </Sphere>
            </mesh>
        </>
    )
}