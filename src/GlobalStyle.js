import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        padding: 0;
        margin: 0;
        letter-spacing: .6px;
    }
    body{
        color: ${({ theme }) => theme.fontColors.primary};
        width: 100vw;

        background: linear-gradient(
            45deg, 
            ${({ theme }) => theme.backgroundColors.darkSide} 50%, 
            ${({ theme }) => theme.backgroundColors.lightSide} 50%
        );
        background-repeat: no-repeat;
        background-color: ${({ theme }) => theme.backgroundColors.darkSide};
    }
`