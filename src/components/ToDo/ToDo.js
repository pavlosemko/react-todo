import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { useState } from "react";
import { getRandomId } from "@/utils";

const ToDo = () => {
  const data = [
    { text: "Weed front garden.", isComplete: false, id: 1 },
    { text: "Some task", isComplete: true, id: 2 },
  ];
  const [taskList, setTaskList] = useState(data);
  const onUpdateTask = ({ taskId, isComplete }) => {
    setTaskList((oldTaskList) => {
      const updatedTaskList = oldTaskList.map((task) => {
        if (taskId === task.id) {
          task.isComplete = isComplete;
        }
        return task;
      });
      return [...updatedTaskList];
    });
  };

  const onAddTask = (taskText) => {
    setTaskList((oldTaskList) => {
      const newTaskList = oldTaskList.slice();
      const newTask = { text: taskText, isComplete: false, id: getRandomId() };
      return [...newTaskList, newTask];
    });
  };

  return (
    <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
      <ToDoHeader />
      <ToDoList taskList={taskList} onUpdateTask={onUpdateTask} />
      <ToDoForm onAddTask={onAddTask} />
    </div>
  );
};

export default ToDo;
