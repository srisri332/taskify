import React, { useState } from "react";
import "./ListContent.css";
import EachTask from "./EachTaks";
import plus from "../../static/plus (1).png";
import close from "../../static/close.png";
function ListContent({ deleteList }) {
  const [title, setTitle] = useState("");
  const [active, setActive] = useState(false);
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const changeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const submitted = (e) => {
    e.preventDefault();
  };

  const addTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    if (task != "") {
      setAllTasks([...allTasks, task]);
    }

    setActive(false);
    setTask("");
  };

  const blurred = (e) => {
    e.preventDefault();
    if (task != "") {
      setAllTasks([...allTasks, task]);
    }

    setActive(false);
    setTask("");
  };

  const deleteTask = ({ task }) => {
    const newTasks = allTasks.filter((oneTask) => {
      return oneTask != task;
    });

    setAllTasks([...newTasks]);
  };

  return (
    <div className='list-group'>
      <div className='content'>
        <div className='title'>
          <form onSubmit={submitted}>
            <input
              type='text'
              onChange={changeTitle}
              value={title}
              className='title-input'
              placeholder='Set Title'
            />
          </form>
          <img src={close} className='close-button' onClick={deleteList} />
        </div>
        <div className='tasks'>
          {active ? (
            <form onSubmit={addNewTask}>
              <input
                type='text'
                onChange={addTask}
                className='task-input'
                placeholder='Click again to add'
                onBlur={blurred}
              />
            </form>
          ) : (
            <div
              className='add-task'
              onClick={() => {
                setActive(true);
              }}>
              <span className='plus'>
                <img src={plus} />
              </span>{" "}
              Add a task
            </div>
          )}

          {allTasks.map((task) => (
            <EachTask
              task={task}
              key={task}
              deleteTask={() => {
                deleteTask({ task });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListContent;
