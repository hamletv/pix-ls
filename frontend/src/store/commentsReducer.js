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
    const response = await csrfFetch(`/api/images/${imageId}/comments`, {
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
    const response = await csrfFetch(`/api/images/${imageId}/comments`);

    if(response.ok){
        const comments = await response.json();
        dispatch(getImagesAC(comments));
    }
    return response;
};

export const updateImage = (comment) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/comments/${comment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment })
    });
    if(response.ok) {
        const comment = await response.json();
        dispatch(editCommentAC(comment));
    }
    return response;
};

export const removeComment = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/comments/${id}`, {
        method: 'DELETE' });
    const data = await response.json();
    dispatch(removeCommentAC(id))
    return response;
};


/* ----- REDUCER ------ */
const initialState = { entries: {} }
const imageReducer = (state = initialState, action)  => {
    let newState;
    switch (action.type) {
        case GET_IMAGES: {
            const newState = { ...state };
            const entries = {};
            action.images.forEach(image => (entries[image.id] = image));
            newState.entries = entries;
            return newState;
        }
        case ADD_IMAGE: {
            newState = { ...state };
            newState.entries = { ...newState.entries, [action.newImage.id]: action.newImage }
            return newState;
        }
        // case GET_IMAGE: {
        //     newState = { ...state };
        //     newState.entries = { [action.image.id]: action.image };
        //     return newState;
        // }
        case EDIT_IMAGE: {
            newState = { ...state };
            newState.entries = { ...newState.entries, [action.image.id]: action.image }
            return newState;
        }
        case DELETE_IMAGE: {
            newState = { ...state };
            delete newState[action.imageId];
            return newState;
        }
      default:
        return state;
    }
};


export default imageReducer;
