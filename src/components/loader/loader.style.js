import styled from "styled-components";

const LoaderStyled = styled.div`
  .loader {
    position: ${(props) => props.position};
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 300px;
    text-align: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }
  .loader::before,
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: prixClipFix 2s linear infinite;
  }
  .loader::after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: #ff3d00;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    75%,
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
`;

export default LoaderStyled;
