import {ThemesButtonContainer} from './ThemesButton.styled';
import {useState, useContext} from 'react';
import {ThemesContext} from '../../contexts/ThemesContext';
import {lightPinkTheme} from '../../utils/themes';
import {darkPinkTheme} from '../../utils/themes';

const themes = [
    lightPinkTheme,
    darkPinkTheme
]

export const ThemesButton = () => {

    const [themeBoxStyle, setThemeBoxStyle] = useState({});

    const displayThemeBox = () => setThemeBoxStyle({ animationName: "animateBox" });

    const closeThemeBox = () => setThemeBoxStyle({ animationName: "animateBoxOut" });

    return(
        <ThemesButtonContainer className="themes-button">
            <i className="fas fa-cog button" onClick={displayThemeBox} />
            <div className="themes-container" style={themeBoxStyle}>
                <div className="heading">
                    <p>Select a theme</p>
                    <i className="fas fa-times close-btn" onClick={closeThemeBox} />
                </div>
                <div className="themes" >
                    {themes.map((theme, i) => {
                        return <ColoredButton key={i} thisTheme={theme}></ColoredButton>
                    })}
                </div>
            </div>
        </ThemesButtonContainer>
    )
}

const ColoredButton = ({ thisTheme }) => {
    
    const transparentBorder = { border: "none" };
    const selectedBorder = { border: "1.6px solid " + thisTheme.fontColors.primary };
    
    const { theme, setTheme } = useContext(ThemesContext);

    const changeTheme = (newTheme) => setTheme(newTheme);

    return(
        <div
            style={theme === thisTheme ? selectedBorder : transparentBorder }
            className="colored-button" 
            onClick={() => changeTheme(thisTheme)}
        >
            <div 
                className="selected"
                style={{
                    background: `linear-gradient(45deg,
                        ${thisTheme.themeColors.mainColor} 50%,
                        ${thisTheme.backgroundColors.lightSide} 50.1%
                    )`
                }}
            >
            </div>
        </div>
    )
}