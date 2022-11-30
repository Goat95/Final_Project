import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// styles
import { ProductBlock, PaymentBlock, Block } from "../styles/PaymentStyle";

// redux
import { useSelector } from "react-redux";

// material
import PaidIcon from "@mui/icons-material/Paid";
import { Button, TextField } from "@mui/material";

export default function Payment() {
  // useSelector
  const getUserInfo = useSelector((state) => state.isLoginReducer);
  // useNavigate
  let navigate = useNavigate();
  // useParams
  const params = useParams();

  const [product, setProduct] = useState("");

  // 계좌 목록을 담을 state
  const [accountList, setAccountList] = useState([]);
  // 선택된 계좌id를 담을 state
  const [selectedAccount, setSelectedAccount] = useState("");
  // 단일 제품 상세 조회 API
  const productApi = {
    method: "get", //통신 방식
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${params.productId}`, //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
    },
    // 서버가 제공한 응답 (데이터)
  };

  // 제품 구매 API
  const data = JSON.stringify({
    productId: params.productId,
    accountId: selectedAccount,
  });
  const paymentApi = {
    method: "post",
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${getUserInfo.accessToken}`,
    },
    data: data,
  };

  // 계좌 목록 및 잔액 조회 API
  const myAccountApi = {
    method: "get",
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      Authorization: `Bearer ${getUserInfo.accessToken}`,
    },
  };

  useEffect(() => {
    axios(myAccountApi).then((res) => {
      setAccountList(res.data.accounts);
    });
  }, []);

  useEffect(() => {
    axios(productApi)
      .then((res) => {
        setProduct(res.data);
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  }, []);

  const handleSelect = (e) => {
    setSelectedAccount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios(paymentApi).then((res) => {
      if (res.data === true) {
        // true일 떄 모달창이 띄운다.
        alert("구매 완료");
        navigate("/orders");
      }
    });
  };
  console.log(selectedAccount)
  return (
    <>
      <form onSubmit={onSubmit}>
        <Block>
          <ProductBlock>
            <div className="productInfo">
              <h2>상품 정보</h2>
              <div className="detailWrap">
                <div className="detailMain">
                  <img src={product.thumbnail} alt="thumbnail" />
                  <div className="description">
                    <h3 className="title">{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
                <div className="purchase">
                  <h4>{Number(product.price).toLocaleString("ko-KR")}원</h4>
                </div>
              </div>
            </div>
          </ProductBlock>
          <PaymentBlock>
            <div className="paymentInfo">
              <h2>결제 정보</h2>
              <select className="select" onChange={handleSelect}>
                <option value="계좌선택">계좌선택</option>
                {accountList.map((account) => (
                  <option value={account.id}>
                    {account.bankName} {account.accountNumber}
                  </option>
                ))}
              </select>
              <TextField
                required={true}
                label="이름"
                variant="outlined"
                name="firstname"
                className="firstname"
              />
              <TextField
                required={true}
                label="성"
                variant="outlined"
                name="lastname"
                className="lastname"
              />
              <TextField
                required={true}
                label="전화번호"
                variant="outlined"
                name="phoneNumber"
                className="phoneNumber"
              />
              <TextField
                fullWidth
                required={true}
                label="주소"
                variant="outlined"
                name="address"
                className="address"
              />
              <Button
                className="paymentBtn"
                size="large"
                variant="outlined"
                type="submit"
                endIcon={<PaidIcon />}
              >
                결제 완료
              </Button>
            </div>
          </PaymentBlock>
        </Block>
      </form>
    </>
  );
}
