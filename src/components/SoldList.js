// react
import React, { useState, useEffect } from "react";
// hook
import UseDidMountEffect from "../components/UseDidMountEffect";
// mui
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
// style
import { SoldListStyle } from "../styles/AdminStyle";

export default function SoldList() {
  // sold list
  const [soldList, setSoldList] = useState([]);
  // loading state
  const [loading, setLoading] = useState(true);
  // product id
  const [detailId, setDetailId] = useState("");
  // isCanceled state
  const [isCanceled, setIsCanceled] = useState(null);
  // done state
  const [done, setDone] = useState(null);
  // pagenation number
  const [pageNum, setPageNum] = useState(0);
  // get sold list api
  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const getList = {
    method: "get", //통신 방식
    url: "/api/products/transactions/all", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      masterKey: true,
    },
    // 서버가 제공한 응답 (데이터)
  };
  // get sold list
  useEffect(() => {
    setLoading(true);
    axios(getList)
      .then((res) => {
        console.log(
          res.data.sort((a, b) => b.timePaid.localeCompare(a.timePaid))
        );
        setSoldList(
          res.data.sort((a, b) => b.timePaid.localeCompare(a.timePaid))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNum]);

  // product sold state api
  // const data = JSON.stringify({
  //   isCanceled,
  //   done,
  // });

  // const modifyOrder = (data) => {
  //   console.log(detailId);
  //   return {
  //   method: "PUT", //통신 방식
  //   url: "/api/products/transactions/"+detailId, //서버
  //   headers: {
  //     // 요청 헤더 설정
  //     "Content-Type": "application/json",
  //     // crossorigin:true,
  //     apikey: process.env.REACT_APP_API_KEY,
  //     username: "TeamTest",
  //     masterKey: true
  //   },
  //   data: data,
  //   // baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net',
  //   // 서버가 제공한 응답 (데이터)
  // }};

  const onCancel = (e) => {
    setDetailId(e.detailId);
    setIsCanceled(!e.isCanceled);
    setDone(e.done);
  };

  // UseDidMountEffect(() => {
  //   console.log(`detailId: ${detailId}`);
  //   console.log(`isCanceled: ${isCanceled}`);
  //   console.log(`done: ${done}`);
  //   let data = {isCanceled:true,done:done}
  //   console.log(`data: ${typeof data?.isCanceled}`);
  //   const body = modifyOrder(data)
  //   console.log(body)
  //   axios(body)
  //     .then(res => {
  //     console.log(res.data);
  //     })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }, [detailId]);

  const onChagePage = (e, idx) => {
    window.scrollTo(0, 0);
    setPageNum(idx - 1);
  };

  return (
    <SoldListStyle>
      {loading ? (
        <div className="bg">
          <CircularProgress className="circular" />
        </div>
      ) : (
        <div className="soldList">
          {soldList.slice(pageNum * 5, (pageNum + 1) * 5).map((list, idx) => (
            <div key={idx} className="listWrap">
              <h2 className="orderState">
                {list.done
                  ? "판매 완료"
                  : list.isCanceled
                  ? "구매 취소"
                  : "구매 완료"}
              </h2>
              <div className="soldInfo">
                <img
                  className="thumbnail"
                  src={list.product.thumbnail}
                  alt="thumbnail"
                />
                <div className="orderInfo">
                  <h3 className="title">{list.product.title}</h3>
                  <span className="userName">{list.user.displayName}</span>
                  <span className="userEmail">({list.user.email})</span>
                  <p className="timePaid">{list.timePaid.slice(0, 10)}</p>
                  <p className="address">
                    {" "}
                    서울특별시 강남구 강남대로 364 미왕빌딩 11층
                  </p>
                  <h4 className="price">
                    {list.product.price
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </h4>
                </div>
              </div>
              <div className="btns">
                <button
                  onClick={() => onCancel(list)}
                  className={list.done ? "cancel off" : "cancel"}
                  disabled={list.done ? true : false}
                >
                  {list.isCanceled ? "취소 해제" : "구매 취소"}
                </button>
                <button
                  className={list.done || list.isCanceled ? "done off" : "done"}
                  disabled={list.done || list.isCanceled ? true : false}
                >
                  판매 완료
                </button>
              </div>
            </div>
          ))}
          <Pagination
            className="pagination"
            count={Math.ceil(soldList.length / 5)}
            onChange={onChagePage}
            page={pageNum + 1}
          />
        </div>
      )}
    </SoldListStyle>
  );
}
