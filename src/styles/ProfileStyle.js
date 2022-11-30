import { Divider } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";

export const ProfileBox = styled.div`
  background-color: white;
  width: 60%;
`;

// 오른쪽 박스 콘테이너 ProfileBox

export const ProfileStyle = styled.div`
  width: 100%;
  background-color: white;

  ul {
    list-style: none;
  }
  display: flex;
  .profileContainer {
    background-color: white;
    color: black;
    width: 25%;
    display: flex;
  }

  .ikAlMU {
    width: 100%;
  }

  .profileNavBox {
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .profileTitle {
    padding: 50px 0 25px 0;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    font-size: 20px;
    letter-spacing: 5px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .test {
    width: 100%;
    background-color: bisque;
  }

  /* profile details */

  .profileDetails {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .profileImgBox {
    width: 100%;
    border-radius: 50%;
    text-align: center;
    margin-bottom: 20px;
    overflow: hidden;
    margin: 0 auto;
  }
  .profileImg {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  .profileDetails span {
    font-weight: 200;
    font-size: 20px;
  }

  /* profile lists */
  .profileList li {
    padding: 15px 50px;
    width: 100%;
    margin-bottom: 25px;
    cursor: pointer;
  }
  .profileList li:hover {
    color: black;
    transition: ease-in-out 0.6s;
    font-weight: 600;
    background-color: whitesmoke;
  }
  .profileList .icon {
    font-size: 25px;
    margin-right: 20px;
  }

  .icon {
    margin-right: 15px;
    opacity: 0.9;
  }

  li:first-child .icon {
  }

  li:nth-child(2) .icon {
  }
  li:nth-child(3) .icon {
  }
  li:nth-child(4) .icon {
  }
  li:nth-child(5) .icon {
  }
  li:nth-child(6) .icon {
  }

  .profileList li span {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }

  /* divider */
  .divider {
    margin-bottom: 15px;
  }

  /* profilePage (right) */

  .profilePage {
    width: %;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .test {
    background-color: black;
    padding: 0 3px;
  }
`;
