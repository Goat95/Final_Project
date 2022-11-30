import "animate.css";

import React, { useEffect, useState } from "react";
import { RecommendStyle } from "../styles/RecommendStyle";
import recommend1 from "../assets/recommend_icon/recommend_1.png";
import recommend2 from "../assets/recommend_icon/recommend_2.png";
import recommend3 from "../assets/recommend_icon/recommend_3.png";
import recommend4 from "../assets/recommend_icon/recommend_4.png";
import recommendCircle from "../assets/recommend_icon/cirlces.png";

import img1 from "../assets/imges1.png";
import img2 from "../assets/img2.png";

import fixed1 from "../assets/fixed1.png";
import fixed2 from "../assets/fixed2.png";
import fixed3 from "../assets/fixed3.png";

// import nextArrow from "../assets/recommend_icon/iconNext.png";
import LeftSlider from "./LeftSlider";
import RightSlider from "./RightSlider";
import Review from "./Review";

// aos

import Aos from "aos";
import "aos/dist/aos.css";
import { fontWeight } from "@mui/system";
import { Container, Row, Col } from "react-bootstrap";

Aos.init({
  duration: 1000,
  easing: "ease-in",
  once: false,
  delay: 30,
});

// animate css

export default function Recommend() {
  const [forYou, setForYou] = useState(["dd", "dd", "dd", "dd", "dd"]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {}, []);

  return (
    <RecommendStyle>
      <div className="fixedContainer">
        <div className="for-scroll">
          <h1 className="fiexTitle animate__animated animate__heartBeat">
            고객님 환영합니다!
          </h1>
          <div class="item" data-aos="fade-right">
            <div className="fiexImages">
              <img src={fixed1} />
              <div>
                <img src={fixed2} />
                <img src={fixed3} />
              </div>
            </div>
          </div>
          <Review />
          <img
            className="scrollImg2"
            src="https://cdn.imweb.me/upload/S201808235b7e4cabbd446/7909cb3f80848.png"
          />
        </div>
      </div>

      {/* 여기까지 배경이미지 먹이기  */}

      <h2 className="appleText">
        거침없는 추천. <br />
        실속 있는 선택.
      </h2>
      <Container>
        <Row>
          <Col md={6}>
            <div className="recommendForYou">
              <div className="recommendForYouText ">
                <h3>당신을 위한 매물 추천</h3>
                <p>
                  AI로 매주 추천되는 엄선된 부동산 매물 "랜드마크 추천매물"
                  토지, 빌딩, 유적지, 궁궐, 자연 등 전세계 다양한 급매물이 주
                  2회 개제됩니다.
                </p>
              </div>
              <div className="recommendSliderLeft">
                <LeftSlider forYou={forYou} />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="recommendPopular">
              <div className="recommendPopularText">
                <h3>이번 달 인기 급상승 매물</h3>
                <p>
                  이번 달에 인기 있는 매물들을 이곳에서 확인하실 수 있습니다.{" "}
                </p>
              </div>
              <div className="recommendSliderRight">
                <RightSlider />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </RecommendStyle>
  );
}
