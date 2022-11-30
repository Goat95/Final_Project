import styled from "styled-components";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const Block = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const ProductBlock = styled.div`
  display: flex;
  width: 50%;
  margin-top: 50px;

  .productInfo {
    h2 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 50px;
    }
    .detailWrap {
      width: 800px;
      margin: 0 auto;
      margin-top: 30px;

      .detailMain {
        display: flex;

        img {
          margin-right: 15px;
        }

        .description {
          width: 500px;
          box-sizing: border-box;
          border-bottom: 1px dashed #ccc;
          h3 {
            margin: 10px 0 10px 0;
            font-size: 32px;
            font-weight: 700;
          }
        }
      }

      .purchase {
        display: flex;
        margin: 15px 0 15px 315px;
        position: relative;

        h4 {
          font-size: 32px;
          font-weight: 700;
        }

        .purchaseBtn {
          width: 100px;
          height: 30px;
          position: absolute;
          right: 0;
          background-color: ${mainColor};
          border: none;
          padding: 5px 10px 5px 10px;
          border-radius: 10px;
          &:hover {
            background-color: ${basicColor};
          }
          .btnWrap {
            display: flex;
            width: 77px;
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
  }
`;

export const PaymentBlock = styled.div`
  display: flex;
  width: 50%;
  margin-top: 50px;

  .paymentInfo {
    h2 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 50px;
    }

    .select {
      text-align: center;
      width: 100%;
      padding: 14px;
      margin-bottom: 30px;
    }

    .firstname {
      width: 32%;
      margin-right: 9px;
    }

    .lastname {
      width: 32%;
      margin-right: 9px;
    }

    .phoneNumber {
      width: 33.333%;
    }

    .address {
      margin-top: 30px;
    }

    .paymentBtn {
      margin-top: 30px;
      width: 100%;
    }
  }
`;
