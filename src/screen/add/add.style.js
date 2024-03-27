import styled from "styled-components";

const AddStyled = styled.div`
  .preview {
    width: 100px;
  }
  .item {
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
    align-items: center;
    > div {
      margin-right: 20px;
    }
    > button {
      height: 40px;
      font-size: 13px;
      display: flex;
      align-self: center;
      margin-right: 10px;
    }
  }
`;

export default AddStyled;
