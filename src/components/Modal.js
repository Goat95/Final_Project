// react
import React, { useState } from "react";
// components & routes
import Login from "./Login";
import Register from "./Register";
import ModalBtn from "./ModalBtn";
// image
import Modal_Img from "../assets/modal_img.png";
import star from "../assets/star.png";
// style
import { ModalStyle } from "../styles/ModalStyle";

export default function Modal() {
  // login(false) or register(true)
  const [modalState, setModalState] = useState(false);

  return (
    <ModalStyle>
      <div className="modalBackground"></div>
      <div className="modalWrap">
        <img className="modalImg" src={Modal_Img} alt="modal_image" />
        <div className="ad">
          <img src={star} alt="5star" />
          <p className="title">2022년 경제 부문 최우수기업 선정</p>
          <p className="sub">(되고 싶다)</p>
        </div>
        {!modalState ? <Login /> : <Register />}
        <ModalBtn modalState={modalState} setModalState={setModalState} />
      </div>
    </ModalStyle>
  );
}
