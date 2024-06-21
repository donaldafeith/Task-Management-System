import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, updateTask, deleteTask } from '../redux/actions/taskActions';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleUpdate = (id, status) => {
        dispatch(updateTask(id, { status }));
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <List>
            {tasks.map(task => (
                <ListItem key={task._id}>
                    <ListItemText primary={task.title} secondary={task.description} />
                    <ListItemSecondaryAction>
                        <Button onClick={() => handleUpdate(task._id, 'In Progress')} color="primary">
                            In Progress
                        </Button>
                        <Button onClick={() => handleUpdate(task._id, 'Done')} color="secondary">
                            Done
                        </Button>
                        <Button onClick={() => handleDelete(task._id)} color="default">
                            Delete
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
