// react
import React from "react";
import { useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// style
import { AdminLinkBtnStyle } from "../styles/AdminStyle";

export default function AdminLinkBtn() {
  const [tap, setTap] = useState(0);
  // 탭UI

  return (
    <AdminLinkBtnStyle>
      <div className="linkBtnWrap">
        <Link
          onClick={() => {
            setTap(0);
          }}
          className={`${tap === 0 ? "active" : "listBtn"}`}
          to="/profile/admin/list"
        >
          제품목록
        </Link>
        <Link
          onClick={() => {
            setTap(1);
          }}
          className={`${tap === 1 ? "active" : "listBtn"}`}
          to="/profile/admin/add"
        >
          제품추가
        </Link>
        <Link
          onClick={() => {
            setTap(2);
          }}
          className={`${tap === 2 ? "active" : "listBtn"}`}
          to="/profile/admin/sold"
        >
          판매내역
        </Link>
      </div>
    </AdminLinkBtnStyle>
  );
}
