import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    max-width: 1550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    
    header, footer{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    header{
        z-index: 1;

        .themes-button{
            margin: 1.75rem 1.75rem 0 0;
        }
    }
    footer{
        min-height: 60px;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 1.75rem;
    }
`