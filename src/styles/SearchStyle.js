import styled from "styled-components";
import { Link } from "react-router-dom";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const SearchStyle = styled.div`
  background-color: white;

  .productList {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .productWrap {
      position: relative;
      .steamedBtn {
        position: absolute;
        top: 24px;
        right: 24px;
        border: none;
      }
    }
  }
  .sorryText {
    font-size: 40px;
    font-weight: 800;
    color: white;
  }
  .nothing {
    padding: 30px;
    text-align: center;
  }
  .sorryImg {
    width: 100vw;
    height: 600px;
    overflow: auto;
    background-size: 100%;
    background-image: url("https://wallpaperaccess.com/full/254381.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  .listWrap {
    border: none;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #000;
  }
`;

export const SearchDetailStyle = styled.div`
  .bg {
    height: 320px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    .circular {
      color: ${mainColor};
    }
  }

  .detailWrap {
    color: black;
    background-color: white;
    margin: 0 auto;
    height: 100vh;

    .detailMain {
      padding: 70px 0 0;
      display: flex;

      justify-content: center;
      margin: 0 auto;

      img {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
          rgb(209, 213, 219) 0px 0px 0px 1px inset;
        width: 500px;
      }

      .description {
        font-weight: 600;
        border-bottom-right-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
          rgb(209, 213, 219) 0px 0px 0px 1px inset;
        width: 50%;
        font-size: 20px;
        font-weight: 400;
        padding: 20px 40px;
        box-sizing: border-box;
        h2 {
          margin: 10px 0 20px 0;
          font-size: 25px;
          font-weight: 600;
        }
      }
    }

    .purchase {
      display: flex;
      position: relative;
      margin-top: 35px;
      justify-content: space-around;

      span {
        line-height: -25px;
        font-size: 30px;
        font-weight: 600;
        margin-right: 15px;
      }

      .purchaseBtn {
        background-color: ${mainColor};
        border: none;
        padding: 8px 30px 8px 30px;
        border-radius: 10px;
        &:hover {
          background-color: ${basicColor};
        }
        .btnWrap {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 18px;
            margin-right: 3px;
          }
          .purchaseText {
            color: #fff;
            font-size: 14px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
