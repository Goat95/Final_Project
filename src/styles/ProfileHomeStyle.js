import { style } from "@mui/system";
import styled from "styled-components";
import React from "react";

const fontTitle = `30px`;

export const ProfileHomeStyle = styled.div`
  padding: 30px;
  background-color: white;
  color: black;
  overflow: hidden;
  width: 75vw;

  .css-1n7gpw1-MuiSkeleton-root {
    -webkit-transform: scale(0);
  }

  .MuiImageList-root {
    width: 100%;
  }

  .MuiImageListItem-root {
    cursor: pointer;
    margin-bottom: 10px;
    width: 90%;
  }

  .MuiImageListItem-root:hover {
    transition: 1s ease-in-out;
    transform: translateY(-10px);

    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  }

  .recent-products {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
    padding: 10px;
  }

  .addCardIcon {
    font-size: 25px;
    color: #1876d2;
    margin-right: 20px;
  }

  .recent-products-title {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .recent-transit-title {
    font-size: 15px;
    font-weight: 700;

    padding: 0 10px;
    margin-bottom: 20px;
    .favorIcon {
      color: red;
      font-size: 25px;
      margin-right: 15px;
    }
  }

  .recent-products-card {
    width: 33%;
    display: flex;

    .listWrap {
      color: black;
      border: none;
      padding: 5px 0px 1px 0px;
      border-radius: 10px;
    }

    .listWrap2 {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    .favorIcon {
      font-size: 30px;
      margin-right: 25px;
      color: red;
    }

    .recent-transit-title {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 00;
      margin-bottom: 20px;
      padding: 10px;
    }

    /* 아래 */
  }
`;

export const MoveStyle = styled.div`
  .recent-products-card {
    transition: 0.6s ease-in;
    transform: ${(props) => `translatex(${props.move}vw)`};
  }
`;
