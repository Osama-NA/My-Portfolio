import styled from 'styled-components';

export const ThemesButtonContainer = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .button{
        position: relative;
        cursor: pointer;
        color: ${({ theme }) => theme.fontColors.primary};
        font-size: 22px;
        border-radius: 8px;
        padding: .65rem;
        opacity: .7;
        transition: all .2s ease;
        background-color: ${({ theme }) => theme.backgroundColors.darkSide};
    }
    .button:hover{
        opacity: 1;
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
                text-shadow: -1px 1px 3px rgb(0 0 0 / 30%);
                opacity: 0.8;
                transition: all 0.1s ease;
            }
            i:hover {
                opacity: 1;
            }
        }
        .themes{
            width: 243px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 1rem;

            .colored-button{
                cursor: pointer;
                width: 46px;
                height: 46px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: .2rem;

                .selected{
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    padding: .5rem;
                    // background: linear-gradient(
                    //     45deg,
                    //     ${({ theme }) => theme.themeColors.mainColor} 50%, 
                    //     ${({ theme }) => theme.backgroundColors.lightSide} 50.1%
                    // );
                }
            }
        }
    }
`