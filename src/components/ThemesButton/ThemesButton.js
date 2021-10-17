import {ThemesButtonContainer} from './ThemesButton.styled';
// import {useState, useEffect, useContext} from 'react';
// import {ThemesContext} from '../../contexts/ThemesContext';
// import {lightPinkTheme} from '../../utils/themes';

export const ThemesButton = () => {

    // const { setTheme } = useContext(ThemesContext);

    // const [theme, changeTheme] = useState(lightPinkTheme);

    // useEffect(() => {
    //     setTheme(theme);
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [theme]);

    return(
        <ThemesButtonContainer className="themes-button">
            <i className="fas fa-cog button" />
        </ThemesButtonContainer>
    )
}