import styled from 'styled-components';

export const InfoContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    h1{
        color: ${({ theme }) => theme.themeColors.aquaGreen};
        font-size: 54px;
        font-weight: bolder;
        margin: .5rem;
        letter-spacing: 2.5px;
        text-shadow: -3px 3px 5px rgb(0 0 0 / 79%), 2px 2px 2px rgba(70, 70, 70, 0.8);
    }
    h3{
        font-size: 34px;
        font-weight: 600;
        letter-spacing: 2px;
        margin: .5rem;
    }
    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1.5rem;

        li{
            list-style: none;

            a{
                text-decoration: none;
                color: ${({ theme }) => theme.fontColors.gray};
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;
                padding-right: 1rem;
                letter-spacing: 1.5px;
                text-shadow: -2px 2px 4px rgb(0 0 0 / 79%), 1px 1px 1px rgba(70, 70, 70, 0.6);
                transition: all .3s ease;
            }
            a:hover{
                color: ${({ theme }) => theme.fontColors.white};
            }
        }
        li:nth-child(3){
            a{
                padding-right: 0;
            }
        }
    }
`