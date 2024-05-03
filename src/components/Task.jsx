import React from "react";

const Task = ({ task, onDelete, onChangeStatus }) => {
  const statusMsg = task.status;
  let badge;
  statusMsg === "Mark Done"
    ? (badge = "bg-green-400 p-0.5")
    : (badge = "bg-red-400 p-0.5");
  return (
    <div className="bg-white flex justify-between flex-col gap-4 md:w-1/4 sm:w-10/12 p-2 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <button id="status" className={badge} onClick={onChangeStatus}>
          <div className="status-msg text-sm">{statusMsg}</div>
          <div className="loader hide"></div>
        </button>
        <button
          className="text-2xl text-red-500 font-bold hover:scale-150 hover:transition-transform"
          onClick={onDelete}>
          &times;
        </button>
      </div>
      <div className="font-bold text-lg">{task.value}</div>
      <div className="date-added">⏰ {task.date}</div>
    </div>
  );
};

export default Task;
