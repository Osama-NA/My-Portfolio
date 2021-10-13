import { RoundedBox } from '@react-three/drei';
import {useState} from 'react';
import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';

export const Cube = ({position, color}) => {
    
    const ref = useRef();

    const [argZ, setArgZ] = useState(1); // Used in the args attribute in RoundedBox as z
    const [scaledOut, isScaledOut] = useState(false);

    const scaleOut = () => {
        if(!scaledOut){
            setArgZ(argZ + 1);
        } else {
            setArgZ(argZ - 1);
        }

        isScaledOut(!scaledOut);
    }

    useFrame(( ) => {
        ref.current.rotation.z += 0.009;
    });

    return(
        <RoundedBox 
            args={[1.5, 1.5, argZ]} 
            position={position} 
            radius={0.25} 
            onClick={scaleOut}
            ref={ref}
        >
            <meshPhongMaterial attach="material" color={color?color:'black'} />
        </RoundedBox>
    )
}