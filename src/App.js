// react
import React, { useState, useEffect } from "react";
// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import "../src/App.css";

// routes&components
import Header from "./components/Header";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Cart from "./routes/Cart";
import Orders from "./routes/Orders";
import Question from "./routes/Question";
import Products from "./routes/Products";
import Profile from "./routes/Profile";
import Search from "./routes/Search";
import SearchDetail from "./routes/SearchDetail";
import Payment from "./routes/Payment";

// profile nested router
import ProfileHome from "./routes/ProfileHome";
import Account from "./routes/Account";
import Favor from "./routes/Favor";
import Setting from "./routes/Setting";
import Admin from "./routes/Admin";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import SoldList from "./components/SoldList";

// redux
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "./reducers/isLoginReducer";

// hoc
import UserCheck from "./hoc/UserCheck";
import AdminCheck from "./hoc/AdminCheck";

// aos
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1000,
  easing: "ease-in",
  once: true,
});

export default function App() {
  // useSelector
  const selector = useSelector((state) => state.isLoginReducer);
  const isLogin = selector.isLogin;
  const [isClick, setIsClick] = useState(false);
  // useDispatch
  const dispatch = useDispatch();
  // modal
  const modalFn = () => {
    return <>{!isLogin && <Modal />}</>;
  };

  // get auth info
  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const config = {
    method: "post", //통신 방식
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${selector.accessToken}`,
    },
    // 서버가 제공한 응답 (데이터)
  };

  // submit
  useEffect(() => {
    if (isLogin) {
      axios(config)
        .then(() => {
          console.log("auth!");
        })
        .catch(() => {
          dispatch(Logout());
        });
    }
  }, []);

  // hoc login
  const CheckedProfileHome = UserCheck(ProfileHome, "U-need-Login");
  const CheckedSearch = UserCheck(Search, "U-need-Login");
  const CheckedAccount = UserCheck(Account, "U-need-Login");
  const CheckedFavor = UserCheck(Favor, "U-need-Login");
  const CheckedSetting = UserCheck(Setting, "U-need-Login");
  const CheckedPayment = UserCheck(Payment, "U-need-Login");
  // hoc admin
  const CheckedList = AdminCheck(ProductList, "R-U-Admin?");
  const CheckedAddProduct = AdminCheck(AddProduct, "R-U-Admin?");
  const CheckedSoldList = AdminCheck(SoldList, "R-U-Admin?");

  return (
    <div className="App" onMouseDown={() => setIsClick(true)}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/question" element={<Question />} />
          <Route path="/profile" element={<Navigate to="/" />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="home" element={<CheckedProfileHome />}></Route>
            <Route path="account" element={<CheckedAccount />}></Route>
            <Route path="favor" element={<CheckedFavor />}></Route>
            <Route path="setting" element={<CheckedSetting />}></Route>
            {/* ADMIN */}
            <Route path="admin" element={<Navigate to="/" />} />
            <Route path="admin" element={<Admin />}>
              <Route path="list" element={<CheckedList />} />
              <Route path="add" element={<CheckedAddProduct />} />
              <Route path="sold" element={<CheckedSoldList />} />
            </Route>
          </Route>
          <Route path="/search" element={<CheckedSearch />} />
          <Route path="/search/:searchId" element={<SearchDetail />} />
          <Route path="/payment/:productId" element={<CheckedPayment />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* profile Nested Routes */}
        </Routes>
        <Footer />
        {isClick && modalFn()}
      </BrowserRouter>
    </div>
  );
}
