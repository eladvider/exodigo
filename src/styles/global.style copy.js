import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: darkgrey;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
      .title{
        font-weight: bold;
        font-size: 20px;
      }
    body {
    margin: 0;
    padding: 0;
    direction: rtl;
    font-family: 'Alef', sans-serif;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(29,70,189,1) 35%, rgba(0,212,255,1) 100%);
    /* Add more global styles here */
svg{
  width: 40px;
  height: 40px;
}
    main{
        width: 1024px;
        min-height: 700px;
        margin: 30px auto;
        background: white;
        padding:10px;
        box-shadow: 0 0 10px ;
        overflow:hidden;
        display: flex;
        flex-direction: column;
        .footer{
        height: 100px;
        margin-top: auto;
        }
    }
  }
    .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        inset: 8px;
        transform: rotate3d(90, 90, 0, 180deg );
        border-color: #FF3D00;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
  }
  .select-question-wrapper {
    height: 400px;
    overflow: auto;
  } 
`;

export default GlobalStyle;
