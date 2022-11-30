import styled from "styled-components";

export const ModalStyle = styled.div`
  .modalBackground,
  .modalWrap {
    position: fixed;
    z-index: 100;
  }

  .modalBackground {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.8;
  }

  .modalWrap {
    width: 800px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    animation: modal 0.8s ease-in;

    .modalImg {
      border-radius: 10px 0 0 10px;
      filter: brightness(80%);
    }

    .ad {
      position: absolute;
      bottom: 60px;
      left: 0;
      width: 400px;

      img {
        display: block;
        filter: brightness(90%);
        width: 200px;
        margin: 0 auto;
        margin-bottom: 15px;
      }

      p {
        text-align: center;
        color: #fff;
        margin-bottom: 5px;
        text-shadow: 5px 5px 5px #000;
      }

      .title {
        font-size: 24px;
        font-weight: 600;
      }

      .sub {
        font-size: 12px;
      }
    }
  }

  @keyframes modal {
    from {
      opacity: 0;
      top: 60%;
    }
    to {
      opacity: 1;
    }
  }
`;
