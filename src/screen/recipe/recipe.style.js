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
`;

export default RecipeStyled;
