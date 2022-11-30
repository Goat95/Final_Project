import React from "react";
import { ReviewItemBox } from "../styles/ReviewItemStyle";
import star from "../assets/star.svg";
import emptystar from "../assets/emptystar.svg";

export default function ReviewItem({ opacity }) {
  return (
    <ReviewItemBox opacity={opacity}>
      <p className="review">
        해외 매물을 알아보는 데 있어서 정말 간편하고 쉽게 접근할 수 있습니다.
        무엇보다 정말 믿을 만한 사이트에요!
      </p>
      <div className="reviewerInfo">
        <div className="reviewer">
          <div className="reviewerImg"></div>
          <div className="reviewerName">
            <span className="name">Team 9</span>
            <span className="characteristic">Fast Campus</span>
          </div>
        </div>
        <div className="starBox">
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={star} alt="star" />
          <img className="star" src={emptystar} alt="star" />
        </div>
      </div>
    </ReviewItemBox>
  );
}
