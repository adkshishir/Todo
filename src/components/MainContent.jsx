import React, { useState, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Form from "./Form";
import img from "../images/bg-desktop-dark.jpg";
import dayImg from "../images/bg-desktop-light.jpg";
import nightMobImg from "../images/bg-mobile-dark.jpg";
import dayMobImg from "../images/bg-mobile-light.jpg";
import Media from "react-media";
const MainContent = () => {
  const [isday, setday] = useState(false);
  const [styles, setStyles] = useState({
    color: "",
    backgroundColor: "",
    itemBackGround: "",
  });
  const toggleDay = () => {
    setday((pre) => !pre);
  };
  useEffect(() => {
    isday
      ? setStyles({
          color: "hsl(235, 19%, 35%)",
          backgroundColor: "hsl(0, 0%, 98%)",
          itemBackGround: "hsl(236, 33%, 92%)",
        })
      : setStyles({
          backgroundColor: " hsl(235, 21%, 11%)",
          color: " hsl(236, 33%, 92%)",
          itemBackGround: "hsl(235, 24%, 19%)",
        });
  }, [isday]);
  return (
    <div
      className="whole-container black-background"
      style={{
        color: styles.color,
        backgroundColor: styles.backgroundColor,
        height: "100vh",
      }}
    >
      <Media
        queries={{
          desktop: "(min-width: 600px)",
          mobile: "(max-width: 500px)",
        }}
      >
        {(matches) =>
          matches.desktop ? (
            <img
              src={isday ? dayImg : img}
              alt="background"
              style={{ width: "100vw", height: "30vh" }}
            />
          ) : (
            <img
              src={isday ? dayMobImg : nightMobImg}
              alt="background"
              style={{ width: "100vw", height: "30vh" }}
            />
          )
        }
      </Media>

      <div className="container">
        <div style={{ color: "white" }} className=" item1">
          <div className="todo-head">TODO</div>
          <div onClick={toggleDay}>
            {!isday ? <LightModeIcon /> : <NightlightIcon />}
          </div>
        </div>
        <Form color={styles.color} backgroundColor={styles.itemBackGround} />
      </div>
    </div>
  );
};

export default MainContent;
