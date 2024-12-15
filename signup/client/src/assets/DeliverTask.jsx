// DeliverTask.jsx
import React, { useState } from 'react';
import './deliverTask.css';
import { Link } from 'react-router-dom';

const DeliverTask = () => {
    const [taskDetails, setTaskDetails] = useState({
        taskTitle: '',
        taskDescription: '',
        taskFile: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskDetails({
            ...taskDetails,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setTaskDetails({
            ...taskDetails,
            taskFile: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the task details to the server or handle accordingly
        alert('Task Delivered!');
    };

    return (
        <div className="deliver-task-container">
            <h2 className="deliver-task-title">Deliver Your Task</h2>
            <form onSubmit={handleSubmit} className="deliver-task-form">
                <div className="form-group">
                    <label htmlFor="taskTitle">Task Title:</label>
                    <input
                        type="text"
                        id="taskTitle"
                        name="taskTitle"
                        value={taskDetails.taskTitle}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="taskDescription">Task Description:</label>
                    <textarea
                        id="taskDescription"
                        name="taskDescription"
                        value={taskDetails.taskDescription}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="taskFile">Upload Task File:</label>
                    <input
                        type="file"
                        id="taskFile"
                        name="taskFile"
                        onChange={handleFileChange}
                    />
                </div>

                <button type="submit" className="submit-btn">Deliver Task</button>
            </form>

            <Link to="/findjob" className="back-link">Back to Find Jobs</Link>
        </div>
    );
};

export default DeliverTask;
