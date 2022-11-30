// react 
import React from "react";
// components & routes
import { ListCardStyle } from "../styles/ListCardStyle";

export default function ListCard({ info }) {
 return (
    <ListCardStyle>
      <div className="listWrap">
        {/* THUMBNAIL */}
        <img className="thumbnail" src={info.thumbnail} alt="thumbnail" />
        {/* PRODUCT TITLE */}
        <h3>{info.title}</h3>
        <h4>
          {
            `${info.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`
          }
        </h4>
      </div>
    </ListCardStyle>
  )
}
