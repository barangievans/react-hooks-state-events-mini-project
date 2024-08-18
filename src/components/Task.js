import React from 'react';
import PropTypes from 'prop-types';

// Task component to display a single task with text, category, and a delete button
function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

// PropTypes for type-checking
Task.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
