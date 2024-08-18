import React, { useState } from 'react';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import CategoryFilter from './CategoryFilter';
import { CATEGORIES, TASKS as initialTasks } from '../data';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredCategory, setFilteredCategory] = useState('All');

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
  };

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredTasks = filteredCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === filteredCategory);

  return (
    <div>
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
