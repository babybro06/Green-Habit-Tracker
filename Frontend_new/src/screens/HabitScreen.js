import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HabitScreen() {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        // Fetch habits from the Flask backend
        axios.get('http://localhost:5000/api/habits')
            .then(response => {
                console.log("Response received from backend:", response);
                setHabits(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                if (error.response) {
                    console.error("Error response:", error.response);
                } else if (error.request) {
                    console.error("Error request:", error.request);
                } else {
                    console.error("Error message:", error.message);
                }
            });
            });


    // Inline styles in a JS object
    const styles = {
        habitContainer: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f7f7f7',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        habitHeader: {
            fontSize: '2.5rem',
            textAlign: 'center',
            color: '#333',
        },
        habitSubheader: {
            fontSize: '1.5rem',
            color: '#555',
            marginTop: '20px',
            marginBottom: '10px',
        },
        habitList: {
            listStyleType: 'none',
            padding: 0,
        },
        habitItem: {
            backgroundColor: '#fff',
            padding: '12px',
            margin: '10px 0',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
        },
        habitItemHover: {
            backgroundColor: '#e7f3fe',
        },
        habitName: {
            fontWeight: 'bold',
            color: '#333',
        },
        habitStreak: {
            fontStyle: 'italic',
            color: '#888',
        },
    };

    return (
        <div style={styles.habitContainer}>
            <h1 style={styles.habitHeader}>Habits</h1>
            <h3 style={styles.habitSubheader}>Habits you're currently doing</h3>
            <ul style={styles.habitList}>
                {habits.map(habit => (
                    <li
                        key={habit.id}
                        style={styles.habitItem}
                        onMouseEnter={e => e.target.style.backgroundColor = styles.habitItemHover.backgroundColor}
                        onMouseLeave={e => e.target.style.backgroundColor = ''}
                    >
                        <span style={styles.habitName}>{habit.name}</span>
                        <span style={styles.habitStreak}> - Streak: {habit.streak}</span>
                    </li>
                ))}
            </ul>
            <h3 style={styles.habitSubheader}>Habits you can add to your portfolio</h3>
        </div>
    );
}

export default HabitScreen;
