import React from 'react'
import {  useContext } from 'react';
import { ThemesContext } from '../../contexts/ThemesContext';

// When clicked changes layout theme colors
export const ColoredButton = ({ thisTheme }) => {

    const transparentBorder = { border: "none" };
    const selectedBorder = { border: "1.6px solid " + thisTheme.fontColors.primary };

    const { theme, setTheme } = useContext(ThemesContext);

    const changeTheme = (newTheme) => setTheme(newTheme);

    return (
        <div
            style={theme === thisTheme ? selectedBorder : transparentBorder}
            className="colored-button"
            onClick={() => changeTheme(thisTheme)}
            data-testid="theme"
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
