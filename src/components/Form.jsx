import React, { useState, useEffect } from "react";
import List from "./List";
import AddIcon from "@mui/icons-material/Add";
import ContentFoot from "./ContentFoot";

const Form = ({ color, backgroundColor }) => {
  const [collectData, setCollectedData] = useState([
    {
      tasks: "Complete online javaScript course",
      isComplete: false,
    },
    {
      tasks: "jog around the park 3x",
      isComplete: false,
    },
    {
      tasks: "10 minutes meditation",
      isComplete: false,
    },
    {
      tasks: "Read for 1 hour",
      isComplete: false,
    },
    {
      tasks: "pick up groceies",
      isComplete: false,
    },
    {
      tasks: "Complete todo on Frontend Mentor",
      isComplete: false,
    },
  ]);

  const [task, setTask] = useState({});
  const [addTask, setAdTask] = useState(collectData);
  const [count, setCount] = useState(addTask.length);
  const [colorBtn, setColorbtn] = useState({
    active: "",
    showall: "",
    complete: "",
  });

  const [lineThrough, setLineThrough] = useState("");
  useEffect(() => {
    setAdTask(collectData);
    setCount(addTask.length);
  }, [collectData]);
  useEffect(() => setCount(addTask.length), [addTask]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({
      tasks: value,
      isComplete: false,
      isdelete: false,
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    setCollectedData((preValue) => {
      return task.tasks ? [...preValue, task] : [...preValue];
    });

    setCount(addTask.length);
    // setAdTask(collectData);
    setTask({
      tasks: "",
      isComplete: "",
    });
  };
  const showAll = (event) => {
    event.preventDefault();
    setAdTask((preValue) => {
      return collectData.map((data) => data);
    });
    setColorbtn({ active: "", showall: "hsl(220, 98%, 61%)", complete: "" });
  };

  const showActive = (event) => {
    event.preventDefault();
    setAdTask((preValue) => {
      return collectData.filter((pre) => !pre.isComplete);
    });
    setColorbtn({ active: "hsl(220, 98%, 61%)", showall: "", complete: "" });

    // setLineThrough(null);

    // setAdTask((preValue) => {
    //   return preValue.filter((aItems) => {});
    // });
  };
  const showCompleted = (event) => {
    event.preventDefault();
    setAdTask((preValue) => {
      return collectData.filter((pre) => pre.isComplete);
    });
    setLineThrough("line-through");
    setColorbtn({ active: "", showall: "", complete: "hsl(220,98%,61%)" });
  };

  const clear = (event) => {
    setLineThrough(null);
    event.preventDefault();
    setCollectedData((preValue) => {
      return preValue.filter((pre) => !pre.isComplete);
    });
    setLineThrough(null);
    setColorbtn({ active: "", showall: "hsl(220, 98%, 61%)", complete: "" });

    // setAdTask(collectData);
  };
  const oncomplete = (isComplete, id) => {
    setCollectedData((preValue) =>
      preValue.map((tas, index) => {
        if (index === id) {
          setLineThrough("line-through");
          return { isComplete: isComplete, tasks: tas.tasks };
        } else {
          return tas;
        }
      })
    );
  };
  return (
    <form>
      <div
        style={{ color: color, backgroundColor: backgroundColor }}
        className="item item-input"
      >
        <input
          type="text"
          name="Task"
          placeholder={`     Create a new todo...`}
          onChange={handleChange}
          value={task.tasks}
        />
        <button onClick={handleClick}>
          <AddIcon />
        </button>
      </div>
      <div>
        {addTask.map((task, index) => (
          <List
            list={task.tasks}
            completed={task.isComplete}
            key={index}
            id={index}
            ondelete={oncomplete}
            cut={lineThrough}
            backgroundColor={backgroundColor}
            color={color}
          />
        ))}
      </div>
      <div>
        <ContentFoot
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          clear={clear}
          ondelete={oncomplete}
          count={count}
          id={addTask.map((task, index) => index)}
          styleActive={colorBtn.active}
          styleShowAll={colorBtn.showall}
          styleComplete={colorBtn.complete}
          backgroundColor={backgroundColor}
          color={color}
        />
      </div>
    </form>
  );
};

export default Form;
