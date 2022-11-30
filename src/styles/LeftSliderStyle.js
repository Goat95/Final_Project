import React from "react";
import { style } from "@mui/system";
import styled from "styled-components";

export const LeftSliderStyle = styled.div`
  .leftSliderContainer {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
  }

  .leftSliderContainer:hover {
    cursor: pointer;
    transition: ease-in-out 1.5s;
    transform: scaleX(1.05);
    color: blueviolet;
  }

  .leftSliderImgBox {
    margin-bottom: 15px;
    border-radius: 10px;
  }
  .leftSliderImg {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  .leftSliderTextBox {
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
  }
  .leftSliderTextBox h5 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    opacity: 0.7;
  }

  @media screen and (min-width: 568px) {
    .leftSliderContainer {
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
    }

    .leftSliderContainer:hover {
      cursor: pointer;
      transition: ease-in-out 1.5s;
      transform: scaleX(1.05);
      color: blueviolet;
    }

    .leftSliderImgBox {
      margin-bottom: 15px;
      border-radius: 10px;
    }
    .leftSliderImg {
      width: 150px;
      height: 150px;
      border-radius: 10px;
    }
    .leftSliderTextBox {
      font-size: 12px;
      line-height: 20px;
      font-weight: 700;
    }
    .leftSliderTextBox h5 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      opacity: 0.7;
    }
  }
`;
