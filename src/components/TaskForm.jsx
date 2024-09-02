import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate(); // Оновлення імпорту

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, status: "Not Started" });
    navigate("/"); // Оновлення використання
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
