import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';

export const Header = ({page}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [dashOneStyle, setDashOneStyle] = useState({});
    const [dashTwoStyle, setDashTwoStyle] = useState({});
    const [dashThreeStyle, setDashThreeStyle] = useState({});
    const [menuStyle, setMenuStyle] = useState({});

    // OPEN MENU AND ADD MENU AND MENU BUTTON ANIMATIONS IF MENU IS NOT SHOWN,
    // OTHERWISE, ADD CLOSE MENU AND MENU BUTTON ANIMATIONS IF MENU IS SHOWN
    const handleMenuButton = () => {
        if (!showMenu) {
            openMenu();
            openMenuButtonAnimation();
        }
        if (showMenu) {
            closeMenu();
            closeMenuButtonAnimation();
        }
        
        setShowMenu(!showMenu);
    }

    // SHOW / HIDE MENU ANIMATIONS
    const openMenu = () => {
        setMenuStyle({ 
            display: 'flex',
            animationName: 'openMenuAnimation'
         });
    }
    const closeMenu = () => {
        setMenuStyle({
            display: 'flex',
            animationName: 'closeMenuAnimation'
        });
    }

    // MENU BUTTON ON CLICK ANIMATIONS
    const openMenuButtonAnimation = () => {
        setDashOneStyle({ animationName: 'dashOneOpenAnimation' });
        setDashTwoStyle({ animationName: 'dashTwoOpenAnimation' });
        setDashThreeStyle({ animationName: 'dashThreeOpenAnimation' });
    }
    const closeMenuButtonAnimation = () => {
        setDashOneStyle({ animationName: 'dashOneCloseAnimation' });
        setDashTwoStyle({ animationName: 'dashTwoCloseAnimation' });
        setDashThreeStyle({ animationName: 'dashThreeCloseAnimation' });
    }

    return (
        <HeaderContainer>
            {/* NAME LOGO */}
            <Link to="/" className="logo">
                <h1>Osama Al Haj Ali</h1>
            </Link>

            {/* NAVIGATION MENU */}
            <nav>
                {/* MENU BUTTON (IN MOBILE ONLY) */}
                <div className="menu-button-container" onClick={handleMenuButton}>
                    <div className="mobile-menu-button">
                        <div className="dash dash1" style={dashOneStyle}></div>
                        <div className="dash dash2" style={dashTwoStyle}></div>
                        <div className="dash dash3" style={dashThreeStyle}></div>
                    </div>
                </div>

                {/* NAVIGATION MENU LIST */}
                <ul style={menuStyle}>
                    <li><Link to="/">Home</Link></li>
                    {/* If page prop is equal to current page name, then set active-link class to current page link*/}
                    <li className={page === "Projects" ? "active-link" : ""}><Link to="/Projects">Projects</Link></li>
                    <li className={page === "About" ? "active-link" : ""}><Link to="/About">About</Link></li>
                    <li className={page === "Contact"?"active-link":""}><Link to="/Contact">Contact</Link></li>
                    
                    <li className="mobile-nav-git-icon">
                        {/* mini circle beside git icon */}
                        <div className="circle"></div>

                        {/* Github link icon */}
                        <a href="https://github.com/Osama-NA" target="_blank" rel="noopener noreferrer" data-testid="github-link">
                            <i className="fab fa-github"></i>
                        </a>

                        {/* mini circle beside git icon */}
                        <div className="circle circle-2"></div>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}
