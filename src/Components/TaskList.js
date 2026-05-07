function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            onClick={() => toggleTask(task.id)}
            className={task.completed ? "completed" : ""}
          >
            {task.text}
          </span>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;