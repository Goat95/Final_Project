import styled from "styled-components";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const LoginStyle = styled.div`
  .loginWrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 500px;

    /* 임시 */
    h2 {
      margin: 20px 0 20px 0;
      text-align: center; 
      font-size: 40px;
    }
    h3 {
      text-align: center; 
      font-size: 18px;
      margin-bottom: 20px;
    }

    /* 로그인 정보 */
    .submitInfo {
      width: 300px;
      margin: 0 auto; 
      
      /* 로그인 정보 EMAIL & PASSWORD */
      .email, .pw {
        padding: 10px;
        width: 300px;
        height: 40px;
        box-sizing: border-box;
        border: none;
        outline: none;
        border-left: 1px solid ${basicColor};
        border-right: 1px solid ${basicColor};
      }

      /* 로그인 정보 EMAIL */
      .email {
        border-radius: 5px 5px 0 0;
        border-top: 1px solid ${basicColor};
        border-bottom: 1px solid ${basicColor};
        :focus {
          border: 2px solid ${mainColor}
        }
      }
      /* 로그인 정보 PASSWORD */
      .pw {
        border-radius: 0 0 5px 5px;
        border-bottom: 1px solid ${basicColor};
        :focus {
          border: 2px solid ${mainColor}
        }
      }

      /* CHECKBOX */
      .checkboxWrap {
        margin-top: 10px;
        position: relative;
        .checkbox {
          margin-right: 5px;
        }
        span {
          font-size: 12px;
          position: absolute;
          top: 10%;
        }
      }

      /* 로그인 정보 SUBMIT BUTTON */
      .submitBtn {
        margin-top: 20px;
        width: 300px;
        padding: 5px 0 5px 0;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        background-color: ${props => props.disabled ? "#cccccc" : mainColor};
        color: ${props => props.disabled ? "gray" : "#ffffff"};
        cursor: ${props => props.disabled ? null : "pointer"};
      }
    }
  }
`

export const RegisterStyle = styled.div`
  .loginWrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 500px;

    /* 임시 */
    h2 {
      margin: 20px 0 20px 0;
      text-align: center; 
      font-size: 40px;
    }

    /* 로그인 정보 */
    .submitInfo {
      width: 300px;
      margin: 0 auto; 
      
      /* 로그인 정보 EMAIL & PASSWORD */
      .id, .email, .pw, .pwConfirm {
        padding: 10px;
        width: 300px;
        height: 40px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        &:focus {
          border: 1px solid ${mainColor}
        }
      }

      .idMsg, .emailMsg, .pwMsg, .pwConfirmMsg {
        font-size: 14px;
        color: red;
        height: 25px;
        padding: 5px;
        box-sizing: border-box;
        line-height: 0.8;
        margin-bottom: 0;
      }

      /* 로그인 정보 SUBMIT BUTTON */
      .submitBtn {
        margin-top: 10px;
        width: 300px;
        padding: 5px 0 5px 0;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        background-color: ${props => props.disabled ? "#cccccc" : mainColor};
        color: ${props => props.disabled ? "gray" : "#ffffff"};
        cursor: ${props => props.disabled ? null : "pointer"};
      }
    }
  }
`