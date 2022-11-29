import React from "react";
import BgImg from "./bgImg";
import desktopimg from "../images/bg-desktop-dark.jpg";

const BackGround = () => {
  return (
    <div className="background">
      <BgImg images={desktopimg} />
      <div className="black-background"></div>
    </div>
  );
};

export default BackGround;
