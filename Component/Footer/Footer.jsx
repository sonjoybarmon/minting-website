import React from "react";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div
      style={{
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="caption" color="primary">
        &copy; 2022 Sree-NFT, All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
