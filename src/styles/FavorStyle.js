import styled from "styled-components";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const FavorStyle = styled.div`
  width: 100%;
  padding: 30px;
  background-color: white;
  color: black;
  .addCardIcon {
    font-size: 25px;
    margin-right: 15px;
    color: #1876d2;
  }
  .recent-products-title {
    font-size: 15px;
    font-weight: 700;
    padding: 10px 20px;
  }

  .steamedList {
    width: 100%;
    padding-left: 30px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
  }

  .steamedWrap {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
    position: relative;
    margin-right: 7px;

    h3 {
      color: black;
      margin-top: 15px;
    }
    h4 {
      color: black;
    }

    .listWrap {
      border: none;
    }

    .closeBtn {
      position: absolute;
      top: 30px;
      right: 30px;
      background-color: rgba(240, 46, 170, 0.3);
      border: none;
      border-radius: 50px;
      padding: 1px 1px 1px 1px;

      .close {
        display: flex;
        color: #fff;
        opacity: 0.9;
      }

      &:hover {
        background-color: ${basicColor};
        .close {
          color: #eee;
        }
      }
    }
  }
`;
