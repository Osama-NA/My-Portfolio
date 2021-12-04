import styled from 'styled-components';

export const QuoteContainer = styled.div`
    position: relative;
    min-width: 30%;
    height: 100px;
    margin: 2rem 3.5rem;
    align-self: flex-end;
    z-index: -1;

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
        font-size: 20px;
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

    @media (max-width: 768px) {
        height: 60px;
        min-width: 140px;
        margin: 1rem;

        .quote{
            font-size: 13px;
            top: -20px;
        }
        p{
            position:absolute;
            font-size: 12px;
            font-weight: 400;
        }
        .learn{
            top: 0px;
        }
        .develop{
            top: 20px;
        }
        .mac{
            top: 40px;
        }
    }
`