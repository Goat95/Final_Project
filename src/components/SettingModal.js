// react
import React from "react";
import styled from "styled-components";
// components & routes
import SettingAddProduct from "../components/SettingAddProduct";
// image
import CloseImg from "../assets/close.svg";
// style
import { SettingModalStyle } from "../styles/AdminStyle";
import { useSelector } from "react-redux";
import clickReducer from "../reducers/clickReducer";

export default function SettingModal({
  setSettingModal,
  productValue,
  clickLocationX,
  clickLocationY,
}) {
  const Selector = useSelector((state) => state.clickReducer);

  return (
    <SettingModalStyle
      clickLocationX={clickLocationX}
      clickLocationY={clickLocationY}
    >
      {/* BACKGROUND */}
      <div className="background"></div>
      {/* SETTING MODAL */}
      <div className="settingModal">
        {/* CLOSE BUTTON */}
        <button className="closeBtn" onClick={() => setSettingModal(false)}>
          <img src={CloseImg} alt="closeModal" />
        </button>
        <SettingAddProduct
          setSettingModal={setSettingModal}
          productValue={productValue}
        />
      </div>
    </SettingModalStyle>
  );
}
