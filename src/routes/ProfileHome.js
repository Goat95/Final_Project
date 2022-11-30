import React, { useEffect, useState } from "react";
import { ProfileBox } from "../styles/ProfileStyle";
import { ProfileHomeStyle } from "../styles/ProfileHomeStyle";
import RecentImage from "../components/RecentImage";
import { Divider } from "@mui/material";
// redux
import { useSelector } from "react-redux";
// components & routes
import ListCard from "../components/ListCard";
import { StyledLink } from "../styles/SearchStyle";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { MoveStyle } from "../styles/ProfileHomeStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Chart from "../components/Chart";

// apexcharts

import ApexCharts from "apexcharts";

// icons
import AddCardIcon from "@mui/icons-material/AddCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProfileHome() {
  // useSelector
  const recentListSelector = useSelector((state) => state.recentListReducer);

  const [isEmpty, setIsEmpty] = useState(false);

  const [move, setMove] = useState(0);
  // 최근 본 매물 슬라이더 state

  const [clickNumber, setClickNumber] = useState(0);

  // Next 클릭 횟수

  useEffect(() => {
    if (recentListSelector.length === 0) {
      setIsEmpty(true);
    }
  });

  // console.log(recentListSelector);
  // console.log(isEmpty);

  // 비어있으면 삼항 연산자로 기본 component 놔두기

  const Back = () => {
    setMove(move + 40);
  };

  const Next = () => {
    if (move > -80) {
      setMove(move - 40);
    } else if (move == -80) {
      setClickNumber(clickNumber + 1);
    }
  };

  return (
    <ProfileBox>
      <ProfileHomeStyle>
        {/* 최근 본 매물  */}
        <div className="recent-products">
          <div className="recent-products-title">
            <AddCardIcon className="addCardIcon" />
            <span>최근 본 매물</span>
          </div>
          <Divider variant="middle" />
          <br />
          {!isEmpty ? (
            <MoveStyle move={move}>
              <div style={{ width: "33%" }} className="recent-products-card">
                {recentListSelector.map((v) => (
                  <StyledLink to={`/search/${v.id}`}>
                    <div className="listWrap listWrap2">
                      <ListCard info={v} />
                    </div>
                  </StyledLink>
                ))}
              </div>
            </MoveStyle>
          ) : (
            <h1>최근 본 매물이 없습니다</h1>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <KeyboardDoubleArrowLeftIcon
              fontSize="large"
              style={{ cursor: "pointer" }}
              onClick={move < 0 ? Back : null}
            />
            <KeyboardDoubleArrowRightIcon
              fontSize="large"
              style={{ cursor: "pointer" }}
              onClick={Next}
            />
          </div>
          <EndModal move={move} clickNumber={clickNumber} />
        </div>

        {/* 최근 거래 내역 파트 */}

        <div className="recent-transit">
          <div className="recent-transit-title">
            <FavoriteBorderIcon className="favorIcon" />
            <span>최근 거래 내역</span>
          </div>
          <Divider variant="middle" />
          <br />
          <Chart />
        </div>
      </ProfileHomeStyle>
    </ProfileBox>
  );
}

function EndModal(props) {
  let copy = props.clickNumber;

  console.log(copy);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (copy > 0) {
      setOpen(true);
    }
  }, [copy]);

  return (
    <>
      <Button style={{ display: "none" }} onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            다음 매물이 없습니다!
            <img
              src="https://item.kakaocdn.net/do/4f4e1e8085add1beae4ca9f235acc7a08f324a0b9c48f77dbce3a43bd11ce785"
              alt="sorry"
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
