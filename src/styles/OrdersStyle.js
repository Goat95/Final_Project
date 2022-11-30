import styled from "styled-components";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const OrdersBlock = styled.div`
  width: 100%;
  padding: 30px;
  margin-top: 50px;

  h2 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 30px;
    margin-left: 10px;
  }

  .productInfo {
    display: flex;
    .thumbnail {
      width: 100px;
      height: 100px;
    }

    .productText {
      padding: 8px 5px 0 15px;
      h4 {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  .confirmBtn {
    background-color: ${mainColor};
    color: #fff;
    &:hover {
      color: #000;
    }
    &:disabled {
      background-color: ${basicColor};
    }
  }

  .canceledBtn {
    background-color: ${mainColor};
    color: #fff;
    &:hover {
      color: #000;
    }
    &:disabled {
      background-color: ${basicColor};
    }
  }
`;
