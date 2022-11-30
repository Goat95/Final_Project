import React from "react";
import styled from "styled-components";

export const SliderStyle = styled.div`
  width: 100vw;

  .sliderBox h3 {
    color: white;
    font-size: 15px;
    margin-bottom: 20px;
  }
  .sliderBox p {
    color: white;
    font-size: 30px;
  }

  .sliderBox img {
    height: 500px;
  }

  .sliderText {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100px;
    padding: 3px;
  }
  .sliderText h3 {
    font-family: "appleNeoH";
    font-weight: 400;
    font-size: 25px;
  }
  .sliderText p {
    font-size: 15px;
    font-weight: 300;
    font-family: "appleNeoB";
    line-height: 1;
  }

  @media screen and (min-width: 568px) {
    width: 100%;
    .sliderBox h3 {
      color: white;
      font-size: 50px;
      margin-bottom: 20px;
    }
    .sliderBox p {
      color: white;
      font-size: 40px;
    }

    .sliderBox img {
      height: 600px;
    }

    .sliderText {
      background-color: rgba(0, 0, 0, 0.4);
      height: 180px;
      padding: 10px;
    }
    .sliderText h3 {
      font-family: "appleNeoH";
      font-weight: 600;
      font-size: 32px;
    }
    .sliderText p {
      font-size: 25px;
      font-weight: 400;
      font-family: "appleNeoB";
      line-height: 1.5;
    }
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    .sliderBox h3 {
      color: white;
      font-size: 65px;
      margin-bottom: 35px;
    }
    .sliderBox p {
      color: white;
      font-size: 4-px;
    }

    .sliderBox img {
      height: 900px;
    }

    .sliderText {
      background-color: rgba(0, 0, 0, 0.4);
      height: 220px;
      padding: 20px;
    }
    .sliderText h3 {
      font-family: "appleNeoH";
      font-weight: 600;
      font-size: 50px;
    }
    .sliderText p {
      font-size: 30px;
      font-weight: 300;
      font-family: "appleNeoB";
      line-height: 1.5;
    }
  }
`;
