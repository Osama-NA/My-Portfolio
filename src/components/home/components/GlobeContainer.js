import React, { Suspense } from 'react'
import { Globe } from './Globe';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const GlobeContainer = ({circleBackground}) => {
    return (
        <div className="globe-container">
            <div className="globe" data-testid="globe">
                <Canvas>
                    <Suspense fallback={null}>

                        {/* LIGHTING */}
                        <pointLight position={[10, 10, 10]} />
                        <pointLight position={[-10, -10, -10]} />
                        <pointLight position={[0, 0, 10]} />
                        <pointLight position={[10, 0, 0]} />
                        <pointLight position={[0, 10, 0]} />
                        <pointLight position={[0, 0, -10]} />
                        <pointLight position={[-10, 0, 0]} />
                        <pointLight position={[0, -10, 0]} />

                        {/* GLOBE */}
                        <Globe circleBackground={circleBackground} />

                        <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}
