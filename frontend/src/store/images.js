import { csrfFetch } from "./csrf";

const ADD_IMAGE = 'images/addImage';
const GET_IMAGES = 'images/getImages';
const GET_IMAGE = 'images/getSingleImage';
const DELETE_IMAGE = 'images/deleteImage';
const EDIT_IMAGE = 'images/editImage'


/* ----- ACTIONS ------ */
export const addImageAC = (image) => {
    return {
      type: ADD_IMAGE,
      image
    };
  };

export const getImagesAC = (images) => {
    return {
      type: GET_IMAGES,
      images
    };
};

export const getImageAC = (id) => {
    return {
      type: GET_IMAGE,
      id
    };
};

export const editImageAC = (id) => {
    return {
      type: EDIT_IMAGE,
      id
    };
};

export const removeImageAC = (id) => {
    return {
      type: DELETE_IMAGE,
      id
    };
};

/* ----- THUNK ------ */
export const addImage = (image) => async(dispatch) => {
    const response = await csrfFetch('/api/images/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(image)
    });
    if(response.ok){
        const image = await response.json();
        dispatch(addImageAC(image));
        return image;
    }
};

export const getImages = (images) => async(dispatch) => {
    const response = await csrfFetch('/api/images');

    if(response.ok){
        const images = await response.json();
        dispatch(getImagesAC(images));
        return images;
    }
};

export const updateImage = ({ id, description }) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(description)
    });
    if(response.ok) {
        const image = await response.json();
        dispatch(editImageAC(image));
        return image;
    }
};

export const getSingleImage = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${id}`);
    const { image } = await response.json();
    if(response.ok){
        dispatch(getImageAC(image));
    }
    return image;
};


/* ----- REDUCER ------ */
const initialState = { images: {} }
const imageReducer = (state = initialState, action)  => {
    switch (action.type) {
        case ADD_IMAGE: {
            const newState = { ...state };
            newState.images = { ...newState.images, [action.image.id]: action.image }
            return newState;
        }
        case GET_IMAGES: {
            const newState = { ...state };
            const imagesList = {};
            action.images.forEach((image) => (imagesList[image.id] = image));
            newState.images = imagesList;
            return newState;
        }
        case GET_IMAGE: {
            const newState = { ...state };
            newState.images = { [action.image.id]: action.image };
            return newState;
        }
        // case EDIT_IMAGE: {
        //     const newState = { ...state };

        // }
        case DELETE_IMAGE: {
            const newState = { ...state };
            delete newState[action.image];
            return newState;
        }
      default:
        return state;
    }
};


export default imageReducer;
