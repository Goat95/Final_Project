// react
import React, { useEffect, useState } from "react";
// react router dom
import { useNavigate } from "react-router-dom";
// image
import addPhoto from "../assets/add_photo.svg";
// style
import { AddProductStyle } from "../styles/AdminStyle";

export default function AddProduct() {
  // navigate
  const navigate = useNavigate();
  // product title
  const [productTitle, setProductTitle] = useState("");
  // product price
  const [productPrice, setProductPrice] = useState(0);
  // product description
  const [description, setDescription] = useState("");
  // hashtag
  const [hashtagValue, setHashtagValue] = useState("");
  const [hashtagArr, setHashtagArr] = useState([]);
  // uploading image
  const [imageURL, setImageURL] = useState("");
  // button state
  const [btnState, setBtnState] = useState(true);

  // hashtag onkeyup
  const onKeyUp = (e) => {
    e.preventDefault();
    // ADD HASHTAG ARRAY
    if (e.key === "Enter" && hashtagValue.trim() !== "") {
      // IF OVERLAP HASHTAG VALUE
      if (hashtagArr) {
        setHashtagArr(hashtagArr.filter((hashtag) => hashtag !== hashtagValue));
      }
      // ADD HASHTAG ARRAY
      setHashtagArr((currentHashtag) => [...currentHashtag, hashtagValue]);
      // REMOVE HASHTAG VALUE
      setHashtagValue("");
    } else if (e.key === "," && hashtagValue.trim() !== "") {
      // IF OVERLAP HASHTAG VALUE
      if (hashtagArr && hashtagValue !== "") {
        setHashtagArr(hashtagArr.filter((hashtag) => hashtag !== hashtagValue));
      }
      // ADD HASHTAG ARRAY WITHOUT COMMA
      setHashtagArr((currentHashtag) => [
        ...currentHashtag,
        hashtagValue.slice(0, -1),
      ]);
      // REMOVE HASHTAG VALUE
      setHashtagValue("");
    }
  };

  // delete hashtag
  const onDeleteHashtag = (e) => {
    e.preventDefault();
    setHashtagArr(hashtagArr.filter((hashtag) => hashtag !== e.target.id));
  };

  // uploading image file
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    // using FileReader API
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImageURL(result);
    };
    reader.readAsDataURL(theFile);
  };

  // add product api
  const axios = require("axios"); // node.js쓸때 모듈 불러오기
  const data = JSON.stringify({
    title: productTitle,
    price: +productPrice,
    description: description,
    tags: hashtagArr,
    thumbnailBase64: imageURL,
  });
  const config = {
    method: "post", //통신 방식
    url: "/api/products", //서버
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

  const onAddProduct = (e) => {
    e.preventDefault();
    axios(config)
      .then(function (res) {
        alert("등록이 완료되었습니다.");
        navigate("/profile/admin/list");
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error) => {
        alert(error);
        // 오류발생시 실행
      });
  };

  useEffect(() => {
    if (productTitle && productPrice && description && hashtagArr && imageURL) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
  }, [productTitle, productPrice, description, hashtagArr, imageURL]);

  return (
    <AddProductStyle btnState={btnState}>
      <div className="addProduct">
        {/* PRODUCT TITLE */}
        <div>
          <label className="preview" htmlFor="file-input">
            {imageURL ? (
              <img src={imageURL} alt="thumbnail" />
            ) : (
              <div className="basicThumbnail">
                <div className="uploadThumbnail">
                  <img src={addPhoto} alt="basicThumbnail" />
                  <span>썸네일 업로드</span>
                </div>
              </div>
            )}
          </label>
          <input
            className="uploadImg"
            id="file-input"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
        </div>
        <div>
          <input
            className="productTitle"
            type="text"
            placeholder="상품명을 입력하세요."
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />

          <hr />
          {/* HASHTAG */}
          <div className="hashtagWrap">
            {hashtagArr &&
              hashtagArr.map((arr, idx) => (
                <button
                  key={idx}
                  id={arr}
                  className="hashtag"
                  onClick={onDeleteHashtag}
                >
                  {arr}
                </button>
              ))}
            <input
              className="productTag"
              type="text"
              value={hashtagValue}
              onChange={(e) => setHashtagValue(e.target.value)}
              onKeyUp={onKeyUp}
              placeholder="등록할 태그를 입력하세요."
            />
            <hr />
          </div>

          {/* UPLOAD FILES */}
          {/* <label className="preview" htmlFor="file-input">
          {imageURL ? (
            <img src={imageURL} alt="thumbnail" />
          ) : (
            <div className="basicThumbnail">
              <div className="uploadThumbnail">
                <img src={addPhoto} alt="basicThumbnail" />
                <span>썸네일 업로드</span>
              </div>
            </div>
          )}
        </label> */}
          <input
            className="uploadImg"
            id="file-input"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />

          {/* PRODUCT PRICE */}
          <span>상품 가격 : </span>
          <input
            className="productPrice"
            type="number"
            placeholder="상품가격을 입력하세요."
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <span>원</span>
          <hr />

          {/* PRODUCT DESCRIPTION */}
          <textarea
            className="productDescription"
            type="text"
            placeholder="판매할 상품에 대한 설명을 입력해주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <hr />

          <button className="addBtn" onClick={onAddProduct} disabled={btnState}>
            등록
          </button>
        </div>
      </div>
    </AddProductStyle>
  );
}
