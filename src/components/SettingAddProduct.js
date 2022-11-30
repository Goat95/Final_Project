// react
import React, { useState } from "react";
// style
import { SettingAddProductStyle } from "../styles/AdminStyle";

export default function AddProduct({ setSettingModal, productValue }) {
  // product title
  const [productTitle, setProductTitle] = useState(productValue.title);
  // product price
  const [productPrice, setProductPrice] = useState(productValue.price);
  // product description
  const [description, setDescription] = useState(productValue.description);
  // hashtag
  const [hashtagValue, setHashtagValue] = useState("");
  const [hashtagArr, setHashtagArr] = useState(productValue.tags);
  // uploading image
  const [imageURL, setImageURL] = useState(productValue.thumbnail);

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
    title: productTitle !== productValue.title && productTitle,
    price: productPrice !== productValue.price && productPrice,
    description: description !== productValue.description && description,
    tags: hashtagArr !== productValue.tags && hashtagArr,
    thumbnailBase64: imageURL !== productValue.thumbnail && imageURL,
  });
  const config = {
    method: "put", //통신 방식
     url: `/api/products/${productValue.id}`, //서버
 
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
      .then((res) => {
        alert("수정이 완료되었습니다.");
        setSettingModal(false);
        window.location.reload();
      }) // Response Action : response (응답) 데이터, 함수인자로 받아 객체에 담겨진 데이터가 응답 데이터
      .catch((error, msg) => {
        alert(error);
        // 오류발생시 실행
      });
  };

  return (
    <SettingAddProductStyle>
      <div className="addProduct">
        {/* PRODUCT TITLE */}
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
            placeholder="태그를 입력하세요."
          />
          <hr />
        </div>

        {/* UPLOAD FILES */}
        <label className="preview" htmlFor="file-input">
          <img src={imageURL} alt="thumbnail" />
        </label>
        <input
          className="uploadImg"
          id="file-input"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />

        {/* PRODUCT PRICE */}
        <span>상품가격 : </span>
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
        <button className="settingBtn" onClick={onAddProduct}>
          수정
        </button>
      </div>
    </SettingAddProductStyle>
  );
}
