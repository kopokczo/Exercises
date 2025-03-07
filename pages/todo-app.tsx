import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [inputEdit, setInputEdit] = useState("");
  const [editIndex, setEditIndex] = useState<number>();
    
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (indexBtn: number) => {
    setTasks([...tasks, inputEdit]);
    setInputEdit("");
  };



  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <button onClick={addTask}>Add Task</button>
      <input
        type="text"
        placeholder="edit task..."
        value={inputEdit}
        onChange={(e) => setInputEdit(e.target.value)}
      />
      <ul>
        {tasks.map((task, index, indexBtn) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Delete</button>
            <button key={indexBtn} onClick={() => editTask(indexBtn)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;