import React from "react";
import Image from "next/image";

import grape from "@/assets/grape.svg";
import videoSrc from "@/assets/grappe-video.mp4";

const Home = ({ titleRef, verticalLineRef, grapesLogoRef, homeBtnRef }) => {
  return (
    <div className="home">
      <div className="overlay" />
      <video autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="home-content">
        <h1 ref={titleRef}>Exceptional vineyards.</h1>
        <div className="middle-line" ref={verticalLineRef} />
        <Image src={grape} alt="" width={50} height={50} ref={grapesLogoRef} />
        <button ref={homeBtnRef}>DISCOVER</button>
      </div>
    </div>
  );
};

export default Home;
