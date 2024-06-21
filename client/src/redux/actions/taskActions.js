import axios from 'axios';

export const fetchTasks = () => async (dispatch, getState) => {
    try {
        dispatch({ type: 'FETCH_TASKS_REQUEST' });
        const { user: { user } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        const { data } = await axios.get('/api/tasks', config);
        dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.response.data.error });
    }
};

export const createTask = (task) => async (dispatch, getState) => {
    try {
        const { user: { user } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        const { data } = await axios.post('/api/tasks', task, config);
        dispatch({ type: 'CREATE_TASK_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.response.data.error });
    }
};

export const updateTask = (id, updates) => async (dispatch, getState) => {
    try {
        const { user: { user } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        const { data } = await axios.put(`/api/tasks/${id}`, updates, config);
        dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.response.data.error });
    }
};

export const deleteTask = (id) => async (dispatch, getState) => {
    try {
        const { user: { user } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        await axios.delete(`/api/tasks/${id}`, config);
        dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
    } catch (error) {
        dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.response.data.error });
    }
};
