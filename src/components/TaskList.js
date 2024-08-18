import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

// Component to display a list of tasks
function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => {} /* Assuming delete logic is handled elsewhere */}
        />
      ))}
    </div>
  );
}

// PropTypes for type-checking
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
