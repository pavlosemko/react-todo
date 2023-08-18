import { useState } from "react";

const ToDoForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddTask(taskText);
    setTaskText("");
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex items-center w-full mt-2 px-2 h-8"
    >
      <button className=" text-sm font-medium rounded h-8 w-8 border-2 border-gray-300 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-gray-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <input
        value={taskText}
        className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
        type="text"
        placeholder="add a new task"
        required
        onChange={(e) => setTaskText(e.target.value)}
      />
    </form>
  );
};
export default ToDoForm;
