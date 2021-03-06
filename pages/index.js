import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Mint from "../Component/home/Mint";
import About from "../Component/home/About";
import NavBar from "../Component/Header/NavBar";
import Footer from "../Component/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>Sree-NFTs Application</title>
        <meta name="description" content="Sree-nft buy sell application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar>
          {/* body section */}
          <div>
            <Carousel infiniteLoop>
              <div>
                <Image
                  src="/mint.jpg"
                  alt="carousel one"
                  // layout="responsive"
                  width="2000px"
                  height="700px"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/mint1.jpg"
                  alt="carousel one"
                  // layout="responsive"
                  width="2000px"
                  height="700px"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/mint2.jpg"
                  alt="carousel one"
                  // layout="responsive"
                  width="2000px"
                  height="700px"
                  objectFit="cover"
                />
              </div>
              <div>
                <Image
                  src="/mint3.jpg"
                  alt="carousel one"
                  // layout="responsive"
                  width="2000px"
                  height="700px"
                  objectFit="cover"
                />
              </div>
            </Carousel>
          </div>

          {/* mint button here */}
          <div>
            <Mint />
          </div>

          {/* about nft here */}
          <div>
            <About />
          </div>
        </NavBar>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
