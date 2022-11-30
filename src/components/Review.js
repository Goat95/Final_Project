import React from "react";
import { ReviewBlock } from "../styles/ReviewStyle";
import ReviewItem from "./ReviewItem";

export default function Review() {
  return (
    <ReviewBlock>
      <h3>고객님들의 생생 후기</h3>
      <p className="reviewDesc">
        다운로드 수 1위, 이용자 수 1위! 좋은 건물 구하는 기술, 랜드마크 닷컴!
        <br /> 나에게 딱 맞는 집을 더욱 찾기 쉽게
        <br /> 새롭게 추가된 랜드마크 분양 서비스를 만나보세요.
      </p>
      <div className="reviewers  animate__animated animate__pulse animate__infinite ">
        <div></div>
        <div className="reviewersTotal ">
          <span>21K+</span>
        </div>
      </div>
      <div className="reviewItemBlock animate__animated animate__pulse animate__infinite">
        <ReviewItem opacity="0.5" />
        <ReviewItem opacity="1" />
        <ReviewItem opacity="0.5" />
      </div>
    </ReviewBlock>
  );
}
