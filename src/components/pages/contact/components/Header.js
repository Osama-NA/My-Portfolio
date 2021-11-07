import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../styles/Header.styled';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [dashOneStyle, setDashOneStyle] = useState({});
    const [dashTwoStyle, setDashTwoStyle] = useState({});
    const [dashThreeStyle, setDashThreeStyle] = useState({});
    const [menuStyle, setMenuStyle] = useState({});

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

    // SHOW / HIDE MENU
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
            <Link to="/" className="logo">
                <h1>Osama Al Haj Ali</h1>
            </Link>
            <nav>
                <div className="menu-button-container" onClick={handleMenuButton}>
                    <div className="mobile-menu-button">
                        <div className="dash dash1" style={dashOneStyle}></div>
                        <div className="dash dash2" style={dashTwoStyle}></div>
                        <div className="dash dash3" style={dashThreeStyle}></div>
                    </div>
                </div>
                <ul style={menuStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li className="active-link"><Link to="/Contact">Contact</Link></li>
                    
                    <li className="mobile-nav-git-icon">
                        {/* mini circle beside git icon */}
                        <div className="circle"></div>

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
