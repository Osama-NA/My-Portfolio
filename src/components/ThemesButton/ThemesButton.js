import {ThemesButtonContainer} from './ThemesButton.styled';
import {useState} from 'react';
import {ColoredButton} from './ColoredButton';
import {pinkGrayTheme} from '../../utils/themes';
import {lightBlueGrayTheme} from '../../utils/themes';
import {purpleGrayTheme} from '../../utils/themes';
import {yellowGrayTheme} from '../../utils/themes';
import { greenGrayTheme} from '../../utils/themes';
import { blueishPurpleGrayTheme} from '../../utils/themes';
import { redGrayTheme} from '../../utils/themes';

const themes = [
    blueishPurpleGrayTheme,
    purpleGrayTheme,
    pinkGrayTheme,
    redGrayTheme,
    yellowGrayTheme,
    lightBlueGrayTheme,
    greenGrayTheme
]

export const ThemesButton = () => {

    const [themeBoxStyle, setThemeBoxStyle] = useState({});

    const displayThemeBox = () => setThemeBoxStyle({ animationName: "animateBox" });

    const closeThemeBox = () => setThemeBoxStyle({ animationName: "animateBoxOut" });

    return(
        <ThemesButtonContainer className="themes-button" data-testid="themes-button-container">
            <i className="fas fa-cog button" onClick={displayThemeBox} data-testid="themes-button" /> {/* When clicked opens theme settings*/}

            {/* THEME SETTINGS CONTAINER */}
            <div className="themes-container" style={themeBoxStyle} data-testid="themes-container" >
                <div className="heading">
                    <p>Select a theme</p>
                    <i className="fas fa-times close-btn" onClick={closeThemeBox} />
                </div>
                <div className="themes" data-testid="themes">
                    {themes.map((theme, i) => {
                        return <ColoredButton key={i} thisTheme={theme}></ColoredButton>
                    })}
                </div>
            </div>
        </ThemesButtonContainer>
    )
}