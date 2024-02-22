import PropTypes from "prop-types";
import Task from "./Task";

function TaskList({ tasks, toggleTaskDone }) {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task key={task.id} task={task} toggleTaskDone={toggleTaskDone} />
        );
      })}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  toggleTaskDone: PropTypes.func,
};

export default TaskList;
