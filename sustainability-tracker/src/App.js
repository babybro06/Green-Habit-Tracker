import React, { useState } from 'react';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { name: newHabit, completed: false }]);
      setNewHabit('');
    }
  };

  const toggleHabit = (index) => {
    setHabits(habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  return (
    <div className="App">
      <h1>Sustainability Habit Tracker</h1>

      <input
        type="text"
        placeholder="New Habit"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
      />
      <button onClick={handleAddHabit}>Add Habit</button>

      <ul>
        {habits.map((habit, index) => (
          <li
            key={index}
            onClick={() => toggleHabit(index)}
            style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}
          >
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
