import styled from "styled-components";

const RecipeStyled = styled.div`
  .recipeName {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .image {
    margin-top: 20px;
    img {
      width: 200px;
    }
  }
  .ingredients {
    margin-top: 20px;
    .title {
      font-size: 26px;
    }
    .ingredient {
      display: flex;
      .name {
        font-weight: bold;
        padding-right: 10px;
      }
    }
  }
  .instructions {
    white-space: pre-line;
    margin-top: 20px;
  }
  .back-button {
    position: absolute;
    text-indent: -15px;
    padding: 5px 0 5px 10px;
    width: 53px; /* modified by label length */
    overflow: auto;
    cursor: pointer;
    .label {
      display: block;
      width: auto;
      line-height: 26px;
      font-size: 12px;
      font-weight: 900;
      font-family: helvetica, sans-serif;
      color: #fff;
      text-decoration: none;
      text-align: center;
      border-radius: 4px;
      background-color: rgba(239, 239, 239, 1);
      background-image: linear-gradient(
        top,
        rgba(255, 255, 255, 1) 0%,
        rgba(239, 239, 239, 1) 60%,
        rgba(225, 223, 226, 1) 100%
      );
      box-shadow: 0 1px 3px #cfcfcf;
      border: 1px solid #bcbcbc;
      border-left: 0;
      color: #888;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
      transition: color 0.1s linear 0s;

      &:before {
        float: left;
        margin-top: 1px;
        margin-left: -4px;
        display: block;
        height: 12px;
        width: 15px;
        content: " ";
        transform: skew(-35deg, 0);
        background-color: rgba(239, 239, 239, 1);
        background-image: linear-gradient(
          top,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 1%,
          rgba(240, 240, 240, 1) 100%
        );
        border-left: 1px solid #aaa;
      }

      &:after {
        position: relative;
        margin-top: -13px;
        margin-bottom: 1px;
        margin-left: -4px;
        margin-right: auto;
        display: block;
        height: 12px;
        width: 15px;
        content: " ";
        transform: skew(35deg, 0);
        background-color: rgba(239, 239, 239, 1);
        background-image: linear-gradient(
          top,
          rgba(240, 240, 240, 1) 0%,
          rgba(239, 239, 239, 1) 10%,
          rgba(225, 223, 226, 1) 100%
        );
        border-left: 1px solid #aaa;
        box-shadow: -2px 1px 2px rgba(100, 100, 100, 0.1);
      }

      &:hover {
        color: hsl(210, 100%, 40%);
      }

      &:active {
        background-image: linear-gradient(
          top,
          rgba(230, 230, 230, 1) 0%,
          rgba(239, 239, 239, 1) 60%,
          rgba(225, 223, 226, 1) 100%
        );
        box-shadow: 0 0 1px #cfcfcf, inset 0 1px 2px rgba(0, 0, 0, 0.1),
          0 1px 0 rgba(255, 255, 255, 0.7);

        &:before {
          background-image: linear-gradient(
            top,
            rgba(230, 230, 230, 0) 0%,
            rgba(230, 230, 230, 1) 1%,
            rgba(240, 240, 240, 1) 100%
          );
        }

        &:after {
          box-shadow: -1px 0 0 rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
`;

export default RecipeStyled;
