import { csrfFetch } from "./csrf";

const ADD_IMAGE = 'images/addImage';
const GET_IMAGES = 'images/getImages';
// const UPDATE_IMAGE = 'images/updateImage';
// const DELETE_IMAGE = 'images/deleteImage';


/* ----- ACTIONS ------ */
export const addImage = (image) => {
    return {
      type: ADD_IMAGE,
      image
    };
  };

export const getImages = (images) => {
    return {
      type: GET_IMAGES,
      images
    };
};

/* ----- THUNK ------ */
export const addImageThunk = (image) => async(dispatch) => {
    const response = await csrfFetch('/api/images/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if(response.ok){
        const image = await response.json();
        dispatch(addImage(image));
        return image;
    }
};

export const getImagesThunk = () => async(dispatch) => {
    const response = await csrfFetch('/api/images');

    if(response.ok){
        const images = await response.json();
        dispatch(getImages(images));
        return images;
    }
};
/* ----- REDUCER ------ */

const initialState = { cocktails = {} }
export const imageReducer = (state = initialState, action)  => {
    switch (action.type) {
      case ADD_IMAGE:
        const newState = { ...state };
        newState.images = { ...newState.images, [action.image.id]: action.image }
        return newState;
      default:
        return state;
    }
};
