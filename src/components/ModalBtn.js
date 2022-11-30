// react 
import React from "react";
// style 
import { ModalBtnStyle } from "../styles/ModalBtnStyle";

export default function ModalBtn({ modalState, setModalState }) {

  const onClick = (e) => {
    e.preventDefault();
    setModalState(prev => !prev);
  }

  return (
    <ModalBtnStyle>
      <div className="modalBtn">
        <div className="modalBtnWrap">
          <p>{ !modalState ? "님계없?" : "님계있?" }</p>
          <button onClick={onClick}>{ modalState ? "로그인하기" : "회원가입하기" }</button>
        </div>
      </div>
    </ModalBtnStyle>
  )
}
