import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import axios from "axios";
import { EditModalStyle } from "../styles/EditModalStyle";
import { EditProfile } from "../reducers/isLoginReducer";
import { Navigate, useNavigate } from "react-router-dom";

// reducer

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserInfo = useSelector((state) => state.isLoginReducer);

  const profileNickname = getUserInfo.displayName;
  const profileImg = getUserInfo.profileImg;

  // console.log(profileNickname, profileImg);
  // console.log(getUserInfo.accessToken, "token");
  // EditProfile state

  // 프로필 수정

  const [changeName, setChangeName] = useState(profileNickname);
  const [changeImg, setChangeImg] = useState(profileImg);

  const [file, setFile] = useState();
  //  사용자 변경 입력 값

  const fileInput = useRef(null);
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  useEffect(() => {
    if (file) {
      const newImg = getBase64(file);
      setChangeImg(newImg);
    }
  }, [setFile]);

  useEffect(() => {
    console.log(changeImg, "img");
    fetchPutProfileImage(changeImg);
  }, [changeImg]);
  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      //업로드 취소할 시 기본이미지

      return;
    }

    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setChangeImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const data = JSON.stringify({
    displayName: profileNickname !== changeName && changeName,
    profileImgBase64: profileImg !== changeImg && changeImg,
  });

  const editProfile = {
    method: "put",
    url: "/api/auth/user",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${getUserInfo.accessToken}`,
    },
    data: data,
  };
  // console.log(data);

  const onSubmitName = (e) => {
    e.preventDefault();
    axios(editProfile)
      .then(function (response) {
        const action = {
          displayName: response.data.displayName,
        };
        dispatch(EditProfile(action));
        console.log(response.data.displayName);
      })
      .then((response) => {
        const delay = setTimeout(() => {
          alert("닉네임 변경 완료!");
        }, 200);
      })
      // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        // 오류발생시 실행
      });
  };

  const fetchPutProfileImage = () => {
    axios(editProfile)
      .then(function (response) {
        console.log(response.data);
        dispatch(
          EditProfile({
            profileImgBase64: changeImg,
            profileImg: response.data.profileImg,
          })
        );
        console.log(response.data.profileImgBase64);
      })

      // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        // 오류발생시 실행
      });
  };

  return (
    <EditModalStyle>
      <div style={{ position: "absolute", top: "0px", right: "5%" }}>
        <Button style={{ fontSize: "12px" }} onClick={handleOpen}>
          프로필 수정
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={{
              width: "500px",
              height: "700px",
              background: "#242526",
              color: "white",
              textAlign: "center",
            }}
            sx={style}
          >
            <Typography style={{ fontSize: "25px" }} id="modal-modal-title">
              프로필 수정
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 5 }}>
              {/* editName */}
              <form
                style={{
                  marginBottom: "20px",
                }}
                onSubmit={onSubmitName}
              >
                <div className="editDisplayBox">
                  <h6 className="editDisplayTitle">닉네임 수정</h6>
                  <input
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      marginTop: "15px",
                      outline: "none",
                    }}
                    className="editInput"
                    placeholder="닉네임을 입력하세요"
                    maxLength={8}
                    type="text"
                    value={changeName}
                    onChange={(e) => {
                      setChangeName(e.target.value);
                      //유저의 입력값으로 state 저장 =>
                    }}
                    on
                  />
                  <input
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      textDecoration: "none",
                      outlineStyle: "none",
                      backgroundColor: "#6c5dd3",
                      color: "white",
                    }}
                    className="editDisplayNameButton"
                    onSubmit={onSubmitName}
                    type="submit"
                    value="변경"
                  />
                </div>
                {/* editImg */}
              </form>
              <br />
              <form>
                <div className="editDisplayBox">
                  <h6
                    style={{
                      marginBottom: "40px",
                    }}
                  >
                    이미지 수정
                  </h6>
                  <div
                    style={{
                      width: "240px",
                      height: "240px",
                      background: "rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "60px",
                      margin: "0 auto",
                      cursor: "pointer",
                    }}
                    className="profileImgBox"
                  >
                    <img
                      onClick={(e) => {
                        e.preventDefault();
                        fileInput.current.click();
                      }}
                      src={profileImg}
                      style={{
                        width: "100%",
                        height: "auto",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <input
                    style={{
                      textAlign: "center",
                      margin: "0 auto",
                      width: "45%",
                      cursor: "pointer",
                    }}
                    type="file"
                    accept="image/*"
                    name="profile_img"
                    onChange={onChange}
                    onClick={(e) => (e.target.value = null)}
                    // 초기화
                    ref={fileInput}
                  />
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </EditModalStyle>
  );
}
