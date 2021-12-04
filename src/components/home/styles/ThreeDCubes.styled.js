import styled from "styled-components";

export const ThreeDCubesContainer = styled.div`
  width: 235px;
  height: 235px;
  max-width: 235px;
  max-height: 235px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  margin-left: 1.25rem;

  @media (max-width: 768px) {
    width: 125px;
    height: 125px;
    margin-left: 0;
  }
`