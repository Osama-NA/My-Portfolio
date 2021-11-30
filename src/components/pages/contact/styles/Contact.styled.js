import styled from 'styled-components';

export const ContactContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 1550px;

    @keyframes headingAnimation{
        from{
            opacity: 0;
            left: -10rem;
        }
        to{
            opacity: 1;
            left: 0;
        }
    }
    .contact-heading{
        position: relative;
        font-size: 26px;
        padding-left: 2.25rem;
        margin: 2rem 2.7rem;

        animation-name: headingAnimation;
        animation-duration: .5s;
        animation-timing-function: ease-out;
    }
    .contact-heading::after{
        content: '';
        position: absolute;
        top: -10%; 
        left: 0;
        height: 120%;
        width: 5px;
        border-radius: 4px;
        background-color: ${({ theme}) => theme.themeColors.mainColor};
    }
    .contact-container{
        width: 100vw;
        height: auto;
        max-width: 1550px;
        display: flex;
        flex-direction: row;
        margin: 0 2.7rem;
        background-color: red;
    }
`