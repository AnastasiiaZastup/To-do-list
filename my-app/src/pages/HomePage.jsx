import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import TaskColumn from "../components/TaskColumn";
import TaskList from "../components/TaskList";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTasks = Array.from(tasks);
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    reorderedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, reorderedTask);
    setTasks(updatedTasks);
  };

  const getTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <div>
      <Link to="/add-task">Add Task</Link>
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskColumn
          status="Not Started"
          tasks={
            <TaskList
              tasks={getTasksByStatus("Not Started")}
              removeTask={removeTask}
            />
          }
        />
        <TaskColumn
          status="In Progress"
          tasks={
            <TaskList
              tasks={getTasksByStatus("In Progress")}
              removeTask={removeTask}
            />
          }
        />
        <TaskColumn
          status="Done"
          tasks={
            <TaskList
              tasks={getTasksByStatus("Done")}
              removeTask={removeTask}
            />
          }
        />
      </DragDropContext>
    </div>
  );
};

export default HomePage;
