import React, { useState } from "react";
import "../pages/Task.css";

function Task() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Toggle add-task form
  const handleToggle = () => setIsOpen(!isOpen);

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    setTaskList([...taskList, { name: newTask.trim(), completed: false }]);
    setNewTask("");
    setIsOpen(false);
  };

  // Toggle task completion
  const handleToggleComplete = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  // Delete task
  const handleDeleteTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <div className="task-actions">
  <h2>Tasks</h2>
  <button onClick={handleToggle}>
    {isOpen ? "Cancel" : "Add New Task"}
  </button>
</div>


        {isOpen && (
          <form onSubmit={handleAddTask} className="task-form">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task name"
              required
            />
            <button type="submit">Add Task</button>
          </form>
        )}

        <ul className="task-list">
          {taskList.map((task, index) => (
            <li key={index} className={task.completed ? "completed-task" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
              />
              <span>{task.name}</span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
