import styled from 'styled-components';

export const IconLinksContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    .circle{
        width: 8.5px;
        height: 8.5px;
        border-radius: 50%;
        margin: 0 1rem;
        background-color: ${({ theme }) => theme.backgroundColors.lightBackground};
    }
    a{
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
`