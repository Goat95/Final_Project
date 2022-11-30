// react
import React from "react";
import styled from "styled-components";
// image
import ourStore from "../assets/ourstore.png";
import { FooterStyle } from "../styles/FooterStyle";
// style

import "remixicon/fonts/remixicon.css";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

// aos
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1100,
  easing: "ease-in",
  once: true,
});

export default function Footer() {
  return (
    <>
      <FooterStyle>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>SNS에서도 우리를 만날 수 있습니다!</span>
              <i class="ri-facebook-box-fill"></i>
              <i class="ri-instagram-line"></i>
              <i class="ri-twitter-line"></i>
              <i class="ri-tumblr-line"></i>
              <i class="ri-pinterest-line"></i>
              <i class="ri-youtube-line"></i>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">랜드마크닷컴</h6>
                  <p>
                    모바일 부동산 시장에서 임차인과 임대인, 중개인 등 부동산
                    거래 주체들을 유기적으로 잇는 정확하고 편리하며, 신속한 통합
                    주거 플랫폼을 구축하겠습니다. 주거 플랫폼을 구축하겠습니다.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">상품소개</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      패키지 상품
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      일반 상품
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      단지 상품
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      프리미엄 상품
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">고객지원</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      자주 묻는 질문
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Android
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      IOS
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      PC
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i class="ri-home-smile-line"></i>North Korea, PyeongYang,
                    112-2
                  </p>
                  <p>
                    <i class="ri-mail-star-line"></i>
                    as@northkorea.com
                  </p>
                  <p>
                    <i class="ri-phone-line"></i> + 01 234 567 88
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="www.naver.com">
              www.LandMark.com
            </a>
          </div>
        </MDBFooter>
      </FooterStyle>
    </>
  );
}
