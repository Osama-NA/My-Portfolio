import styled from 'styled-components';

export const ThemesButtonContainer = styled.div`
    position: fixed;
    top: 2rem;
    right: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1;

    .button{
        position: relative;
        cursor: pointer;
        color: ${({ theme }) => theme.fontColors.primary};
        font-size: 22px;
        border-radius: 8px;
        padding: .65rem;
        transition: all .2s ease;
        background-color: ${({ theme }) => theme.backgroundColors.lightBackground};
        box-shadow: -1px 1px 3px rgb(0 0 0 / 30%);
    }
    .button::after{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

      //Used to animate message box from visible to hidden going to the right side
    @keyframes animateBox {
        0% {
        opacity: 0;
        margin-right: -30rem;
        visibility: hidden;
        }
        100% {
        opacity: 1;
        margin-right: 0rem;
        visibility: visible;
        }
    }

    //Used to animate message box from hidden to visible coming from the right side
    @keyframes animateBoxOut {
        0% {
            opacity: 1;
            margin-right: 0rem;
            visibility: visible;
        }
        100% {
            opacity: 0;
            margin-right: -30rem;
            visibility: hidden;
        }
    }

    .themes-container{
        margin-top: 2rem;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.backgroundColors.lightBackground};
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        box-shadow: -1px 1px 3px rgb(0 0 0 / 30%);
        visibility: hidden;

        .heading{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: .8rem 1.2rem .8rem;
            border-bottom: 1.6px solid ${({ theme }) => theme.backgroundColors.lightSide};

            p{
                color: ${({ theme }) => theme.fontColors.primary};
                font-size: 17px;
                font-weight: 200;
                text-shadow: -1px 1px 3px rgb(0 0 0 / 40%);
            }
            i{
                cursor: pointer;
                font-size: 17px;
                color: ${({ theme }) => theme.themeColors.mainColor};
                transition: all 0.1s ease;
            }
        }
        .themes{
            width: 222px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 1rem;

            .colored-button{
                cursor: pointer;
                width: 41px;
                height: 41px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: .2rem;

                .selected{
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    padding: .5rem;
                }
            }
        }
    }
    @media (min-width: 768px) and (max-width: 1200px){
        top: 1.5rem;
        right: 2rem;

        .button{
            font-size: 18px;
        }
        .themes-container{
            margin-top: 2rem;

            .heading{
                padding: .6rem 1rem .6rem;

                p{
                    font-size: 15px;
                }
                i{
                    font-size: 15px;
                }
            }
            .themes{
                width: 198px;
                padding: .75rem;

                .colored-button{
                    width: 37px;
                    height: 37px;

                    .selected{
                        width: 21px;
                        height: 21px;
                    }
                }
            }
        }
    }
    @media (max-width: 767px) {
        top: 1rem;
        right: 1.5rem;

        .button{
            font-size: 16px;
            padding: .5rem;
            border-radius: 6px;
        }

        .themes-container{
            margin-top: 1rem;
            border-radius: 8px;

            .heading{
                padding: .4rem .8rem;

                p{
                    font-size: 12px;
                    font-weight: 200;
                }
                i{
                    font-size: 12px;
                }
            }
            .themes{
                width: 155px;
                padding: .4rem;

                .colored-button{
                    width: 30px;
                    height: 30px;
                    margin: .15rem;

                    .selected{
                        width: 18px;
                        height: 18px;
                        padding: .4rem;
                    }
                }
            }
        }
    }
`