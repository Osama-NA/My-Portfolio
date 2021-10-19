import React, {useState, useEffect} from 'react'
import Particles from 'react-particles-js';


export const BackgroundParticles = () => {

    const [canvasStyle, setCanvasStyle] = useState({ display: "none" })

    useEffect(() => {
        setTimeout(() => {
            const style = {
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "-1"
            }
            setCanvasStyle(style);
        }, 2000);
    });

    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": window.screen.width > 768 ? 310 : 120 // reduce number of stars to 120 for mobile devices
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "opacity": {
                        "value": 0.3,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 0.2
                        }
                    },
                    "size": {
                        "value": 1.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 2
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 0.8,
                        "direction": "right",
                        "random": true,
                        "straight": false,
                        "out_mode": "out"
                    }
                }
            }}
            style={canvasStyle} 
        />
    )
}
