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
            opacity: .9;
            font-size: 38px;
            color: ${({ theme }) => theme.fontColors.primary};
            transition: all .2s ease;
        }
    }
    a:hover{
        i{
            color: ${({ theme }) => theme.backgroundColors.lightBackground};
            text-shadow: none;
        }
    }
`