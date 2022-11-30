import React from "react";
import styled from "styled-components";

export const RecommendStyle = styled.div`
  margin-bottom: 100px;
  .recommendAd {
    margin-bottom: 60px;
  }

  .recommendAdBox {
    display: flex;
  }

  .recommendList {
    display: flex;
    align-items: center;
  }

  .recommendImgBox {
    margin-right: 10px;
  }

  .recommendTextBox h3 {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .recommendTextBox p {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.4;
  }

  /* 바텀 */
  .recommendBottom {
    padding: 30px;
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }

  .recommendForYou {
    font-family: "appleNeoB";
    color: white;
    width: 100%;
    margin-bottom: 25px;
    height: 600px;
    overflow: hidden;
    position: relative;
    background-color: black;
    border-radius: 14px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    color: black;
  }

  .recommendForYou:hover {
    transform: scale(1.1);
    transition: all ease-in-out 1s;
    color: white;
    background-color: skyblue;
  }

  .recommendForYouText {
    font-family: "appleNeo";

    padding: 70px 60px;
    margin-bottom: 40px;
  }

  .recommendForYouText h3 {
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .recommendForYouText p {
    font-size: 17px;
    font-weight: 400;
  }

  .recommendPopular {
    width: 100%;
    height: 600px;
    border-radius: 14px;
    background-color: red;
    color: white;
  }
  .recommendPopular:hover {
    transform: scale(1.1);
    transition: ease-in-out 1.5s;
    background-color: blueviolet;
    color: red;
  }

  .recommendPopularText {
    padding: 30px 30px;
  }
  .recommendPopularText h3 {
    font-size: 33px;
    font-weight: 600;

    margin-bottom: 15px;
  }
  .recommendPopularText p {
    font-size: 17px;
    font-weight: 400;
  }

  /* 캐러셀  */

  /* 왼쪽 캐러셀 박스 */
  .recommendSliderLeft {
    width: 700px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: relative;
  }

  .recommendSliderImgBox {
    width: 100%;
    height: 150px;
    margin-right: 10px;
    border: 4px solid #ffffff;
    border-radius: 14px;
  }
  .recommendSliderImg {
    border-radius: 14px;
    width: 100%;
  }
  .leftNextArrow {
    position: absolute;
    right: -7%;
    top: 35%;
  }
  .leftNextArrow img {
    padding: 5px;
    cursor: pointer;
  }

  /* slider Container */
  .recommendSliderLeft {
    width: 100%;
  }
  .recommendSliderRight {
    width: 100%;
    padding: 0 15px;
  }

  .appleText {
    text-align: center;
    font-size: 25px;
    color: #2947b0;
    font-weight: 600;
    margin-top: 20px;
    line-height: 40px;
    color: #b029a4;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 576px) {
    .appleText {
      text-align: center;
      font-size: 35px;
      color: #2947b0;
      font-weight: 600;
      margin-top: 30px;
      line-height: 60px;
      color: #b029a4;
    }
  }

  @media screen and (min-width: 762px) {
    .appleText {
      text-align: center;
      font-size: 55px;
      color: #2947b0;
      font-weight: 600;
      margin-top: 35px;
      line-height: 65px;
      color: #b029a4;
      margin-bottom: 30px;
    }
  }

  /* fixed */

  .fixedContainer {
    width: 100vw;
    height: 500px;
    overflow: auto;
    background-size: 100%;
    background-image: url("https://wallpaperaccess.com/full/254381.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    margin-bottom: 50px;
  }
  .fixedContainer::-webkit-scrollbar {
    display: none;
  }
  .for-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    height: 1000px;
  }
  .fiexTitle {
    margin-top: 100px;
    text-align: center;
    color: white;
    font-size: 30px;
  }
  .fiexImages {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  .fiexImages img {
    width: 200px;
    margin-bottom: 80px;
  }
  .scrollImg1 {
    width: 100vw;
  }
  .scrollImg2 {
    width: 100vw;
  }

  /* animate css */
  .animate__animated .animate__heartBeat {
    --animate-duration: 2000ms;
    --animate-delay: 5;
  }

  .animate__animated .animate__pulse .animate__infinite {
    --animate-duration: 3000ms;
  }

  .bg {
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin: 0px auto;
    position: relative;
  }
  video {
    width: 100%;
  }
  .text {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text p {
    text-align: center;
    font-size: 25px;
    color: #ffffff;
  }

  @media screen and (min-width: 568px) {
    .fixedContainer {
      width: 100vw;
      height: 1000px;
      overflow: auto;
      background-size: 100%;
      background-image: url("https://wallpaperaccess.com/full/254381.jpg");
      background-attachment: fixed;
      background-repeat: no-repeat;
      margin-bottom: 100px;
    }
    .fixedContainer::-webkit-scrollbar {
      display: none;
    }
    .for-scroll::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
      height: 2000px;
    }
    .fiexTitle {
      margin-top: 200px;
      text-align: center;
      color: white;
      font-size: 60px;
    }
    .fiexImages {
      margin-top: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 200px;
    }

    .fiexImages img {
      width: 350px;
      margin-bottom: 150px;
    }
    .scrollImg1 {
      width: 100vw;
    }
    .scrollImg2 {
      width: 100vw;
    }

    /* animate css */
    .animate__animated .animate__heartBeat {
      --animate-duration: 2000ms;
      --animate-delay: 5;
    }

    .animate__animated .animate__pulse .animate__infinite {
      --animate-duration: 3000ms;
    }

    .bg {
      width: 100%;
      height: 400px;
      overflow: hidden;
      margin: 0px auto;
      position: relative;
    }
    video {
      width: 100%;
    }
    .text {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .text p {
      text-align: center;
      font-size: 48px;
      color: #ffffff;
    }
  }
`;
