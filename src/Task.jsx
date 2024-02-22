import PropTypes from "prop-types";

// function Task(props) {
//   console.log("props", props);
//   const { isDone, title } = props;

//   return (
//     <li className="task-li">
//       <input type="checkbox" checked={isDone} />
//       <span className="completed">{title}</span>
//     </li>
//   );
// }

// Task.propTypes = {
//   isDone: PropTypes.bool,
//   title: PropTypes.string,
// };

function Task({ task, toggleTaskDone }) {
  // const { task } = props;

  const handleCheckboxChange = () => {
    // console.log("changing task checkbox:", task);
    toggleTaskDone(task);
  };

  return (
    <li className="task-li">
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleCheckboxChange}
      />
      <span className={task.done ? "completed" : ""}>{task.title}</span>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  toggleTaskDone: PropTypes.func,
};

export default Task;
