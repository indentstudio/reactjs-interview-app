import { useState } from "react";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  const [isSortingUp, setIsSortingUp] = useState(false);

  const sortingChangeHandler = () => {
    if (!isSortingUp) {
      setIsSortingUp(true);
      props.onSortingTasks(isSortingUp);
    } else if (isSortingUp) {
      setIsSortingUp(false);
      props.onSortingTasks(isSortingUp);
    }
  };

  return (
    <div className={classes.block}>
      <h2>
        <p className={classes.todo}>ToDo </p>List
      </h2>
      <div className={classes.sortingDiv}>
        <p>Sort by:</p>
        <button onClick={sortingChangeHandler}>
          Date{!isSortingUp ? <i className="fa-solid fa-arrow-up"></i> : ""}
          {isSortingUp ? <i className="fa-solid fa-arrow-down"></i> : ""}
        </button>
        {/* <button>
          Date<i class="fa-solid fa-arrow-down"></i>
        </button> */}
      </div>

      <ul>
        {props.tasks.map((task) => (
          <div>{{task}}</div>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
