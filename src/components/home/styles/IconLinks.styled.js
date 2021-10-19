import styled from 'styled-components';

export const IconLinksContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    //small circles beside git icon
    .circle{
        width: 8.5px;
        height: 8.5px;
        border-radius: 50%;
        margin: 0 1rem;
        background-color: ${({ theme }) => theme.backgroundColors.lightBackground};
    }
    //git icon
    a{
        z-index: 2;
        i{
            opacity: .85;
            font-size: 38px;
            color: ${({ theme }) => theme.fontColors.primary};
            transition: all .1s ease;
            text-shadow: -1px 1px 3px rgb(0 0 0 / 79%);
        }
    }
    a:hover{
        i{
            opacity: 1;
            text-shadow: none;
        }
    }

    @media (max-width: 768px) {
        position: relative;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 0;
        padding-right: 1.1rem;
        padding-bottom: 1.1rem;

        .circle, .circle-2{
            background-color: ${({ theme }) => theme.themeColors.mainColor};
            position: absolute;
            width: 7.5px;
            height: 7.5px;
            bottom: 3.6rem;
            right: .7rem;
        }
        .circle-2{
            position: absolute;
            bottom: 1.8rem;
            right: 2.6rem;
        }
        a{
            i{
                font-size: 28px;
            }
        }
    }
`