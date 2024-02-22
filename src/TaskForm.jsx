import { useState } from "react";
import PropTypes from "prop-types";

function TaskForm({ name, createTask }) {
  // props: name, createTask
  // state for the create form
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleSubmit = () => {
    createTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <section>
      <h3>New Task</h3>
      <p>{name}, what do you want to do next?</p>
      <input
        placeholder="new task"
        type="text"
        value={newTaskTitle}
        onChange={(event) => setNewTaskTitle(event.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
    </section>
  );
}

TaskForm.propTypes = {
  name: PropTypes.string,
  createTask: PropTypes.func,
};

export default TaskForm;
