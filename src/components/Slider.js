import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { SliderStyle } from "../styles/SliderStyle.js";
import ColorButtons from "./Button.js";

export default function Slider() {
  return (
    <>
      <SliderStyle>
        <Carousel fade={true} className="sliderBox">
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://www.herewego.link/data/item/KK_101247/5.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="sliderText">
              <h3>특별 세일 99% Off</h3>
              <p>사이트 회원님들만을 위한 초특가 매물</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/19972/pexels-photo.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="sliderText">
              <h3>부동산 매물 접속률 최하위! </h3>
              <p>전 세계 10개의 매물을 봐</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.tripsavvy.com/thmb/V6JxfYqOrA268Li6fra_jSlkcCA=/2121x1414/filters:fill(auto,1)/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="sliderText">
              <h3>주작없는 100% 리뷰와 평점</h3>
              <p>
                리뷰를 읽고 고객 평점을 비교할 수 있습니다. 자세한 내용을 확인해
                보세요.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </SliderStyle>
    </>
  );
}
