import React, { useEffect, useState } from "react";
import cart from "../assets/cart.svg";
import axios from "axios";

// styles
import { MerchandiseBox } from "../styles/MerchandiseStyle";
import { StyledLink } from "../styles/SearchStyle";

// Import Swiper React
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Merchandise() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [productList, setProductList] = useState([]);

  const data = JSON.stringify({
    searchTags: ["한국"],
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

  useEffect(() => {
    axios(config).then((res) => setProductList(res.data));
  }, []);

  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={4}
      spaceBetween={30}
      navigation
      virtual
      effect={"flip"}
      speed={100}
    >
      {productList.map((merchandise, index) => {
        // 각 상품 태그들 저장을 위한 변수
        let tag = merchandise.tags;
        // 태그를 3개만 화면에 보이기 위한 코드
        let newTagArr = [...tag];
        newTagArr.splice(3, tag.length);

        return (
          <SwiperSlide key={merchandise} virtualIndex={index}>
            {
              <>
                <MerchandiseBox>
                  <div className="merchandiseImage">
                    <img src={merchandise.thumbnail} alt="merchandiseImg" />
                  </div>
                  <div className="merchandiseInfo">
                    <h4 className="merchandiseTitle">{merchandise.title}</h4>
                    <div className="merchandiseTagBox">
                      {newTagArr.map((tag) => (
                        <span key={index} className="merchandiseTag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="merchandiseDesc">{merchandise.description}</p>
                    <div className="purchaseBox">
                      <StyledLink
                        className="link"
                        to={`/search/${merchandise.id}`}
                      >
                        <button className="addCartBtn">
                          <img src={cart} alt="cart" />
                          구매하기
                        </button>
                      </StyledLink>
                      <span className="price">
                        {Number(merchandise.price).toLocaleString("ko-KR")}원
                      </span>
                    </div>
                  </div>
                </MerchandiseBox>
              </>
            }
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
