import styled from 'styled-components';

export const ContactFormContainer = styled.form`
    width: 100%;
    border-radius: 10px;
    padding: 2rem;
    background-color: ${({ theme }) => theme.backgroundColors.lightSide};
    box-shadow: 2px 4px 6px 1px rgb(6 6 6 / 20%);

    .form-row{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: .5rem 1rem;
        margin-bottom: 1rem;
        border-radius: 10px 10px 0 0;
        background-color: ${({ theme }) => theme.backgroundColors.darkSide};
        border-bottom: 2px solid ${({ theme }) => theme.themeColors.mainColor};
        
        .form-row-split-line{
            height: 25px; //same height as input
            width: 1.25px;
            min-width: 1.25px;
            border-radius: 4px;
            margin-right: 1rem;
            background-color: ${({ theme }) => theme.fontColors.gray};
        }
        label, input, textarea{
            font-size: 14px;
            font-weight: 300;
            letter-spacing: .75px;
        }
        input, textarea{
            color: ${({ theme }) => theme.fontColors.secondary};
            outline: none;
            border: none;
            background-color: transparent;
            height: 25px;
            max-width: 83%;
            width: 83%;
        }
        label{
            color: ${({ theme }) => theme.fontColors.gray};
            width: 14%;
            min-width: 82.5px;
        }
        textarea{
            padding-top: .1rem;
            resize: vertical;
            min-height: 25px;
            overflow: hidden;
        }
        textarea:focus, input:focus{
           outline: none;
           background-color: transparent;
        }
        textarea::placeholder, input::placeholder{
           color: ${({ theme }) => theme.fontColors.gray};
        }
    }
    .form-row-buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .form-row-buttons > *{
        cursor: pointer;
        font-size: 16px;
        border-radius: 8px;
        outline: none;
        border: none;
        margin-top: 1rem;
        background-color: transparent;
        letter-spacing: 1.75px;
    }

    .reset{
        padding: .5rem 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.fontColors.secondary};
        margin-left: 1rem;
        transition: all .3s ease-out;
    }
    .reset:hover{
        color: ${({ theme }) => theme.fontColors.primary};
    }
    
    @keyframes sendButtonIconAnimation{
        from{
            transform: scale(0);
            opacity: 0;
        }
        to{
            opacity: 1;
            transform: scale(1);
            padding: 0 .5rem 0 1rem;
        }
    }
    @keyframes sendButtonIconAnimationEnd{
        from{
            opacity: 1;
            transform: scale(1);
            padding: 0 .5rem 0 1.25rem;
        }
        to{
            transform: scale(0);
            opacity: 0;
        }
    }
    .submit{
        padding: .5rem 1.25rem .5rem 0;
        border: 1.5px solid ${({ theme }) => theme.themeColors.mainColor};
        font-weight: 600;
        color: ${({ theme }) => theme.themeColors.mainColor};
        
        i{
            opacity: 0;
            animation-name: sendButtonIconAnimationEnd;
            animation-duration: .5s;
            animation-fill-mode: forwards;
        }
    }
    .submit:hover{
        i{
            animation-name: sendButtonIconAnimation;
        }
    }
`