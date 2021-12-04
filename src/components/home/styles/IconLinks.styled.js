import styled from 'styled-components';

export const IconLinksContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 2rem;

    .github-link{
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-right: 3.5rem;
            padding-bottom: .25rem;
            
            @keyframes githubTextAnimation{
                from{
                    opacity: 0;
                    right: -5rem;
                }
                to{
                    opacity: 1;
                    right: 0rem;
                }
            }
            span{
                -webkit-user-select: none;  /* Chrome all / Safari all */
                -moz-user-select: none;     /* Firefox all */
                -ms-user-select: none;      /* IE 10+ */
                user-select: none;

                position: relative;
                opacity: 0;
                color: ${({ theme }) => theme.fontColors.secondary};
                font-size: 16px;
                font-weight: 700;
                padding-bottom: .5rem;
                text-shadow: -1px 1px 3px rgb(0 0 0 / 60%);

                animation: githubTextAnimation .4s ease-out forwards;
            }
            span:hover{
                color: ${({ theme }) => theme.themeColors.mainColor};
            }
            
        }
        div span:nth-child(2){
            animation-delay: .2s;
        }
        div span:nth-child(3){
            animation-delay: .4s;
        }
        div span:nth-child(4){
            animation-delay: .6s;
        }
        div span:nth-child(5){
            animation-delay: .8s;
        }
        div span:nth-child(6){
            animation-delay: 1s;
        }

        a{
            opacity: 0;
            padding: 0 .1rem;
            margin-right: 3.5rem;
            z-index: 2;
            animation: githubTextAnimation .4s ease-out forwards;
            animation-delay: 1.2s;

            i{
                opacity: .9;
                font-size: 48px;
                color: ${({ theme }) => theme.themeColors.mainColor};
                text-shadow: -1px 1px 10px rgb(0 0 0 / 40%);
                transition: all .1s ease;
            }
        }
        a:hover{
            i{
                opacity: 1;
            }
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 1rem;
        
        .github-link{
            div{
                padding-right: 1rem;
                padding-bottom: .15rem;

                span{
                    font-size: 10px;
                    padding-bottom: .3rem;
                }
            }

            a{
                margin-right: 1rem;

                i{
                    opacity: .7;
                    font-size: 32px;
                }
            }
        }
`