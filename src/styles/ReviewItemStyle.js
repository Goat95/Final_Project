import styled from "styled-components";

export const ReviewItemBox = styled.div`
  width: 754px;
  height: 239px;
  box-shadow: 0px 25px 33px rgba(108, 93, 211, 0.25);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  opacity: ${(props) => props.opacity};

  .review {
    width: 60%;
    height: 70px;
    font-size: 17px;
    line-height: 20px;
    font-weight: 600;
    text-align: center;
  }

  .reviewerInfo {
    width: 70%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .reviewer {
      display: flex;
      align-items: center;

      .reviewerImg {
        width: 40px;
        height: 40px;
        background: #c4c4c4;
        border: 8px solid #ffffff;
        border-radius: 50%;
        margin-right: 15px;
      }

      .reviewerName {
        display: flex;
        flex-direction: column;
        .name {
          font-size: 14px;
          font-weight: 700;
          line-height: 19px;
        }

        .characteristic {
          font-size: 10px;
          font-weight: 400;
          line-height: 14px;
        }
      }
    }

    .starBox {
      .star {
        margin-right: 8px;
      }
    }
  }

  @media screen and (min-width: 576px) {
    width: 754px;
    height: 239px;
    box-shadow: 0px 25px 33px rgba(108, 93, 211, 0.25);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    opacity: ${(props) => props.opacity};

    .review {
      width: 80%;
      height: 70px;
      font-size: 20px;
      line-height: 25px;
      font-weight: 600;
      text-align: center;
    }

    .reviewerInfo {
      width: 90%;
      margin-top: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .reviewer {
        display: flex;
        align-items: center;

        .reviewerImg {
          width: 50px;
          height: 50px;
          background: #c4c4c4;
          border: 8px solid #ffffff;
          border-radius: 50%;
          margin-right: 20px;
        }

        .reviewerName {
          display: flex;
          flex-direction: column;
          .name {
            font-size: 16px;
            font-weight: 700;
            line-height: 25px;
          }

          .characteristic {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
          }
        }
      }

      .starBox {
        .star {
          margin-right: 12px;
        }
      }
    }
  }
`;
