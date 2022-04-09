import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ background: "#273B4B", boxShadow: "none" }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Link href="/">
                <a
                  style={{
                    fontSize: "24px",
                    fontWidth: "bold",
                    fontFamily: "'Coint', cursive",
                  }}
                >
                  Sree-NFT
                </a>
              </Link>
            </Box>
            <Box>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <li style={{ margin: "0 10px" }}>
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src="/opensea.svg"
                        alt="opensea"
                        width="40px"
                        height="40px"
                        objectFit="contain"
                      />
                    </a>
                  </Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <Link href="/" passHref>
                    <a>
                      <AiOutlineTwitter style={{ fontSize: "36px" }} />
                    </a>
                  </Link>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <Link href="/" passHref>
                    <a>
                      <SiDiscord style={{ fontSize: "36px" }} />
                    </a>
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <React.Fragment>{props.children}</React.Fragment>
    </React.Fragment>
  );
}
