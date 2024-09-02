import React from "react";
import { Droppable } from "react-beautiful-dnd";

const TaskColumn = ({ status, tasks, children }) => {
  return (
    <div className="task-column">
      <h2>{status}</h2>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {tasks}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {children}
    </div>
  );
};

export default TaskColumn;
