import ToDoItem from "../ToDoItem";

const ToDoList = ({ taskList, onUpdateTask }) => {
  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id}>
          <ToDoItem task={task} onUpdateTask={onUpdateTask} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
