import React, { useState } from "react";
const List = ({ list, ondelete, id, completed, color, backgroundColor }) => {
  const sad = "line-through";
  const [isComplete, setIsComplete] = useState(true);

  const ondeleted = (event) => {
    event.preventDefault();
    // isComplete ? !isComplete : isComplete;

    isComplete ? ondelete(!isComplete) : ondelete(isComplete);
    setIsComplete((preValue) => !preValue);
    ondelete(isComplete, id);
  };

  return (
    <li
      className="item item-task"
      onClick={ondeleted}
      style={{
        textDecoration: completed && sad,
        color: completed ? "hsl(234, 11%, 52%" : color,
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className="check-box"
        style={{
          backgroundImage:
            completed &&
            " linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        }}
      >
        {completed && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
      </div>

      {list}
    </li>
  );
};

export default List;
