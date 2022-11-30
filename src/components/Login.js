// react
import React, { useState, useEffect } from "react";
import { Auth } from "../reducers/isLoginReducer";
import { AddId, DeletId } from "../reducers/rememberIdReducer";
// redux
import { useDispatch, useSelector } from "react-redux";
// style
import { LoginStyle } from "../styles/LoginRegisterStyle";

export default function Login() {
  // useDispatch
  const dispatch = useDispatch();
  // useSelector
  const checkboxSelector = useSelector((state) => state.rememberIdReducer);
  // value of email, pw
  const [email, setEmail] = useState(checkboxSelector.id);
  const [pw, setPw] = useState("");
  // button disabled
  const [disabled, setDisabled] = useState(true);
  // checkbox state
  const [checkbox, setCheckbox] = useState(false);

  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const data = JSON.stringify({
    email: email,
    password: pw,
  });
  const config = {
    method: "post", //통신 방식
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
    },
    data: data,
    // 서버가 제공한 응답 (데이터)
  };

  // submit
  const onSubmit = (e) => {
    e.preventDefault();
    axios(config)
      .then(function (response) {
        dispatch(Auth(response.data));
        if (checkbox) {
          dispatch(AddId(response.data.user.email));
        } else {
          dispatch(DeletId());
        }
      })
      // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  };

  // disabled
  useEffect(() => {
    if (!email || !pw) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, pw]);

  // checkbox
  useEffect(() => {
    if (checkboxSelector.id) {
      setCheckbox(true);
    } else {
      setCheckbox(false);
    }
  }, []);

  return (
    <LoginStyle disabled={disabled}>
      <div className="loginWrap">
        {/* SUBMIT LOGIN INFO */}
        <h2>LANDMARK</h2>
        <h3>로그인이 필요합니다</h3>
        <form className="submitInfo" onSubmit={onSubmit}>
          {/* EMAIL INPUT */}
          <input
            className="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* PASSWORD INPUT */}
          <input
            className="pw"
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          {/* CHECKBOX */}
          <div className="checkboxWrap">
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => setCheckbox((prev) => !prev)}
              checked={checkbox}
              readOnly
            />
            <span>아이디 기억하기</span>
          </div>
          {/* SUBMIT BUTTON */}
          <input
            className="submitBtn"
            type="submit"
            value="로그인"
            disabled={disabled}
          />
        </form>
      </div>
    </LoginStyle>
  );
}
