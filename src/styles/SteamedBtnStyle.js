import styled from "styled-components";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const SteamedBtnStyle = styled.div`

  .btn--unSteamed {
    background-color: transparent;
    border: none;
    .favorite {
      font-size: 32px;
      transition: .3s ease-out;
      color: ${basicColor};
    }
    &:hover {
      .favorite {
        color: #eee;
      }
    }
  }

  .btn--steamed {
    background-color: transparent;
    border: none;
    .favorite {
      font-size: 32px;
      transition: .3s ease-out;
      color: ${mainColor};
    }
  }

`