import styled from 'styled-components';

export const QuoteContainer = styled.div`
    position: relative;
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100px;

    p{
        color: ${({ theme }) => theme.fontColors.primary };
        position:absolute;
        font-size: 22px;
        letter-spacing: 2px;

        span{
            color: ${({ theme }) => theme.themeColors.mainColor }
        }
    }
    .learn{
        top: 0px;
    }
    .develop{
        top: 35px;
    }
    .mac{
        top: 70px;

        // to toggle cursor opacity every .8s
        @keyframes cursorToggle{
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }
        span{
            animation-name: cursorToggle;
            animation-duration: .8s;
            animation-iteration-count: infinite;
        }
    }
`