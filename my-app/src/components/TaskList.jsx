import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskList = ({ tasks, removeTask }) => {
  return tasks.map((task, index) => (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-item"
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </div>
      )}
    </Draggable>
  ));
};

export default TaskList;
