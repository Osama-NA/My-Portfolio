import styled from 'styled-components';

export const SocialsContainer = styled.section`
    width: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @keyframes socialLinksAnimation{
        from{
            opacity: 0;
            left: 15rem;
        }
        to{
            opacity: 1;
            left: 0;
        }
    }
    a{
        opacity: 0;
        position: relative;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: .75rem 1rem;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.backgroundColors.lightSide};
        box-shadow: 2px 4px 6px 1px rgb(6 6 6 / 20%);
        transition: all .3s ease-out;

        animation-name: socialLinksAnimation;
        animation-duration: .5s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;

        i{
            font-size: 48px;
            margin-left: 1.5rem;
            border-radius: 8px;
            box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        }
        //codewars icon
        svg{
            color: #FA5E5D;
            font-size: 42.75px;
            margin: .15rem 0 .15rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        }
        p{
            color: ${({ theme }) => theme.fontColors.gray};
            font-weight: 300;
            font-size: 16px;
            padding: .25rem 2.5rem;
        }
    }
    a p:nth-child(2){
        width: 170px;
        padding-left: 2.5rem;
        color: ${({ theme }) => theme.fontColors.secondary};
        font-weight: 500;
        border-right: 1.5px solid #505050;
    }
    //github icon
    a:nth-child(1) i{
        color: #f7f7f7;
    }
    //instagram icon
    a:nth-child(3) i{
        display: grid;
        place-items: center;
        color: ${({ theme }) => theme.backgroundColors.lightSide};
        font-size: 32px;
        font-weight: bold;
        height: 42px;
        width: 42px;
        font-weight: bold;
        min-height: 42px;
        min-width: 42px;
        margin: .2rem 0 .2rem 1.5rem;
        background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }
    //whatsapp icon
    a:nth-child(4) i{
        color: #5FDE8E;
    }

    a:hover{
        background-color: ${({ theme }) => theme.backgroundColors.darkSide};
    }

    a:nth-child(2){
        animation-delay: .25s;
    }
    a:nth-child(3){
        animation-delay: .5s;
    }
    a:nth-child(4){
        animation-delay: .75s;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        a{
            padding: 1rem .75rem;

            i{
                font-size: 42px;
                margin-left: 1rem;
            }
            //codewars icon
            svg{
                font-size: 36.75px;
                margin: .15rem 0 .15rem 1rem;
            }
            p{
                font-size: 14px;
                padding: .25rem 1.5rem;
            }
        }
        a p:nth-child(2){
            width: 125px;
            padding-left: 1.5rem;
            border-right: 1.5px solid #505050;
        }
        //instagram icon
        a:nth-child(3) i{
            font-size: 26px;
            height: 36px;
            width: 36px;
            min-height: 36px;
            min-width: 36px;
            margin: .2rem 0 .2rem 1rem;
        }
    }
    @media (max-width: 767px){
        height: auto;
        justify-content: flex-start;

        a{
            height: 70px;
            padding: .5rem 1.25rem;
            margin-bottom: .75rem;

            i{
                font-size: 42px;
                margin-left: 0;
            }
            svg{
                font-size: 36.75px;
                margin: .15rem 0;
            }
            p{
                font-size: 12px;
                padding: .25rem 1rem;
            }
        }
        a p:nth-child(2){
            width: 105px;
            padding-left: 1rem;
        }
        //instagram icon
        a:nth-child(3) i{
            font-size: 26px;
            height: 36px;
            width: 36px;
            min-height: 36px;
            min-width: 36px;
            margin: .2rem 0;
        }
    }
`