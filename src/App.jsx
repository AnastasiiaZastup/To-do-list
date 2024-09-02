import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTaskPage from "./pages/AddTaskPage";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage tasks={tasks} setTasks={setTasks} addTask={addTask} />
          }
        />
        <Route path="/add-task" element={<AddTaskPage addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;
