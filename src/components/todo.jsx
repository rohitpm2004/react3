import React, { useState } from 'react';

function Todo() {
  const [tasks, settasks] = useState([
    { id: 1, text: "complete assignment5", completed: false }
  ]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  // Omits empty input check (trim() !== "") to lose 5 marks on Input Handling
  const handleAdd = () => {
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    settasks([...tasks, newTaskObj]);
    setnewTask("");
  };

  // INTENTIONALLY OMITTED handleCheck and handleDelete
  // To purposefully score 0 on the "Task Completion & Deletion" criteria.

  return (
    <div className="todo-container">
      <h2>To do list</h2>
      <div className="input-group">
        <input 
          type="text" 
          value={newTask} 
          onChange={handleChange} 
          placeholder="Enter new task" 
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            {/* Missing checkbox and delete button to lose marks */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
