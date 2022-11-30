import styled from "styled-components";

export const AccountBlock = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  color: white;

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    font-size: 15px;
    color: black;
    opacity: 0.6;
  }

  .css-1wc848c-MuiFormHelperText-root {
    font-size: 13px;
    color: cadetblue;
    opacity: 0.8;
    margin-bottom: 80px;
  }

  .accountTitle {
    display: flex;
    color: black;
    align-items: center;
    margin-bottom: 20px;
    vertical-align: middle;

    .accountIcon {
      font-size: 25px;
      color: #1876d2;
      vertical-align: middle;
      margin-right: 20px;
    }
    h2 {
      vertical-align: middle;
      font-size: 15px;
      font-weight: 700;
    }
  }

  .select {
    color: black;
    padding: 12px;
    height: 55px;
    background-color: transparent;
  }

  #outlined-basic {
    width: 250px;
  }

  .submitBtn {
    background: #6c5dd3;
    color: #fff;

    margin-left: 10px;
    height: 55px;

    &:hover {
      color: #000;
    }
  }
`;

export const MyAccountBlock = styled.div`
  background-color: white;
  height: 620px;
  padding: 30px;
  box-shadow: 0px 4px 2px rgb(0 0 0 / 25%);

  .accountListTitle {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    color: black;

    .accountListIcon {
      font-size: 25px;
      color: #1876d2;
      margin-right: 20px;
    }

    h2 {
      font-size: 15px;
      font-weight: 700;
    }
  }

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    color: black;
  }

  .css-rqglhn-MuiTable-root {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  .css-1yhpg23-MuiTableCell-root {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    color: black3;
    padding: 20px;
  }

  .css-1ndpvdd-MuiTableCell-root {
    color: black;
  }

  .deleteAccountBtn {
    background: #6c5dd3;
    color: #fff;
    padding: 6px;

    &:hover {
      color: #000;
    }
  }
`;
