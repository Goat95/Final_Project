import styled from "styled-components";

const mainColor = "#6C5DD3";

export const ModalBtnStyle = styled.div`
  .modalBtn {
    position: absolute;
    width: 400px;
    height: 75px;
    border: none;
    border-top: 1px solid #ccc;
    box-sizing: border-box;
    bottom: 0;
    right: 0;
    padding: 15px;

    .modalBtnWrap {
      text-align: center;
      p {
        font-size: 14px;
        color: #000;
        opacity: 0.5;
        margin-bottom: 0;
      }

      button {
        background-color: transparent;
        border: none;
        font-weight: 800;
        color: ${mainColor};
        cursor: pointer;
      }
    }
  }
`;
