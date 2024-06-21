import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'LOGIN_REQUEST' });
        const { data } = await axios.post('/api/users/login', { email, password });
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data.error });
    }
};

export const register = (username, email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'REGISTER_REQUEST' });
        await axios.post('/api/users/register', { username, email, password });
        dispatch({ type: 'REGISTER_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data.error });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
};
