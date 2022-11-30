import React, { useRef, useState, useEffect, useSelector } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledLink } from "../styles/SearchStyle";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LeftSliderStyle } from "../styles/LeftSliderStyle";
import styled from "styled-components";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function LeftSlider(props) {


  // product value
  const [productList, setProductList] = useState([]);


  
  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const data = JSON.stringify({
    searchTags: ["미국"],
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


  // const forYouData = [
  //   {
  //     id: 3,
  //     title: "애플사옥",
  //     tags: ["실리콘밸리", "애플", "파격세일"],
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris",
  //     seller: "Su Hyoen",
  //     price: "$3",
  //     sale: "$1000",
  //     img: "https://image.kmib.co.kr/online_image/2016/0929/201609291847_11140923623584_1.jpg",
  //   },

  //   {
  //     id: 2,
  //     title: "광안대교",
  //     tags: ["부산", "광안리", "다리"],
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris",
  //     seller: "Su Hyoen",
  //     price: "$19,20",
  //     sale: "$18",
  //     img: "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDFfMTAx/MDAxNTI3ODYyNTgwODU0.eT8Qg-mC4BPQoziZ4NMSPnAksQ7lsYHG6P6oZsfl2PYg.EG99AqXpB5-YEN_AEDfVvjSIw6NKpVeY5tBSvMHuUG0g.JPEG.oblove3/%EA%B4%91%EC%95%88%EB%8C%80%EA%B5%90_%EC%A7%81%EC%84%A0%EB%9D%BC%EC%9D%B8.jpg?type=w800",
  //   },
  //   {
  //     id: 1,
  //     title: "미왕빌딩",
  //     tags: ["강남", "패스트캠퍼스", "강의장"],
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris",
  //     seller: "Park Ki Baek",
  //     price: "$18,78",
  //     sale: "$25",
  //     img: "https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjhfNDcg/MDAxNTE0NDI4NDY3MjQ2.-fkYVqYvAI6sIg2Fb5JIN9-j-056ndcql6w5ISTC9LUg.0ABVZlfvGAXvlgOxBJPONrG2hWHio3tiFSv62QB_UxAg.JPEG.coldwell25/22.jpg?type=w800",
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
  //   {
  //     id: 5,
  //     title: "경복궁",
  //     tags: ["서울", "광화문", "경복궁", "궁궐"],
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris",
  //     seller: "Jun Hyeok",
  //     price: "$25,76",
  //     sale: "$10",
  //     img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1622,h_1080,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/qwo9klmec2tcooqke60l/%EA%B2%BD%EB%B3%B5%EA%B6%81%EA%B0%80%EC%9D%B4%EB%93%9C%ED%88%AC%EC%96%B4-%ED%81%B4%EB%A3%A9KLOOK%ED%95%9C%EA%B5%AD.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "멜버른 플린더스 스테이션",
  //     tags: ["호주", "기차역", "멜버른", "오세아니아"],
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris",
  //     seller: "Chiyu",
  //     price: "$25,76",
  //     sale: "$10",
  //     img: "https://www.monashcollege.edu.au/__data/assets/image/0013/2400520/Melbourne-city.jpg",
  //   },
  // ];

  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: data.length }).map(
      (i, index) => `Slide ${index + 1}`
    )
  );

  
  useEffect(() => {
    axios(config).then((res) => setProductList(res.data));
  }, []);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={-50}
        navigation={true}
        virtual
        flipEffect={true}
      >
        {productList.map((slideContent, i) => (
          <SwiperSlide key={slideContent} virtualIndex={i}>
            {
              
                <LeftSliderStyle>
                  <StyledLink
                    className="link"
                    to={`/search/${slideContent.id}`}
                  >
                    <div className="leftSliderContainer">
                      <div className="leftSliderImgBox">
                        <img
                          className="leftSliderImg"
                          src={slideContent.thumbnail}
                          // 싱픔 이미지 데이터
                          alt="상품이미지"
                        />
                      </div>
                      <div className="leftSliderTextBox">
                        <h5>{slideContent.title}</h5>
                        {/* 상품명 데이터 */}
                      </div>
                    </div>
                  
                  </StyledLink>
                </LeftSliderStyle>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
