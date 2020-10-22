import React from "react";
import "./EachTask.css";
function EachTaks({ task, deleteTask }) {
  return (
    <div className='each-task'>
      <input type='checkbox' id='checkbox' onClick={deleteTask} />{" "}
      <label>{task}</label>
    </div>
  );
}

export default EachTaks;
