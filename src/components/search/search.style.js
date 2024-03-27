import styled from "styled-components";
const primary = "#0B1654";
const secondary = "#02C9FA";
const white = "black";
const gray = "#9b9b9b";
const SearchStyled = styled.div`
  position: relative;
  .searchInput {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
    display: flex;
    .loader {
      position: absolute;
      right: -20px;
      top: 10px;
    }
    .label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${gray};
    }
    .input {
      font-family: inherit;
      width: 100%;
      border: 0;
      border-bottom: 2px solid ${gray};
      outline: 0;
      font-size: 1.3rem;
      color: ${white};
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.2s;

      &::placeholder {
        color: transparent;
      }

      &:placeholder-shown ~ .label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
      }
    }
    .input:focus {
      ~ .label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: ${primary};
        font-weight: 700;
      }
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, ${primary}, ${secondary});
      border-image-slice: 1;
    }
  }
  .results {
    display: none;
    height: 300px;
    z-index: 10;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    position: absolute;
    width: 100%;
    ${({ results }) =>
      results &&
      results.length &&
      `
     display:block
    }
    `};
    .item {
      cursor: pointer;
      padding: 5px 10px;

      &:last-child {
        border-bottom-right-radius: 10px;
      }
      &:nth-child(odd) {
        background-color: gray;
      }

      /* Selects even-numbered elements */
      &:nth-child(even) {
        background-color: white;
        color: black;
      }
    }
  }
`;

export default SearchStyled;
