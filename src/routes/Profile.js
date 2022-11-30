import {
  Favorite,
  SpatialTracking,
  SpatialTrackingSharp,
} from "@mui/icons-material";

import { Router, Route, Routes, Outlet } from "react-router-dom";

import { Divider } from "@mui/material";

// routes & components

import ProfileLeft from "../components/Profile";

// bootstrap
import { Nav } from "react-bootstrap";

// icons
// import ProfileLogo from "../assets/profile.png";

import HomeIcon from "@mui/icons-material/Home";
import AddCardIcon from "@mui/icons-material/AddCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import { ProfileStyle } from "../styles/ProfileStyle";
import { useState } from "react";
import ProfileHome from "./ProfileHome";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1000,
  once: true,
});

export default function Profile() {
  return (
    <>
      <div class="item" data-aos="fade-right">
        <ProfileStyle>
          <ProfileLeft />
          <Outlet />
        </ProfileStyle>
      </div>
    </>
    // nested Routes
  );
}
