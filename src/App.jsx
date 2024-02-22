import { useState } from "react";

import "./App.css";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const initialTasks = [
  {
    id: 1,
    title: "Do something",
    done: false,
  },
  {
    id: 2,
    title: "Do something else",
    done: true,
  },
  {
    id: 3,
    title: "Do something more",
    done: false,
  },
];

function App() {
  const [name] = useState("Carlo");
  const [tasks, setTasks] = useState(initialTasks);

  // computed properties from state
  const completedTasks = tasks.filter((task) => task.done);
  const incompleteTasks = tasks.filter((task) => !task.done);

  const createTask = (title) => {
    if (title.length > 0) {
      const newTask = {
        id: tasks.length + 1,
        title,
        done: false,
      };
      const updatedTasksArray = [...tasks, newTask];
      setTasks(updatedTasksArray);
    }
  };

  const toggleTaskDoneStatus = (task) => {
    // flip value of task.done
    const updatedTask = { ...task, done: !task.done };
    // go to tasks array
    // modify the task array
    const updatedTasksArray = tasks.map((t) => {
      if (t.id === task.id) return updatedTask;
      return t;
    });

    setTasks(updatedTasksArray);
  };

  return (
    <>
      <section>
        <h1>Task Manager</h1>
        <p>Hi {name}, welcome to your tasks.</p>
      </section>
      <TaskForm name={name} createTask={createTask} />
      <section>
        <h3>Tasks</h3>
        <TaskList
          tasks={incompleteTasks}
          toggleTaskDone={toggleTaskDoneStatus}
        />
      </section>
      <section>
        <h3>Completed Tasks</h3>
        <TaskList
          tasks={completedTasks}
          toggleTaskDone={toggleTaskDoneStatus}
        />
      </section>
    </>
  );
}

export default App;
