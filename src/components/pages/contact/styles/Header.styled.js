import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1.25rem 6.85rem 0 2.5rem;

    .logo{
        color: ${({ theme }) => theme.themeColors.mainColor};
        text-decoration: none;

        h1{
            font-family: 'Jaldi', sans-serif;
            text-transform:uppercase;
            font-size: 38px;
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
            }
            a:hover{
                color: ${({ theme }) => theme.themeColors.mainColor};
            }
        }
    }

    .active-link{
        color: ${({ theme }) => theme.themeColors.mainColor};
    }

    .menu-button-container{
        display: none;
    }

    @media (max-width: 767px){
        nav ul{
            display: none;
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