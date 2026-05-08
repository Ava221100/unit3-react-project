function TaskForm({ input, setInput, addTask }) {
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;