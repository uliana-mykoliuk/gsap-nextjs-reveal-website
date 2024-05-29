import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import NavBar from "@/components/navbar";
import Home from "@/components/home";

const IndexPage = () => {
  const titleRef = useRef(null);
  const verticalLineRef = useRef(null);
  const grapesLogoRef = useRef(null);
  const homeBtnRef = useRef(null);
  const navLinksRef = useRef([]);
  const imgsNavRef = useRef([]);

  useEffect(() => {
    const TLFADE = gsap.timeline();

    TLFADE.from(titleRef.current, { autoAlpha: 0, y: -50, delay: 0.2 })
      .to(verticalLineRef.current, { height: 150 }, "-=0.2")
      .from(grapesLogoRef.current, { autoAlpha: 0, y: -50 }, "-=0.2")
      .from(homeBtnRef.current, { autoAlpha: 0, y: -50 }, "-=0.2");

    navLinksRef.current.forEach((link) => {
      TLFADE.from(
        link,
        { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
        "-=0.2"
      );
    });

    imgsNavRef.current.forEach((img) => {
      TLFADE.from(img, { autoAlpha: 0, y: -50 });
    });
  }, []);

  return (
    <>
      <NavBar navLinksRef={navLinksRef} imgsNavRef={imgsNavRef} />
      <Home
        titleRef={titleRef}
        verticalLineRef={verticalLineRef}
        grapesLogoRef={grapesLogoRef}
        homeBtnRef={homeBtnRef}
      />
    </>
  );
};

export default IndexPage;
