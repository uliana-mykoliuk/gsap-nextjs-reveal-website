import Image from "next/image";
import Link from "next/link";
import React from "react";

import BarrelIcon from "@/assets/barrel.svg";
import LeafIcon from "@/assets/leaf.svg";

const NavBar = ({ navLinksRef, imgsNavRef }) => {
  return (
    <nav>
      <Image
        ref={(ref) => (imgsNavRef.current[0] = ref)}
        src={BarrelIcon}
        alt="logo chateau"
        className="logo barrel"
      />
      <div className="container-nav">
        <Link ref={(ref) => (navLinksRef.current[0] = ref)} href="#">
          HOME
        </Link>
        <Link ref={(ref) => (navLinksRef.current[1] = ref)} href="#">
          WINES
        </Link>
        <Link ref={(ref) => (navLinksRef.current[2] = ref)} href="#">
          CONTACT
        </Link>
      </div>
      <Image
        ref={(ref) => (imgsNavRef.current[1] = ref)}
        src={LeafIcon}
        alt="logo feuille"
      />
    </nav>
  );
};

export default NavBar;
