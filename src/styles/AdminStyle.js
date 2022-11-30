import styled from "styled-components";

const mainColor = "#6C5DD3";
const basicColor = "#CCCCCC";

export const AdminLinkBtnStyle = styled.div`
  padding: 20px;
  background-color: white;

  .linkBtnWrap {
    margin-bottom: 30px;
    color: black;
    a {
      text-decoration: none;
    }
    .listBtn,
    .addBtn,
    .soldBtn {
      text-decoration: none;
      font-size: 15px;
      margin-right: 5px;
      border: none;
      color: black;
      background-color: whitesmoke;
      font-weight: 600;
      color: black;
      padding: 7px 15px;
      border-radius: 14px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
  .active {
    background-color: #6c5dd3;
    color: white;
    text-decoration: none;
    font-size: 15px;
    margin-right: 10px;
    border: none;
    font-weight: 600;
    padding: 7px 15px;
    border-radius: 14px;
    transition: 0.3s ease;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const ProductListStyle = styled.div`
  background-color: white;
  color: black;

  .productList {
    width: 100%;
    margin: 0;

    padding: 0;
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;

    .listWrap {
      border: none;

      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    li {
      position: relative;

      .settings {
        position: absolute;
        background-color: transparent;
        border: none;
        top: 20px;
        right: 20px;

        img {
          width: 32px;
          height: 32px;
          filter: invert(100%) sepia(0%) saturate(7473%) hue-rotate(31deg)
            brightness(84%) contrast(86%);
          &:hover {
            filter: invert(99%) sepia(0%) saturate(4%) hue-rotate(64deg)
              brightness(115%) contrast(100%);
          }
        }
      }
    }
  }
`;

export const AddProductStyle = styled.div`
  font-size: 22px;
  font-weight: 300;

  .addProduct {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    hr {
      margin: 0;
    }

    .productTitle,
    .productTag,
    .productPrice,
    .productDescription {
      width: 100%;
      padding: 10px;
      border: none;
      margin-bottom: 20px;
      background-color: transparent;

      &:focus {
        outline: none;
      }
    }

    .hashtagWrap {
      .hashtag {
        background-color: ${mainColor};
        color: #fff;
        border-radius: 15px;
        border: none;
      }

      .productTag {
        width: 500px;
      }
    }

    span {
      color: black;
    }

    .productPrice {
      width: 200px;
      text-align: right;
      color: gray;
    }

    .preview {
      img {
        display: block;
        width: 500px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      .basicThumbnail {
        width: 500px;
        height: 500px;

        background-color: whitesmoke;
        position: relative;
        .uploadThumbnail {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &:hover {
            img {
              filter: invert(35%) sepia(94%) saturate(2039%) hue-rotate(230deg)
                brightness(89%) contrast(84%);
            }
            span {
              color: ${mainColor};
            }
          }

          img {
            width: 130px;
            filter: invert(74%) sepia(19%) saturate(1%) hue-rotate(334deg)
              brightness(108%) contrast(92%);
          }

          span {
            color: ${basicColor};
            display: block;
            text-align: center;
            font-weight: 700;
            font-size: 18px;
          }
        }
      }
    }

    .uploadImg {
      display: none;
    }

    .addBtn {
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      width: 60%;
      height: 35px;
      border: none;
      cursor: pointer;
      border-radius: 15px;
      background: #6c5dd3;
      color: #fff;
      &:hover {
        background-color: ${basicColor};
      }
    }
  }
`;

export const SettingModalStyle = styled.div`

   .background,
  .settingModal {
    position: fixed;
    width: 100vw;
    height: auto;
    z-index: 100;
  }

  .background {
    background-color: #ccc;
    top: 0;
    left: 0;
    opacity: 0.5;
    height: calc(100% + 437.906px)
    /* calc 메서드로 항상 footer값 더해줌 */
  }

  .settingModal {
     width: 500px;
    height: auto;
     border-radius: 10px;
    background-color: white;
    top: calc( ${(props) => props.clickLocationY}px - 200px );
    left: 45%;
     /* top: 280px;
    left: 968px; */
    /* top: ${(props) => props.clickLocationX}px;
    left: ${(props) => props.clickLocationY}px; */

    }
    /* 위치 바꾸는 것  */
    .closeBtn {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export const SettingAddProductStyle = styled.div`
  .addProduct {
    width: 300px;
    margin: 0 auto;
    .productTitle,
    .productTag,
    .productPrice,
    .productDescription {
      color: black;
      width: 300px;
      padding: 10px;
      border: none;
      background-color: white;
      &:focus {
        outline: none;
      }
    }

    hr {
      margin: 0;
      margin-bottom: 10px;
    }

    .productTitle {
      margin-top: 40px;
    }

    .hashtagWrap {
      .hashtag {
        background-color: ${mainColor};
        color: #fff;
        border-radius: 15px;
        border: none;
        padding: 4px 8px 4px 8px;
        margin-right: 5px;
      }
      .productTag {
        width: 150px;
      }
    }

    span {
      color: #ccc;
    }

    .productPrice {
      width: 100px;
      text-align: right;
    }

    .preview {
      img {
        display: block;
        width: 300px;
        margin-bottom: 10px;
      }
    }

    .uploadImg {
      display: none;
    }

    .settingBtn {
      display: block;
      padding: 5px 20px 5px 20px;
      border: none;
      border-radius: 15px;
      background-color: ${(props) => (props.btnState ? basicColor : mainColor)};
      color: #fff;
      margin: 0 auto;
      margin-bottom: 20px;
      &:hover {
        background-color: ${basicColor};
      }
    }
  }
`;

export const SoldListStyle = styled.div`
  .bg {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    .circular {
      color: ${mainColor};
    }
  }

  .soldList {
    .listWrap {
      width: 600px;

      margin: 0 auto;
      margin-bottom: 40px;
      padding: 20px 50px;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
        rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
      .orderState {
        color: #808080;
        font-size: 23px;
        font-weight: 400;
        margin-bottom: 15px;
      }

      .soldInfo {
        margin-bottom: 20px;
        display: flex;

        .thumbnail {
          width: 150px;
          height: 150px;
        }
        .orderInfo {
          margin-left: 15px;
          display: block;

          .title {
            font-weight: 400;
            font-size: 25px;
            color: black;
          }
          .userName,
          .userEmail,
          .timePaid,
          .address {
            color: #808080;
            margin: 0;
          }
          .price {
            margin-top: 10px;
            font-weight: 300;
            font-size: 24px;
            color: black;
          }
        }
      }

      .btns {
        display: flex;
        justify-content: center;

        .cancel,
        .done {
          border-radius: 5px;
          background-color: #fff;
          width: 250px;
          height: 40px;
        }

        .cancel {
          margin-right: 5px;
          border: 2px solid ${basicColor};
          color: #000;

          &:hover {
            background-color: ${basicColor};
            color: #fff;
          }
        }
        .done {
          margin-left: 5px;
          border: 2px solid ${mainColor};
          color: ${mainColor};
          &:hover {
            background-color: ${mainColor};
            color: #fff;
          }
        }
        .off {
          cursor: default;
          border: 2px solid ${basicColor};
          background-color: ${basicColor};
          color: #fff;
          &:hover {
            border: 2px solid ${basicColor};
            background-color: ${basicColor};
            color: #fff;
          }
        }
      }
    }
    .pagination {
      color: black;
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
  }
`;
