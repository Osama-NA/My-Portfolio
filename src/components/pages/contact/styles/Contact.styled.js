import styled from 'styled-components';

export const ContactContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
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
        margin: 1.7rem 2.7rem;
        letter-spacing: 1px;

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
        width: 100%;
        max-width: 1550px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 2.75rem;

        @keyframes contactFormAnimation{
            from{
                opacity: 0;
                top: 10rem;
            }
            to{
                opacity: 1;
                top: 0rem;
            }
        }
        @keyframes contactSocialsAnimation{
            from{
                opacity: 0;
                left: 10rem;
            }
            to{
                opacity: 1;
                left: 0rem;
            }
        }
        .contact-form, .contact-socials{
            position: relative;
            width: 48.5%;
            display: flex;
            flex-direction: column;

            h4{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 1rem;
                letter-spacing: 1px;

                i{
                    padding-right: 1rem;
                    padding-left: 2rem;
                    color: ${({ theme }) => theme.themeColors.mainColor};
                }
            }
        }
        .contact-form{
            animation-name: contactFormAnimation;
            animation-duration: .5s;
            animation-timing-function: ease-out;
        }
        .contact-socials h4{
            position: relative;
            animation-name: contactSocialsAnimation;
            animation-duration: .5s;
            animation-timing-function: ease-out;
        }
    }

    .email-success-message-container{
        position: absolute;
        top: 0;
        left: 0;

        place-items: center;
        width: 100vw;
        height: 100vh;
        background-color: #0000005a;
        
        .email-success-message{
            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 1rem 2rem;
            background-color: ${({ theme }) => theme.backgroundColors.lightSide};
            border-radius: 10px;
            
            h6{
                font-size: 18px;

                i{
                    padding-right: 1rem;
                    color: ${({ theme }) => theme.themeColors.mainColor};
                }
            }
            p{
                color: gray;
                font-size; 16px;
                font-weight: 400;
                margin-top: 1rem;
            }
        }
    }
`