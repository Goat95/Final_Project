import styled from "styled-components";

export const ReviewBlock = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 500px;

  h3 {
    font-size: 30px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .reviewDesc {
    width: 500px;
    height: 35px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }

  .reviewers {
    margin-top: 45px;
    margin-bottom: 76px;

    .reviewersTotal {
      position: relative;
      width: 40px;
      height: 40px;
      background: #6c5dd3;
      border: 4px solid #ffffff;
      border-radius: 50%;

      span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 10px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .reviewItemBlock {
    display: flex;
  }

  @media screen and (min-width: 576px) {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 300px;

    h3 {
      font-size: 50px;
      font-weight: 600;
      line-height: 75px;
      margin-bottom: 15px;
    }

    .reviewDesc {
      width: 658px;
      height: 35px;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
    }

    .reviewers {
      margin-top: 60px;
      margin-bottom: 55px;

      .reviewersTotal {
        position: relative;
        width: 50px;
        height: 50px;
        background: #6c5dd3;
        border: 4px solid #ffffff;
        border-radius: 50%;

        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
      }
    }

    .reviewItemBlock {
      display: flex;
    }
  }
`;
