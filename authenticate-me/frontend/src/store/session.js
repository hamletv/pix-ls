import { csrfFetch } from "./csrf";

const ADD_USER = 'session/addUser';
const REMOVE_USER = 'session/removeUser';


// action creators
const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user,
    };
}

const removeUser = (user) => {
    return {
        type: 'REMOVE_USER',
    };
}


export const login = (user) => async(dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password }),
    });

    const data = await response.json();
    dispatch(addUser(data.user));
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ADD_USER:
            newState = Object.assign({}, state);
            newState.user = action.user;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;

    }
};

export default sessionReducer;
