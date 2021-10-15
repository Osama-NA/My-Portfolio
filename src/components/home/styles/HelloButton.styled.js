import styled from "styled-components";

export const HelloButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 2rem;

  @keyframes animateBox {
    0% {
      opacity: 0;
      margin-right: -30rem;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      margin-right: 0rem;
      visibility: visible;
    }
  }
  @keyframes animateBoxOut {
    0% {
      opacity: 1;
      margin-right: 0rem;
      visibility: visible;
    }
    100% {
      opacity: 0;
      margin-right: -30rem;
      visibility: hidden;
    }
  }

  .hello-btn {
    font-size: 24px;
    font-weight: 300;
    cursor: pointer;
    padding: 2rem 0;
    color: ${({ theme }) => theme.fontColors.gray};
  }
  .message-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    alight-items: center;
    padding: 0.6rem 1rem 0.8rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.backgroundColors.lightGray};
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    visibility: hidden;

    p, a {
      color: ${({ theme }) => theme.fontColors.white};
      font-size: 18px;
      font-weight: 200;
      padding-right: 3rem;
      letter-spacing: .8px;
      opacity: .7;
    }
    a {
      padding-right: 0;
      padding-bottom: .2rem;
      text-decoration: none;
      border-bottom: 1px solid ${({ theme }) => theme.themeColors.aquaGreen};
    }
    i {
      cursor: pointer;
      align-self: center;
      color: ${({ theme }) => theme.themeColors.aquaGreen};
      opacity: 0.8;
    }
    i:hover {
      opacity: 1;
    }
  }
`;
