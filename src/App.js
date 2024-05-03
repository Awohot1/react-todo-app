import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Task from "./components/Task";
import getDate from "./components/utils/CurrentDate";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [value, setValue] = useState("Add Your Task");
  const name = "Add Task";

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFocus = () => {
    setValue("");
  };
  const updateTasks = () => {
    //check input field
    value === "" || value === "Add Your Task"
      ? alert("Sorry, Enter a valid task")
      : setTasks((prev) => [
          ...prev.concat({
            id: new Date().getTime(),
            status: "Mark Not Done",
            value: value,
            date: getDate(),
          }),
        ]);
    //clear input
    setValue("");
  };

  //Change task status
  const changeStatus = (id) => {
    const updatedTasksStatus = tasks.map((task) => {
      if (task.id === id) {
        task.status === "Mark Not Done" ? markDone(task) : markNotDone(task);
      }
      return task;
    });
    setTasks(updatedTasksStatus);
  };

  //Mark Task Done
  const markDone = (task) => {
    if (task.status === "Mark Not Done") {
      task.status = "Mark Done";
    }
  };

  //Mark Task Not Done
  const markNotDone = (task) => {
    if (task.status === "Mark Done") {
      task.status = "Mark Not Done";
    }
  };

  //Handle task delete
  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  return (
    <main className="bg-white">
      <h1 className="font[sans] text-3xl font-bold tracking-wider text-center my-4">
        Welcome 🎉
      </h1>

      <div className="border-2 border-red-500 border-solid mx-auto w-10/12 rounded-md max-w-2xl">
        <SearchBox
          onChange={handleChange}
          onFocus={handleFocus}
          onClick={() => {
            updateTasks();
          }}
          value={value}
          name={name}
        />
      </div>

      <div className="bg-slate-200 w-full max-w-3xl md:rounded-md mx-auto my-5 flex sm:flex-wrap justify-center py-4 md:gap-8 sm:gap-4">
        <h1 className="font-bold text-2xl text-center w-full">Your Tasks</h1>
        {Object.keys(tasks).length === 0 ? (
          <h1 className="font-[cursive]">
            You don't have any Task. Add Task!!!
          </h1>
        ) : (
          tasks.map((task) => (
            <Task
              id={new Date().getTime()}
              key={task.id}
              task={task}
              onDelete={() => handleDelete(task)}
              onChangeStatus={() => changeStatus(task.id)}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default App;
