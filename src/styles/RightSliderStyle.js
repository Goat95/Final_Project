import React from "react";
import { style } from "@mui/system";
import styled from "styled-components";
import Swiper from "swiper";

export const RightSliderStyle = styled.div`
  .rightSliderContainer {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
  }
  .rightSliderImgBox {
    border-radius: 15px;
    margin-bottom: 15px;
  }

  .rightSliderImg {
    width: 150px;
    height: 150px;
    border-radius: 15px;
    cursor: pointer;
  }
  .rightSliderTextBox {
    color: white;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  }
  .rightSliderTextBox h2 {
    font-size: 25px;
    line-height: 50px;

    font-weight: 700;
    opacity: 0.7;
  }
  .rightSliderTextBox h3 {
    font-size: 17px;
    line-height: 25px;
    font-weight: 500;
    opacity: 0.7;
  }
  @media screen and (min-width: 762px) {
    .rightSliderContainer {
      height: 500px;
    }
  }
`;
