import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comments/getComments';
const ADD_COMMENT = 'comments/addComment';
const EDIT_COMMENT = 'comments/editComment'
const DELETE_COMMENT = 'comments/deleteComment';


/* ----- ACTIONS ------ */
export const addCommentAC = (newComment) => {
    return {
      type: ADD_COMMENT,
      newComment
    };
  };

export const getCommentsAC = (comments) => {
    return {
      type: GET_COMMENTS,
      comments
    };
};

export const editCommentAC = (comment) => {
    return {
      type: EDIT_COMMENT,
      comment
    };
};

export const removeCommentAC = (commentId) => {
    return {
      type: DELETE_COMMENT,
      commentId
    };
};

/* ----- THUNK ------ */
export const addComment = ({ userId, imageId, comment }) => async(dispatch) => {
    const response = await csrfFetch(`/api/comments/images/${imageId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, imageId, comment })
    });
    if(response.ok){
        const newComment = await response.json();
        dispatch(addCommentAC(newComment));
    }
    return response
};

export const getComments = (imageId) => async(dispatch) => {
    const response = await csrfFetch(`/api/comments/images/${imageId}`);

    if(response.ok){
        const comments = await response.json();
        dispatch(getCommentsAC(comments));
    }
    return response;
};

export const updateComment = (comment) => async(dispatch) => {
    const response = await csrfFetch(`/api/comments/images/${comment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    });
    if(response.ok) {
        const comment = await response.json();
        dispatch(editCommentAC(comment));
    }
    return response;
};

export const removeComment = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/images/${id}`, {
        method: 'DELETE' });
    const data = await response.json();
    dispatch(removeCommentAC(id))
    return response;
};


/* ----- REDUCER ------ */
const initialState = { entries: {} }
const commentsReducer = (state = initialState, action)  => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS: {
            const newState = { ...state };
            const entries = {};
            action.comments.forEach(comment => (entries[comment.id] = comment));
            newState.entries = entries;
            return newState;
        }
        case ADD_COMMENT: {
            newState = { ...state };
            newState.entries = { ...newState.entries, [action.newComment.id]: action.newComment }
            return newState;
        }
        case EDIT_COMMENT: {
            newState = { ...state };
            newState.entries = { ...newState.entries, [action.comment.id]: action.comment }
            return newState;
        }
        case DELETE_COMMENT: {
            newState = { ...state, entries: {...state.entries} };
            delete newState.entries[action.commentId];
            return newState;
        }
      default:
        return state;
    }
};


export default commentsReducer;
