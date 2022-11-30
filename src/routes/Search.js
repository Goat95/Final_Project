// react
import React, { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";
// components & routes
import ListCard from "../components/ListCard";
import SteamedBtn from "../components/SteamedBtn";
// style
import { SearchStyle } from "../styles/SearchStyle";
import { StyledLink } from "../styles/SearchStyle";

export default function Search() {
  // useSelector
  const searchSelector = useSelector(
    (state) => state.searchReducer.searchValue
  );
  // product value

  // product value

  const [nothing, setNothing] = useState(false);
  const [productList, setProductList] = useState([]);
  // search product api

  // useEffect(() => {
  //   if (productList.length > 0) {
  //     setNothing(false);
  //   }
  //   const Timeout = setTimeout(() => {
  //     if (productList.length === 0) {
  //       setNothing(true);
  //     }
  //   }, 1000);
  // });

  // setTimeout 함수를 통해서 1초 뒤 조건문으로 검색하는 것으로 해서
  // 렌더링 되자마자 array를 검사하는 것을 피해서 setNothing 배너 보이지 않게 함

  // 이 코드의 문제점, 데이터를 불러오는데 1초가 넘어가면, 문제가 생김

  // 로딩 스테이트
  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const data = JSON.stringify({
    searchTags: [searchSelector],
  });
  const config = {
    method: "post", //통신 방식
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      masterKey: true,
    },
    data: data,
    // 서버가 제공한 응답 (데이터)
  };
  // get product list
  useEffect(() => {
    axios(config)
      .then(function (res) {
        if (res.data.length == 0) {
          setNothing(true);
        } else {
          setProductList(res.data);
        }
        // 데이터 받아오는 곳에서 바로 조건문으로 걸러주는 것이 useEffect 없이 UI 띄울 수 있음
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  }, [searchSelector]);

  return (
    <SearchStyle>
      {/* 관련 검색 결과 없을 시 이미지 배출 */}
      {nothing ? (
        <>
          <div className="productList nothing">
            <div className="sorryImg">
              {" "}
              <h3 className="sorryText">
                죄송하지만 일치하는 결과가 없습니다. 도시나 지역 이름, 우편번호
                등을 입력해서 매장을 찾으시거나 우리가 제안드리는 검색어를
                이용해보세요.
              </h3>
            </div>
          </div>
        </>
      ) : (
        <div className="productList">
          {productList.map((product) => (
            <div className="productWrap" key={product.id}>
              <StyledLink className="link" to={`/search/${product.id}`}>
                <ListCard info={product} />
              </StyledLink>
              <div className="steamedBtn">
                <SteamedBtn info={product} />
              </div>
            </div>
          ))}
        </div>
      )}
    </SearchStyle>
  );
}
