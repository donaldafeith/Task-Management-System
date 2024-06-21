import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default Dashboard;
