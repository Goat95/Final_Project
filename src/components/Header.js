import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { HeaderBox } from "../styles/HeaderStyle";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "./NavBar";

export default function Header() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const selector = useSelector((state) => state.isLoginReducer);
  const isLogin = selector.isLogin;
  const [isClick, setIsClick] = useState(false);
  const popModal = () => {
    return <>{isLogin && <Modal />}</>;
  };
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("130px") : setnavSize("150px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div>
      <ResponsiveAppBar />
    </div>
  );
}
