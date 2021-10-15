import styled from 'styled-components';

export const InfoContainer = styled.main`
    position: relative;
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    z-index: 0;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;  

    h1{
        color: ${({ theme }) => theme.themeColors.mainColor};
        font-size: 54px;
        font-weight: bolder;
        margin: .5rem;
        letter-spacing: 2.5px;
        text-shadow: -1px 1px 4px rgb(0 0 0 / 79%);
    }
    h3{
        font-size: 34px;0.5
        font-weight: 600;
        letter-spacing: 2px;
        margin: .5rem;
    }
    nav{
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
                    color: ${({ theme }) => theme.fontColors.secondary};
                    font-size: 16px;
                    font-weight: 400;
                    text-transform: uppercase;
                    padding-right: 1rem;
                    letter-spacing: 1.5px;
                    text-shadow: -1px 1px 3px rgb(0 0 0 / 79%);
                    transition: all .3s ease;
                }
                a:hover{
                    color: ${({ theme }) => theme.themeColors.mainColor};
                }
            }
            li:nth-child(3){
                a{
                    padding-right: 0;
                }
            }
        }
    }
    .globe-container{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.backgroundColors.darkSide};
        width: 600px;
        height: 600px;
        border-radius: 50%;
        z-index: -1;

        .globe{
            width: 350px;
            height: 350px;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.25;
        }
    }
`