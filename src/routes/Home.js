// react
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// components & routes
import DiscountSale from "../components/DiscountSale";
import Review from "../components/Review";
import Slider from "../components/Slider";
import Recommend from "../components/Recommend";
import ScrollToTop from "../components/ScrollToTop";
import isLoginReducer from "../reducers/isLoginReducer";
import PopUp from "../components/PopUp";

// image
import koreanAir from "../assets/koreanAir.png";

import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

import "animate.css";

Aos.init({
  duration: 600,
  once: true,
});

// styled

// 리액트 형식으로

export default function Home() {
  const [popup, setPopup] = useState(true);

  // scrollCard

  const selector = useSelector((state) => state.isLoginReducer);
  const isLogin = selector.isLogin;

  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isLogin) {
      setShow(show);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setOpacity(0);
      }
      if (window.scrollY < 300) {
        setOpacity(1);
      }
    });
  });

  return (
    <>
      <div>
        <div class="item" data-aos="zoom-out">
          <Slider />
        </div>

        {popup ? <PopUp onClose={setPopup} /> : null}

        <ScrollToTop />
        <div class="item" data-aos="zoom-in">
          <Recommend />
        </div>
        <FloatStyle opacity={opacity}>
          <div className="floatdiv animate__animated animate__bounceInRight ">
            <img className="floatdivImg" src={koreanAir} />
          </div>
        </FloatStyle>

        <div class="item" data-aos="zoom-in">
          <DiscountSale />
          {/* <Review /> */}
        </div>
      </div>
    </>
  );
}

// float style
export const FloatStyle = styled.div`
  .floatdiv {
    position: fixed;
    width: 150px;
    display: inline-block;
    right: 10%; /* 창에서 오른쪽 길이 */
    top: 20%; /* 창에서 위에서 부터의 높이 */
    background-color: transparent;
    margin: 0;
    z-index: 100;
    transition: 1s ease-in-out;
  }
  .floatdivImg {
    width: 100%;
    height: 150px;
    opacity: ${(props) => props.opacity};
    transition: 1s ease-in-out;
  }
  .floatdiv img:hover {
    opacity: 1;

    transition: 1s ease-in-out;
    transform: scale(1.2);
  }
`;
