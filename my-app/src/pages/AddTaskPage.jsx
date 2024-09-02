import React from "react";
import TaskForm from "../components/TaskForm";

const AddTaskPage = ({ addTask }) => {
  return (
    <div>
      <h1>Add New Task</h1>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default AddTaskPage;
