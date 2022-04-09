import Head from "next/head";
import React from "react";
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/Header/NavBar";
import Mint from "../Component/Mint/Mint";

const mint = () => {
  return (
    <div>
      <Head>
        <title>Sree-NFTs - minting page</title>
        <meta name="description" content="Sree-nft buy sell application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar>
          <Mint />
        </NavBar>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default mint;
