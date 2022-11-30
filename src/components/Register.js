// react
import React, { useState, useEffect } from "react";
// react router dom
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { Auth } from "../reducers/isLoginReducer";
// style
import { RegisterStyle } from "../styles/LoginRegisterStyle";

export default function Login() {
  // useNavigate
  const navigate = useNavigate();
  // useDispatch
  const dispatch = useDispatch();
  // value for id, email, pw, pwConfirm
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  // button disabled
  const [disabled, setDisabled] = useState(true);
  // message for id, email, pw, pwConfirm
  const [idMsg, setIdMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [pwConfirmMsg, setPwConfirmMsg] = useState("");

  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const data = JSON.stringify({
    email: email,
    password: pw,
    displayName: id,
  });
  const config = {
    method: "post", //통신 방식
    url: "/api/auth/signup", //서버
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
      .then(res => {
        dispatch(Auth(res.data));
        navigate("/");
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  };

  // disabled
  useEffect(() => {
    if (!id || !email || !pw || !pwConfirm) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [id, email, pw, pwConfirm]);

  // password message
  useEffect(() => {
    if (pw.length === 0) {
      setPwMsg("");
    } else if (pw.length < 8 || pw.length > 20) {
      setPwMsg("비밀번호는 8자리 이상 20자리 이하여야합니다.");
    } else if (pw.length >= 8 || pw.length <= 20) {
      setPwMsg("");
    }
    // Message for pwconfirm
    if (pw === pwConfirm) {
      setPwConfirmMsg("");
    } else if (pw !== pwConfirm) {
      setPwConfirmMsg("비밀번호가 일치하지않습니다.");
    }
  }, [pw, pwConfirm]);

  return (
    <RegisterStyle disabled={disabled}>
      <div className="loginWrap">
        {/* SUBMIT LOGIN INFO */}
        <h2>LANDMARK</h2>
        <form className="submitInfo" onSubmit={onSubmit}>
          {/* ID INPUT */}
          <input
            className="id"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <p className="idMsg">{idMsg}</p>
          {/* EMAIL INPUT */}
          <input
            className="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="emailMsg">{emailMsg}</p>
          {/* PASSWORD INPUT */}
          <input
            className="pw"
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <p className="pwMsg">{pwMsg}</p>
          {/* PASSWORD CONFIRM INPUT */}
          <input
            className="pwConfirm"
            type="password"
            placeholder="비밀번호 확인"
            value={pwConfirm}
            onChange={(e) => setPwConfirm(e.target.value)}
          />
          <p className="pwConfirmMsg">{pwConfirmMsg}</p>
          {/* SUBMIT BUTTON */}
          <input
            className="submitBtn"
            type="submit"
            value="회원가입"
            disabled={disabled}
          />
        </form>
      </div>
    </RegisterStyle>
  );
}
