import styled from "styled-components";

export const HelloButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  margin: 0 2rem;
  z-index: 1;

  //Used to animate message box from visible to hidden going to the right side
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

  //Used to animate message box from hidden to visible coming from the right side
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
    color: ${({ theme }) => theme.fontColors.secondary};
    text-shadow: -1px 1px 3px rgb(0 0 0 / 60%);
  }
  .message-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    alight-items: center;
    padding: 0.6rem 1rem 0.8rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.backgroundColors.lightBackground};
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    visibility: hidden;

    p, a {
      color: ${({ theme }) => theme.fontColors.primary};
      font-size: 18px;
      font-weight: 200;
      padding-right: 3rem;
      letter-spacing: .8px;
      text-shadow: -1px 1px 3px rgb(0 0 0 / 40%);
    }
    a {
      color: ${({ theme }) => theme.themeColors.mainColor};
      font-weight: 400;
      padding-right: 0;
      padding-bottom: .2rem;
      text-decoration: none;
    }
    i {
      cursor: pointer;
      font-size: 17px;
      align-self: center;
      color: ${({ theme }) => theme.themeColors.mainColor};
      opacity: 0.8;
      text-shadow: -1px 1px 3px rgb(0 0 0 / 30%);
      transition: all 0.1s ease;
    }
    i:hover {
      opacity: 1;
    }
  }
`;
