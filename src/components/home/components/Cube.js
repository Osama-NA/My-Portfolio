import { useState, useRef} from 'react';
import { RoundedBox } from '@react-three/drei';
import {useFrame} from '@react-three/fiber';

export const Cube = ({position, color}) => {
    
    const ref = useRef();
    
    const [scaledOut, isScaledOut] = useState(false);

    const scaleOut = () => isScaledOut(!scaledOut);

    // Rotates cube on z axis
    useFrame(( ) => {
        ref.current.rotation.z += 0.009;
    });

    return(
        <RoundedBox 
            args={[1.5, 1.5, scaledOut?2.5:1.5]} //On click scales z axis out and in
            position={position} 
            radius={0.25} 
            onClick={scaleOut} // on click set 'scaledOut' state to scale z axis of current cube
            ref={ref} 
        >
            <meshPhongMaterial attach="material" color={color?color:'black'} />
        </RoundedBox>
    )
}