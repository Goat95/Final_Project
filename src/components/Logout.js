// react
//import React, { useState, useEffect } from "react";
import Logout from "../reducers/isLoginReducer";
// redux
import { useDispatch } from "react-redux";

export function LoggedOut() {
  // useDispatch
  const dispatch = useDispatch();

  let axios = require("axios"); // node.js쓸때 모듈 불러오기

  let config = {
    method: "post", //통신 방식
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
    },
  };

  const onChangeLogState = () => {
    axios(config)
      .then(function (response) {
        dispatch(Logout(response.data.user));
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터

      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  };

  return <window>{window.onload.alert("1")}</window>;
}
