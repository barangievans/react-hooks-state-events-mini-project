import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Component for adding a new task
function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0] || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onTaskFormSubmit({ text, category });
      setText('');
      setCategory(categories[0] || '');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task-details">Details</label>
        <input
          id="task-details"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="task-category">Category</label>
        <select
          id="task-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add task</button>
    </form>
  );
}

// PropTypes for type-checking
NewTaskForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;
