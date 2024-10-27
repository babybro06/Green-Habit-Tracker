// src/components/TrackTask.js
import React, { useState } from 'react';
import axios from 'axios';

const TrackTask = () => {
    const [taskId, setTaskId] = useState('');

    const handleTrackTask = async () => {
        try {
            const response = await axios.post('http://localhost:5000/track', {
                task_id: taskId,
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error tracking task:', error);
        }
    };

    return (
        <div>
            <h2>Track a Task</h2>
            <input
                type="text"
                placeholder="Enter Task ID"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
            />
            <button onClick={handleTrackTask}>Track Task</button>
        </div>
    );
};

export default TrackTask;
