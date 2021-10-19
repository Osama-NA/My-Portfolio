import React, {useState, useEffect} from 'react'
import Particles from 'react-particles-js';


export const BackgroundParticles = () => {

    const [canvasStyle, setCanvasStyle] = useState({ display: "none" })

    useEffect(() => {
        //setting particles to be at the very background behind all elements
        const style = {
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-2"
        }
        setCanvasStyle(style);
    }, []);

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
                        "value": 1.5, //stars size
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
                        "speed": 0.8, //movement speed to right
                        "direction": "right", //to allow the stars to move right
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
