import styled from "styled-components";

export const ThreeDCubesContainer = styled.div`
  width: 265px;
  height: 265px;
  max-width: 300px;
  max-height: 300px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 125px;
    height: 125px;
  }
`