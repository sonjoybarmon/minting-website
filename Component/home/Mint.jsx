import React from "react";
import styles from "./Home.module.scss";
import Button from "@mui/material/Button";
import Link from "next/link";

const Mint = () => {
  return (
    <div className={styles.mintButton_wrapper}>
      <Link href="/mint" passHref>
        <a>
          <Button variant="outlined" color="primary">
            Go to Minting Page!
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default Mint;
