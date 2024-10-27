// HabitScreen.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HabitScreen() {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        // Fetch habits from the Flask backend
        axios.get('http://localhost:5000/api/habits')
            .then(response => setHabits(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Habits</h1>
            <ul>
                {habits.map(habit => (
                    <li key={habit.id}>{habit.name} - Streak: {habit.streak}</li>
                ))}
            </ul>
        </div>
    );
}

export default HabitScreen;
