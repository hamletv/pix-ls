import { csrfFetch } from "./csrf";

const ADD_IMAGE = 'images/addImage';
const GET_IMAGES = 'images/getImages';
const GET_IMAGE = 'images/getSingleImage';
const DELETE_IMAGE = 'images/deleteImage';
const EDIT_IMAGE = 'images/editImage'


/* ----- ACTIONS ------ */
export const addImageAC = (newImage) => {
    return {
      type: ADD_IMAGE,
      newImage
    };
  };

export const getImagesAC = (images) => {
    return {
      type: GET_IMAGES,
      images
    };
};

export const getImageAC = (image) => {
    return {
      type: GET_IMAGE,
      image
    };
};

export const editImageAC = (imageUrl, description) => {
    return {
      type: EDIT_IMAGE,
      image,
      imageUrl,
      description
    };
};

export const removeImageAC = (image) => {
    return {
      type: DELETE_IMAGE,
      image
    };
};

/* ----- THUNK ------ */
export const addImage = (payload) => async(dispatch) => {
    const response = await csrfFetch('/api/images/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if(response.ok){
        const newImage = await response.json();
        dispatch(addImageAC(newImage));
        // return newImage;
    }
    return response
};

export const getImages = () => async(dispatch) => {
    const response = await csrfFetch('/api/images');

    if(response.ok){
        const images = await response.json();
        dispatch(getImagesAC(images));
        // return images;
    }
    return response;
};

export const updateImage = ({ id, description, imageUrl }) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(description, imageUrl)
    });
    if(response.ok) {
        const image = await response.json();
        dispatch(editImageAC(image));
        return image;
    }
};

export const getSingleImage = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    });
    if(response.ok){
        const { image } = await response.json();
        dispatch(getImageAC(image));
    }
    return image;
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
        case GET_IMAGE: {
            newState = { ...state };
            newState.entries = { [action.image.id]: action.image };
            return newState;
        }
        case EDIT_IMAGE: {
            newState = { ...state };
            newState.entries = { ...newState.entries, [action.image.id]: action.image }
            return newState;
        }
        // }
        // case DELETE_IMAGE: {
        //     newState = { ...state };
        //     delete newState[action.image];
        //     return newState;
        // }
      default:
        return state;
    }
};


export default imageReducer;
