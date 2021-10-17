import styled from 'styled-components';

export const ThemesButtonContainer = styled.div`

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
`