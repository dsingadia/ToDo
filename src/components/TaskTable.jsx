import React from "react";

const TaskTable = ({ tasks, onDeleteTask }) => {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="3">No tasks added yet.</td>
          </tr>
        ) : (
          tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.text}</td>
              <td>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  style={{ backgroundColor: "#f44336", color: "white", border: "none", padding: "0.4rem 0.8rem", cursor: "pointer" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;
