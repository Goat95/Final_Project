import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import MenuDrawer from "./Drawer";
import { Link } from "react-router-dom";
// reducer
import { UpdateSearchValue } from "../reducers/searchReducer";

import "animate.css";

import { style } from "@mui/system";
import { TextField } from "@mui/material";

// mui compoents

import { styled, alpha } from "@mui/material/styles";
import { AppbarStyle } from "../styles/AppbarStyle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { positions } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CircularProgress from "@mui/material/CircularProgress";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useNavigate } from "react-router-dom";
import { Logout } from "../reducers/isLoginReducer";

// aos

import Aos from "aos";
import "aos/dist/aos.css";
import localStorage from "redux-persist/es/storage";
import { BoyRounded } from "@mui/icons-material";

Aos.init({
  duration: 600,
  easing: "ease-in ",
  once: true,
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "500px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display: "none",

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    display: "block",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",

  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("height"),
    width: "0",
    left: "0",

    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    // "&focus-border": {
    //   position: "absolute",
    //   bottom: "0",
    //   left: "0",
    //   width: "0",
    //   height: "2px",
    //   backgroundColor: "#4caf50;",
    // },
  },
}));

export default function PrimarySearchAppBar() {
  // search product
  const [searchValue, setSearchValue] = useState("");

  // navigiate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.isLoginReducer);
  const userDisplayName = selector.displayName;
  const userProfileImg = selector.profileImg;

  const [scroll, setScroll] = useState(1);

  // serach loading control

  const [loading, setLoading] = useState(false);

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
    // alert("로그아웃??");
    // navigate("/");
    // dispatch(Logout());
    isLoggedOut();
  };

  // submit 후처리

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // isLogin
  const isLogin = selector.isLogin;
  const isLogOut = !selector.isLogin;
  // 로그인 확인

  const userImage = selector.profileImg;

  // isLogin state => 로그인 /프로필

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (window.scrollY > 100) {
      setScroll(0.4);
    } else if (window.scrollY < 100) {
      setScroll(1);
    }
  });

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div
        onClick={() => {
          navigate("/profile/home");
        }}
      >
        <MenuItem s onClick={handleMenuClose}>
          프로필
        </MenuItem>
      </div>
      <MenuItem
        onClick={() => {
          onClick();
          handleMenuClose();
        }}
      >
        로그아웃
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const onSubmitSearch = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch(UpdateSearchValue(searchValue));
  };

  // 검색창 fixed background

  const outSection = useRef();

  const [fixed, setFixed] = useState(false);
  // fixed 컨트롤

  const [clickWindow, setClickWindow] = useState(false);

  const [history, setHistory] = useState(false);

  const onClickSearch = () => {
    setFixed(true);
    setHistory(true);
  };

  const body = document.querySelector("body");

  useEffect(() => {
    if (fixed === true) {
      body.style.overflow = "hidden";
    } else if (fixed === false) {
      body.style.overflow = "auto";
    }
  }, [fixed]);

  // 모달열었을 시 body 스크롤 안되게 하는 useEffect

  return (
    <Box
      style={{ height: "76px", position: "relative", zIndex: "99" }}
      sx={{ flexGrow: 1 }}
    >
      <AppbarStyle scroll={scroll}>
        <>
          <AppBar
            className="AppBarClass"
            color="primary"
            scroll={scroll}
            style={{
              padding: "5px 25px",
              display: "flex",
            }}
          >
            <Toolbar>
              <div
                style={{
                  cursor: "pointer",
                  width: "70px",
                  height: "auto",
                  marginRight: "20px",
                }}
              >
                <img
                  className="homelogo"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 1);
                    // 홈화면에서 이동하게 만들기
                  }}
                  style={{ width: "90px" }}
                  src="https://www.landmarkgroup.net/wp-content/uploads/2022/06/LM_Shadow_white_logo.png"
                  alt="logo"
                />
              </div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{
                  mr: 2,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <MenuDrawer></MenuDrawer>
              </IconButton>

              <Typography
                style={{ marginRight: "150px" }}
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              ></Typography>
              {/* 검색창 fixed */}

              {fixed === true ? (
                <div
                  ref={outSection}
                  onClick={(e) => {
                    if (outSection.current === e.target) {
                      setFixed(false);
                      setHistory(false);
                    }
                  }}
                  className={`${fixed ? "fixed" : null}`}
                ></div>
              ) : null}

              <form onSubmit={onSubmitSearch}>
                <Search style={{ width: "450px" }}>
                  <SearchIconWrapper className="searchIcon">
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    className="MuiInputBase-inputSizeSmall"
                    placeholder="랜드마크를 검색하세요."
                    inputProps={{ "aria-label": "search" }}
                    value={searchValue}
                    onChange={(e) =>
                      setSearchValue(e.target.value).then(() => {})
                    }
                    onClick={onClickSearch}
                    onKeyDown={() => {
                      if (window.event.keyCode == 13) {
                        setFixed(false);
                        setHistory(false);
                      }
                    }}
                  />
                </Search>
                {loading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                ) : null}
                <div className={`${history ? "history" : "nothing"}`}>
                  <h3>빠른 링크</h3>
                  <div className="historyTextBox">
                    <h5>랜드마크 임시 휴무 관련 자주하는 질문</h5>
                    <h5>한국</h5>
                    <h5>미국 빌딩</h5>
                    <h5>일본 싼 매물</h5>
                  </div>
                </div>
              </form>

              <Box sx={{ flexGrow: 1 }} />
              {!isLogin ? (
                <Toolbar className="loginBox">
                  <Button color="inherit">Login</Button>
                </Toolbar>
              ) : (
                <Box
                  className="profileBox"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <IconButton
                    sx={{
                      "&.MuiButtonBase-root:hover,active,focused": {
                        bgcolor: "transparent",
                      },
                    }}
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge
                      sx={{
                        "&.MuiButtonBase-root:hover,active,focused": {
                          bgcolor: "transparent",
                        },
                      }}
                      badgeContent={4}
                      color="error"
                    >
                      <MailIcon className="animate__animated animate__heartBeat animate__repeat-4" />
                    </Badge>
                  </IconButton>
                  <IconButton
                    sx={{
                      "&.MuiButtonBase-root:hover,active,focused": {
                        bgcolor: "transparent",
                      },
                    }}
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge
                      sx={{
                        "&.MuiIconButton-root:hover ": {
                          bgcolor: "transparent",
                        },
                      }}
                      style={{ marginRight: "10px" }}
                      badgeContent={17}
                      color="error"
                    >
                      <NotificationsIcon className="animate__animated animate__heartBeat animate__repeat-2" />
                    </Badge>
                  </IconButton>
                  <IconButton
                    className="animate__animated animate__heartBeat MuiButtonBase-root"
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    sx={{
                      "&.MuiButtonBase-root:hover,active,focused": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    {userProfileImg ? (
                      <img
                        style={{
                          width: "37px",
                          height: "37px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                        src={userProfileImg}
                      />
                    ) : (
                      <AccountCircle style={{ marginRight: "4px" }} />
                    )}
                    <span style={{ fontSize: "15px", fontWeight: "400" }}>
                      {userDisplayName} 님
                    </span>
                  </IconButton>
                </Box>
              )}

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={() => {
                    handleMobileMenuOpen();
                  }}
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </>
      </AppbarStyle>
      {/* for commit */}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
