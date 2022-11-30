import styled from "styled-components";

export const AppbarStyle = styled.div`
  .AppBarClass {
    opacity: ${(props) => props.scroll};
    transition: 0.7 ease;

    &:hover {
      opacity: 1;
      transition: 0.4s ease-in;
    }
  }
  .fixed {
    background: rgba(0, 0, 0, 0.48);
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
  }
  .nothing {
    display: none;
  }
  .history {
    left: 380px;
    top: 54px;
    position: absolute;
    font-size: 14px;
    line-height: 2;
    font-weight: 400;
    width: 450px;
    height: 180px;
    letter-spacing: -0.016em;
    font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    background: red;
    border-top: none;
    background-color: #fff;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    color: #86868b;
    z-index: 10000;
  }
  .history h3 {
    font-size: 12px;
    padding: 6px 15px;
    cursor: pointer;
  }
  .historyTextBox {
    padding: 10px 30px;
    color: black;

    font-size: 14px;
  }
  .history h5 {
    cursor: pointer;
  }
`;

// useState, setChange => 삼항 연산자 'className' 추가하는 방식으로
// 동적인 ui 실행하는 방법
