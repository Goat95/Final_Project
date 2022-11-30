import React, { useRef, useState, useEffect } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RightSliderStyle } from "../styles/RightSliderStyle";
import { Hidden } from "@mui/material";

import { StyledLink } from "../styles/SearchStyle";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function RightSlider() {
  // 상품 이미지, 이름, 가격 데이터 받아오기

  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 3 }).map((_, index) => `Slide ${index + 1}`)
  );

  // product value
  const [productList, setProductList] = useState([]);

  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const data = JSON.stringify({
    searchTags: ["우주"],
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
        setProductList(res.data);
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  }, []);

  // const popData = [
  //   {
  //     id: 1,
  //     title: "프라하성",
  //     price: "$3500",
  //     img: "http://image14.hanatour.com/uploads/2020/02/DSC09627_32092433.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "크레타 섬",
  //     price: "$150",

  //     img: "https://tripfabrik.de/wp-content/uploads/2015/12/Balos-Donkey-at-Lagune-Crete-Island-Greece-2.jpg",
  //   },

  //   {
  //     id: 3,
  //     title: "패스트캠퍼스",
  //     price: "$1",

  //     img: "https://shots.codepen.io/batbzhek/pen/QoMLJR-800.jpg?version=1552400945",
  //   },

  //   {
  //     id: 4,
  //     title: "독도",
  //     tags: ["갓한민국", "동해", "섬", "우리꺼"],
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris",
  //     seller: "Jun Hyeok",
  //     price: "$28,30",
  //     sale: "$12",
  //     img: "https://www.dokdo-takeshima.com/korea/wp-content/uploads/liancourt-dokdo-gal-26.jpg",
  //   },
  // ];


   
  useEffect(() => {
    axios(config).then((res) => setProductList(res.data));
  }, []);


  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={5}
        navigation={true}
        virtual
        flipEffect={true}
        loop={false}
      >
        {productList.map((slideContent, i) => (
          <SwiperSlide key={slideContent} virtualindex={i}>
            {
                <RightSliderStyle>
                  <div className="rightSliderContainer">
                    <StyledLink
                    className="link"
                    to={`/search/${slideContent.id}`}
                    >
                      <div className="rightSliderImgBox">
                        <img
                          className="rightSliderImg"
                          src={slideContent.thumbnail}
                          alt="상품이미지"
                        />
                      </div>
                      <div className="rightSliderTextBox">
                        <h2>{slideContent.title}</h2>
                        <h3>{Number(slideContent.price).toLocaleString("ko-KR")}원</h3>
                      </div>
                      
                    </StyledLink>
                  </div>
                </RightSliderStyle>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
