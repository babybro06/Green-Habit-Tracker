// HabitScreen.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HabitScreen() {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        // Fetch habits from the Flask backend
        axios.get('http://localhost:5000/api/habits')
            .then(response => {
                console.log("Response received from backend:", response);  // Log entire response
                setHabits(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                if (error.response) {
                    // Server responded with a status other than 200 range
                    console.error("Error data:", error.response.data);
                    console.error("Error status:", error.response.status);
                    console.error("Error headers:", error.response.headers);
                } else if (error.request) {
                    // Request was made but no response received
                    console.error("No response received:", error.request);
                } else {
                    // Something else caused the error
                    console.error("Error message:", error.message);
                }
            });
    }, []);

    return (
        <div>
            <h1>Habits</h1>
            <h3>Habits list that you are doing</h3>
            <ul>
                {habits.map(habit => (
                    <li key={habit.id}>{habit.name} - Streak: {habit.streak}</li>
                ))}
            </ul>
            <h3>Habits that you can add to your portfolio</h3>
        </div>
    );
}

export default HabitScreen;
