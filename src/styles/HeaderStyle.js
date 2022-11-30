import styled from "styled-components";
import { withStyles } from "@mui/material";
import { createMuiTheme } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

export const HeaderBox = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  z-index: 10;
  align-items: center;
  width: 100%;
  .title {
    position: relative;
    font-family: "Nanum Myeongjo";
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-decoration: none;
    color: #000000;
  }

  .search {
    position: relative;
    .searchBox {
      height: 40px;
      left: 500px;
      width: 30rem;
    }
    .searchButton {
      background-color: white;
      height: 45px;
      width: 60px;
      border: none;
    }
  }
  .buttons {
    position: relative;

    .signIn {
      background: #f0eeff;
      border: none;
      color: #6c5dd3;
      height: 45px;
    }
    .signUp {
      border: none;
      background: #6c5dd3;
      color: white;
      height: 45px;
    }
    .animate__animated .animate__headShake .animate__repeat-3 {
      --animate-duration: 4s;
      --animate-delay: 5s;
    }
    @media screen and (max-width: 568px) {
      .homelogo {
        display: none;
      }
    }

    /* input */
  }
`;
