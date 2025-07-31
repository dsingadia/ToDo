import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h2>📝 To-Do Application</h2>
      <TaskForm onAddTask={addTask} />
      <TaskTable tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
