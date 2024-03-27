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
    direction: ltr;
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
  
     
 
`;

export default GlobalStyle;
