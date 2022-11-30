import styled from "styled-components";

export const MerchandiseBox = styled.div`
  height: auto;
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -50px 36px -28px inset;
  .merchandiseImage {
    width: 100%;
    height: 306px;
    border-radius: 14px;
    background-color: #c4c4c4;
    overflow: hidden;
  }

  .merchandiseImage img {
    width: 100%;
    height: 320px;
  }

  .merchandiseInfo {
    padding: 14px;
    width: 100%;
    margin-top: 30px;

    .merchandiseTitle {
      font-size: 24px;
      font-weight: 700;
      line-height: 45px;
    }

    .merchandiseTagBox {
      margin-top: 20px;
      overflow: hidden;
      white-space: nowrap;

      .merchandiseTag {
        display: inline-block;
        box-sizing: border-box;
        padding: 7px 14px;
        font-weight: 600;
        color: #6c5dd3;
        background: #f0eeff;
        border-radius: 14px;
        margin-right: 10px;
      }
    }

    .merchandiseDesc {
      padding: 10px;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .purchaseBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      .addCartBtn {
        cursor: pointer;
        padding: 5px 12px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        background: #6c5dd3;

        img {
          margin-right: 13px;
        }
      }

      .price {
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
`;
