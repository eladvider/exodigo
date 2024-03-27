import styled from "styled-components";

const CocktailStyled = styled.div`
  .header {
    display: flex;
    align-items: center;
    .serachBar {
      width: 500px;
      margin-bottom: 20px;
      margin-left: 112px;
    }
    .add {
      align-items: center;
      appearance: none;
      background-image: radial-gradient(
        100% 100% at 100% 0,
        #5adaff 0,
        #5468ff 100%
      );
      border: 0;
      border-radius: 6px;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
        rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-family: "JetBrains Mono", monospace;
      height: 38px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      padding-left: 16px;
      padding-right: 16px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow 0.15s, transform 0.15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow, transform;
      font-size: 18px;
      margin-left: auto;
      margin-right: 120px;
      > div {
        margin-right: 5px;
      }
    }
  }
  .slick-prev:before,
  .slick-next:before {
    color: #0c195a;
    font-size: 32px;
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -50px;
  }
  .slick-dots li button:before {
    color: #0c195a;
    font-size: 20px;
  }
  .sliderWrappere {
    width: 80%;
    margin: 60px auto;
    .item {
      margin: 10px;
      position: relative;
      padding: 2% 0;
      .name {
        background: white;
        opacity: 0.85;
        position: absolute;
        width: 200px;
        height: 40px;
        left: 10px;
        cursor: pointer;
        bottom: 10px;
        text-align: left;
        padding-left: 5px;
        line-height: 40px;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .image {
        img {
          max-width: 250px;
        }
      }
    }
  }
`;

export default CocktailStyled;
