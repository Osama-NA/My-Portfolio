import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    max-width: 1550px;
    max-height: 950px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .designs-container{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    footer{
        position: relative;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 2rem;
        width: 100%;
        min-height: 100px;
    }
`