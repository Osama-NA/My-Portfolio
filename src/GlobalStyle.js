import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        padding: 0;
        margin: 0;
    }
    body{
        color: ${({ theme }) => theme.fontColors.white};
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
            35deg, 
            ${({ theme }) => theme.backgroundColors.darkerGray} 50%, 
            ${({ theme }) => theme.backgroundColors.darkGray} 50%
        );
    }
`