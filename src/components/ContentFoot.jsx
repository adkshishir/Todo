import Button from "./Buttons";
import React from "react";

const ContentFoot = ({
  showAll,
  showActive,
  showCompleted,
  clear,
  count,
  styleActive,
  styleShowAll,
  styleComplete,
  backgroundColor,
  color,
}) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="item item-foot"
    >
      <div style={{ backgroundColor: backgroundColor }} className="item11">
        {count} items left
      </div>
      <div style={{ backgroundColor: backgroundColor }} className="item11">
        <Button
          style={styleShowAll}
          item11="btn"
          onclick={showAll}
          btnName={"All"}
        />
        <Button
          style={styleActive}
          item11="btn"
          onclick={showActive}
          btnName={"Active"}
        />
        <Button
          style={styleComplete}
          item11="btn"
          onclick={showCompleted}
          btnName={"Completed"}
        />
      </div>
      <div style={{ backgroundColor: backgroundColor }} className="item11">
        <Button onclick={clear} btnName={"Clear completed"} />
      </div>
    </div>
  );
};

export default ContentFoot;
