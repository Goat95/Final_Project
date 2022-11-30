// react
import React from "react";
// react router dom
import { Outlet } from "react-router-dom";
// conponents & routes
import AdminLinkBtn from "../components/AdminLinkBtn";
import AddCardIcon from "@mui/icons-material/AddCard";
import { AdminContainerStyle } from "../styles/AdminStyle";

export default function Admin() {
  return (
    <div style={{ width: "100%", background: "white", color: "black" }}>
      <div
        style={{ padding: "10px 20px", fontSize: "15px", fontWeight: "600" }}
        className="recent-products-title"
      >
        <AddCardIcon
          style={{ marginRight: "10px", color: "1876d2", fontSize: "25px" }}
          className="addCardIcon"
        />
        <span>관리자 페이지</span>
      </div>
      <AdminLinkBtn />
      <Outlet />
    </div>
  );
}
