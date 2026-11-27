import { useState } from "react";

export default function Todo() {
  const [val, setVal] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const newTask = {
      id: crypto.randomUUID(),
      name: val,
      done: false
    };
    setTasks([...tasks, newTask]);
    setVal("");
  }

  function toggleTask(id) {
    setTasks(tasks.map(task => {
      return task.id === id ? { ...task, done: !task.done } : task
    }));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));

  }

  function clearCompletedTasks() {
    setTasks(tasks.filter(task => !task.done ));
  }

  return (
    <div>
      <p>My Tasks</p>
      <input
        value={val}
        placeholder="Enter a new Task..."
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={addTask}
        disabled={val.length == 0}
      >+ Add</button>

      <p>Total: {tasks.length}</p>
      <p>Completed: {tasks.filter(task => task.done).length}</p>
      <p>Pending: {tasks.filter(task => !task.done).length}</p>

      {/* display tasks */}
      {tasks.map(task => (
        <div>
          <input type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.name}</span>
          <span> --- {task.done ? "Completed" : "Pending"} </span>
          <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </div>
      ))}

      <p></p>
      <button onClick={clearCompletedTasks}>Clear completed tasks</button>
    </div>
  );
}
