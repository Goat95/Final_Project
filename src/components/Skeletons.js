import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Skeletons() {
  return (
    <Box style={{ marginLeft: "50px", marginTop: "40px" }} sx={{ width: 700 }}>
      <Skeleton heightAuto />
      <Skeleton heightAuto />
      <Skeleton heightAuto />
      <Skeleton heightAuto />
      <Skeleton heightAuto />
      <Skeleton heightAuto />
    </Box>
  );
}
