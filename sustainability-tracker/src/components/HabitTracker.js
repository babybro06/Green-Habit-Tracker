import React, { useState } from 'react';
import './HabitTracker.css';

function HabitTracker({ day }) {
  const [habitName, setHabitName] = useState('');
  const [habits, setHabits] = useState([
    'Turn off lights',
    'Recycling',
    'No food wasted',
    'Cold shower',
    'Plastic-free',
    'Sustainable transportation',
  ]); // Default habits

  // Handle the addition of a new habit
  const handleAddHabit = () => {
    if (habitName.trim() !== '') {
      setHabits([...habits, habitName]); // Add habit to state
      setHabitName(''); // Clear input field
    }
  };

  // Handle the deletion of a habit
  const handleDeleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index); // Remove habit at the specified index
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
              <span>{habit}</span>
              <button onClick={() => handleDeleteHabit(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HabitTracker;
