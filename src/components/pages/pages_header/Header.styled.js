import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 105px;
    max-width: 1550px;
    padding: 0 8.5rem 0 2.75rem;
    z-index: 1;

    .logo{
        color: ${({ theme }) => theme.themeColors.mainColor};
        text-decoration: none;

        h1{
            font-family: 'Permanent Marker', cursive;
            text-transform:uppercase;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 2.5px;
        }
    }

    nav{
        ul{
            display: flex;
            flex-direction: row;
            list-style: none;

            a{
                color: ${({ theme }) => theme.fontColors.primary};
                text-decoration: none;
                font-size: 18px;
                padding-left: 2rem;
                transition: all .3s ease;
                letter-spacing: 1px;
            }
            a:hover{
                color: ${({ theme }) => theme.themeColors.mainColor};
            }
            .mobile-nav-git-icon{
                display: none;
            }
        }
    }

    .menu-button-container{
        display: none;
    }

    .active-link{
        a{
            color: ${({ theme }) => theme.themeColors.mainColor};
        }
    }
    @media (min-width: 768px) and (max-width: 1200px){
        height: 85px;
        padding: 0 6.5rem 0 2rem;

        .logo{
            h1{
                font-size: 28px;
            }
        }
        nav{
            ul{
                a{
                    font-size: 16px;
                    padding-left: 2rem;
                }
            }
        }
    }
    @media (max-width: 767px){
        height: 65px;
        padding: 0 4.75rem 0 1.5rem;

        .logo{
            h1{
                font-size: 18px;
            }
        }

        @keyframes openMenuAnimation{
            from{
                opacity: 0;
                left: -15rem;
            }
            to{
                opacity: 1;
                left: 0;
            }
        }
        @keyframes closeMenuAnimation{
            from{
                opacity: 1;
                left: 0;
            }
            to{
                opacity: 0;
                left: -15rem;
            }
        }
        nav ul{
            display: none;
            position: relative;
            height: 95vh;
            min-width: 182.5px;
            position: absolute;
            flex-direction: column;
            top: 4rem;
            left: 0;
            padding-top: 1rem;
            border-radius: 0 10px 0 0;
            background-color: ${({ theme }) => theme.backgroundColors.navBackground};
            box-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
            animation-duration: .6s;
            animation-fill-mode: forwards;

            li{
                width: 100%;
                padding: .5rem 1.5rem;
            }
            a{
                font-size: 16px;
                padding-left: 0;
            }
            .active-link{
                border-left: 2.5px solid ${({ theme }) => theme.themeColors.mainColor};
            }
            .mobile-nav-git-icon{
                position: absolute;
                bottom: 1.5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 100%;

                a{
                    text-decoration: none;
                    color: #fff;
                    font-size: 32px;
                    text-shadow: 1px 1px 5px rgb(0 0 0 / 20%);
                    margin: .75rem;
                }
                .circle{
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                    background-color: ${({ theme }) => theme.themeColors.mainColor};
                    box-shadow: 1px 1px 5px rgb(0 0 0 / 20%);
                }
            }
        }

        // NAVIGATION MENU AND BUTTON
        @keyframes dashOneOpenAnimation{
            from{
                top: 0;
                transform: rotateZ(0);
            }
            to{
                top: 6px;
                transform: rotateZ(45deg);
            }
        }
        @keyframes dashOneCloseAnimation{
            from{
                top: 6px;
                transform: rotateZ(45deg);
            }
            to{
                top: 0;
                transform: rotateZ(0);
            }
        }
        @keyframes dashTwoOpenAnimation{
            from{
                opacity: 1;
            }
            to{
                opacity: 0;
            }
        }
        @keyframes dashTwoCloseAnimation{
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
        @keyframes dashThreeOpenAnimation{
            from{
                top: 12px;
                transform: rotateZ(0);
            }
            to{
                top: 6px;
                transform: rotateZ(-45deg);
            }
        }
        @keyframes dashThreeCloseAnimation{
            from{
                top: 6px;
                transform: rotateZ(-45deg);
            }
            to{
                top: 12px;
                transform: rotateZ(0);
            }
        }
        .menu-button-container{
            cursor: pointer;
            display: grid;
            place-items: center;
            width: 32.6px;
            height: 32px;
            border-radius: 6px;
            background-color: ${({ theme }) => theme.backgroundColors.lightBackground};
            box-shadow: -1px 1px 3px rgb(0 0 0 / 30%);

            .mobile-menu-button{
                position: relative;
                display: flex;
                flex-direction: column;
                width: 16px;
                height: 14px;
                z-index: 3;

                .dash{
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: ${({ theme }) => theme.fontColors.secondary};
                    animation-duration: .5s;
                    animation-fill-mode: forwards;
                    animation-timing-function: ease-in-out;
                }
                .dash1{
                    top: 0;
                }
                .dash2{
                    top: 6px;
                }
                .dash3{
                    top: 12px;
                }
            }
        }
    }
`