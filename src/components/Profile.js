import {
  SentimentSatisfiedAlt,
  SpatialTracking,
  SpatialTrackingSharp,
} from "@mui/icons-material";
import {
  Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  Outlet,
} from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../reducers/isLoginReducer";

// component
import EditModal from "./EditModal";

import { Divider } from "@mui/material";

// routes & components

// bootstrap
import { Nav } from "react-bootstrap";

// icons

import HomeIcon from "@mui/icons-material/Home";
import AddCardIcon from "@mui/icons-material/AddCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import { ProfileStyle } from "../styles/ProfileStyle";
import { DOM_KEY_LOCATION } from "@testing-library/user-event/dist/keyboard/types";

import userDefaultImg from "../assets/userImage.png";

export default function ProfileLeft(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const selector = useSelector((state) => state.isLoginReducer);
  console.log(selector);
  const nickName = selector.displayName;
  const profileImg = selector.profileImg;

  // 관리자 감지
  const [findAdmin, setFindAdmin] = useState(false);

  // logout api
  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const config = {
    method: "post", //통신 방식
    url: "/api/auth/logout", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${selector.accessToken}`,
    },
    // 서버가 제공한 응답 (데이터)
  };

  const isLoggedOut = () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      alert("로그아웃되었습니다.");
      navigate("/");
      dispatch(Logout());
    } else {
      alert("취소합니다");
    }
  };

  const onClick = () => {
    axios(config).then((res) => console.log(res.data));
    //window.confirm('로그아웃하시겠습니까?');
    //alert('로그아웃하시겠습니까???');
    //navigate('/');
    //dispatch(Logout())
    isLoggedOut();
  };

  useEffect(() => {
    if (
        selector.email === "giback@landmark.com" 
        || selector.email === "chiyun@landmark.com" 
        || selector.email === "junhyeok@landmark.com" 
        || selector.email === "suhyeon@landmark.com"
      ) 
    {
      setFindAdmin(true);
    } else {
      setFindAdmin(false);
    }
  }, [])

  // 유저 닉네임
  return (
    <section className="profileContainer">
      <aside className="profileNavBox">
        <div style={{ position: "relative" }} className="profileTitle">
          <EditModal />
          <h5>PROFILE</h5>
        </div>

        <div className="profileDetails">
          <div
            style={{
              width: "120px",
              height: "120px",
              background: "white",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              overflow: "hidden",
            }}
            className="profileImgBox"
          >
            <img
              src={profileImg}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                margin: "0 auto",
              }}
            />
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,image/png,image/jpeg"
              name="profile_img"
            />
            {/* 유저 프로필 */}
            {}
          </div>
          <span style={{ fontSize: "20px", fontWeight: "300" }}>
            {nickName}
          </span>
          {/* 유저 닉네임 */}
        </div>
        <Divider className="divider" />

        <ul className="profileList">
          <li
            onClick={() => {
              navigate("home");
            }}
          >
            <HomeIcon className="icon" />
            <span>홈</span>
          </li>
          <li
            onClick={() => {
              navigate("account");
            }}
          >
            <AddCardIcon className="icon" />
            <span>내 계좌</span>
          </li>
          <li
            onClick={() => {
              navigate("favor");
            }}
          >
            <FavoriteBorderIcon className="icon" />
            <span>찜한 매물</span>
          </li>
          <li
            onClick={() => {
              navigate("setting");
            }}
          >
            <SettingsIcon className="icon" />
            <span>설정</span>
          </li>

          <li onClick={onClick}>
            <LogoutIcon className="icon" />
            <span>로그아웃</span>
          </li>
          { findAdmin &&
            <>
              <Divider className="divider" />
              <li
                onClick={() => {
                  navigate("admin/list");
                }}
              >
                <AdminPanelSettingsRoundedIcon className="icon" />
                <span>관리자</span>
              </li>
            </>
          }
        </ul>
      </aside>
    </section>
  );
}
