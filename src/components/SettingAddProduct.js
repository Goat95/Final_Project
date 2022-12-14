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
  const axios = require("axios"); // node.js?????? ?????? ????????????
  const data = JSON.stringify({
    title: productTitle !== productValue.title && productTitle,
    price: productPrice !== productValue.price && productPrice,
    description: description !== productValue.description && description,
    tags: hashtagArr !== productValue.tags && hashtagArr,
    thumbnailBase64: imageURL !== productValue.thumbnail && imageURL,
  });
  const config = {
    method: "put", //?????? ??????
     url: `/api/products/${productValue.id}`, //??????
 
    headers: {
      // ?????? ?????? ??????
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "TeamTest",
      masterKey: true,
    },
    data: data,
    // ????????? ????????? ?????? (?????????)
  };

  const onAddProduct = (e) => {
    e.preventDefault();
    axios(config)
      .then((res) => {
        alert("????????? ?????????????????????.");
        setSettingModal(false);
        window.location.reload();
      }) // Response Action : response (??????) ?????????, ??????????????? ?????? ????????? ????????? ???????????? ?????? ?????????
      .catch((error, msg) => {
        alert(error);
        // ??????????????? ??????
      });
  };

  return (
    <SettingAddProductStyle>
      <div className="addProduct">
        {/* PRODUCT TITLE */}
        <input
          className="productTitle"
          type="text"
          placeholder="???????????? ???????????????."
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
            placeholder="????????? ???????????????."
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
        <span>???????????? : </span>
        <input
          className="productPrice"
          type="number"
          placeholder="??????????????? ???????????????."
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <span>???</span>
        <hr />

        {/* PRODUCT DESCRIPTION */}
        <textarea
          className="productDescription"
          type="text"
          placeholder="????????? ????????? ?????? ????????? ??????????????????."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <hr />
        <button className="settingBtn" onClick={onAddProduct}>
          ??????
        </button>
      </div>
    </SettingAddProductStyle>
  );
}
