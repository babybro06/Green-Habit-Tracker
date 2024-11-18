import React, { useState } from 'react';
import './HabitTracker.css';

function HabitTracker({ day }) {
  const [habitName, setHabitName] = useState('');
  const [habits, setHabits] = useState([
    { name: 'Turn off lights', completed: false },
    { name: 'Recycling', completed: false },
    { name: 'No food wasted', completed: false },
    { name: 'Cold shower', completed: false },
    { name: 'Plastic-free', completed: false },
    { name: 'Sustainable transportation', completed: false },
  ]); // Default habits with completion status

  // Handle the addition of a new habit
  const handleAddHabit = () => {
    if (habitName.trim() !== '') {
      setHabits([...habits, { name: habitName, completed: false }]); // Add new habit with completed as false
      setHabitName(''); // Clear input field
    }
  };

  // Handle the deletion of a habit
  const handleDeleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index); // Remove habit at the specified index
    setHabits(updatedHabits);
  };

  // Toggle completion status of a habit
  const toggleHabitCompletion = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    ); // Toggle the completed status
    setHabits(updatedHabits);
  };

  return (
    <div className="habit-tracker">
      {/* Form to add new habit */}
      <div className="add-habit-form">
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Enter a new habit"
        />
        <button onClick={handleAddHabit}>Add Habit</button>
      </div>

      {/* Display habits list */}
      <div className="habit-list">
        {habits.length === 0 ? (
          <p>No habits added yet.</p>
        ) : (
          habits.map((habit, index) => (
            <div key={index} className="habit-item">
              <span
                onClick={() => toggleHabitCompletion(index)} // Toggle completion on click
                style={{
                  textDecoration: habit.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {habit.name}
              </span>
              <button onClick={() => handleDeleteHabit(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HabitTracker;
