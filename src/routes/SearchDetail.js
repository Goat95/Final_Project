// react
import React, { useState, useEffect } from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { addrecentList } from "../reducers/recentListReducer";
// image
import cartIMG from "../assets/cart.svg";
import { CircularProgress } from "@mui/material";
// style
import { SearchDetailStyle, StyledLink } from "../styles/SearchStyle";

export default function SearchDetail() {
  // get search list id
  const params = useParams();
  const [detailInfo, setDetailInfo] = useState("");
  // price state
  const [price, setPrice] = useState("");
  const num = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // loading
  const [loading, setLoading] = useState(true);
  // useDispatch
  const dispatch = useDispatch();
  // useSelector

  // get search product api
  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const config = {
    method: "get", //통신 방식
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${params.searchId}`, //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      masterKey: true,
    },
    // 서버가 제공한 응답 (데이터)
  };
  // get product list
  useEffect(() => {
    axios(config)
      .then(function (res) {
        dispatch(addrecentList(res.data));
        setDetailInfo(res.data);
        setPrice(res.data.price);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  }, []);
  // d
  return (
    <SearchDetailStyle>
      {loading ? (
        <div className="bg">
          <CircularProgress className="circular" />
        </div>
      ) : (
        <div className="detailWrap">
          <div className="detailMain">
            {/* THUMBNAIL */}
            <div className="detailImg">
              <img src={detailInfo.thumbnail} alt="thumbnail" />
            </div>
            {/* DETAILS */}
            <div className="description">
              {/* TITLE */}
              <h2 className="title">{detailInfo.title}</h2>
              <p>{detailInfo.description}</p>
            </div>
          </div>

          {/* PURCHASE */}
          <div className="purchase">
            {/* PRICE */}
            <>
              <span>{`${num}원`}</span>
            </>
            <>
              <button className="purchaseBtn">
                <StyledLink className="link" to={`/payment/${detailInfo.id}`}>
                  <div className="btnWrap">
                    <img src={cartIMG} alt="cartIMG" />
                    <span className="purchaseText">구매하기</span>
                  </div>
                </StyledLink>
              </button>
            </>
          </div>
        </div>
      )}
    </SearchDetailStyle>
  );
}
