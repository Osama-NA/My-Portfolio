import styled from 'styled-components';

export const QuoteContainer = styled.div`
    position: relative;
    width: 30%;
    height: 100px;
    margin: 2rem;

    .quote{
        color: ${({ theme }) => theme.themeColors.mainColor };
        font-size: 18px;
        position: absolute;
        top: -25px;
        text-shadow: -1px 1px 3px rgb(0 0 0 / 79%);
    }
    p{
        color: ${({ theme }) => theme.fontColors.primary };
        position:absolute;
        font-size: 22px;
        letter-spacing: 2px;
        text-shadow: -1px 1px 3px rgb(0 0 0 / 79%);

        span{
            color: ${({ theme }) => theme.themeColors.mainColor }
        }
    }
    .learn{
        top: 5px;
    }
    .develop{
        top: 40px;
    }
    .mac{
        top: 75px;
    }
`