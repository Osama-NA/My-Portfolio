import styled from 'styled-components';

export const IconLinksContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    a{
        i{
            font-size: 38px;
            color: ${({ theme }) => theme.fontColors.primary};
            transition: all .3s ease;
        }
    }
    a:hover{
        i{
            color: ${({ theme }) => theme.themeColors.mainColor};
        }
    }
`