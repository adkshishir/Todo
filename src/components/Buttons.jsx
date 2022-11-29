import React from "react";

const Buttons = ({ onclick, btnName, item11, style }) => {
  return (
    <button style={{ color: style }} className={item11} onClick={onclick}>
      {btnName}
    </button>
  );
};

export default Buttons;
