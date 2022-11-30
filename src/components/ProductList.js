// react
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// routes & components
import SettingModal from "./SettingModal";
import ListCard from "./ListCard";
// image
import settings from "../assets/settings.svg";
// style
import { ProductListStyle } from "../styles/AdminStyle";

import { SettingModalStyle } from "../styles/AdminStyle";

export default function ProductList() {
  // product list info
  const [productInfo, setProductInfo] = useState([]);
  // setting modal state
  const [settingModal, setSettingModal] = useState(false);
  // setting product value
  const [productValue, setProductValue] = useState({});

  const [clickLocationX, setClickLocationX] = useState(0);
  const [clickLocationY, setClickLocationY] = useState(0);

  const dispatch = useDispatch();

  // add product api
  var axios = require("axios"); // node.js쓸때 모듈 불러오기
  var config = {
    method: "get", //통신 방식
    url: "/api/products", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      masterKey: true,
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        setProductInfo(res.data);
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  }, []);

  const onClick = (e) => {
    setSettingModal(true);
    setProductValue(e);
  };

  const scrollClick = (e) => {
    const ClientX = e.nativeEvent.pageX;
    const ClientY = e.nativeEvent.pageY;
    setClickLocationX(ClientX);
    setClickLocationY(ClientY);
  };

  // 클릭한 (e) client X, Y값 dispatch로 리듀서에 전달

  return (
    <ProductListStyle>
      <ul className="productList">
        {productInfo.map((info, idx) => (
          <li key={idx}>
            <ListCard info={info} />
            {/* SETTINGS BUTTON */}
            <button className="settings" onClick={() => onClick(info)}>
              <img onClick={scrollClick} src={settings} alt="settings" />
            </button>
          </li>
          // 눌러진 곳 e.target해서 width, height값 => state에
        ))}
      </ul>
      {/* SETTING MODAL */}
      {settingModal && (
        <SettingModal
          clickLocationX={clickLocationX}
          clickLocationY={clickLocationY}
          setSettingModal={setSettingModal}
          productValue={productValue}
        />
      )}
    </ProductListStyle>
  );
}
