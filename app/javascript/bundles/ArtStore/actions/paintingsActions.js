import { SET_PAINTINGS, ADD_PAINTING } from '../constants/paintings';
import { updateLoading } from './loadingActions'

export const setPaintings = (paintingsData) => ({
    type: SET_PAINTINGS,
    payload: paintingsData,
});

export const fetchPaintings = () => {
    return async dispatch => {
        const response = await fetch('/paintings', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const paintingsData = await response.json();
        if (response.status === 200) {
            dispatch(setPaintings(paintingsData));
        }
    }
};

export const addPainting = (paintingData) => ({
    type: ADD_PAINTING,
    payload: paintingData,
});

export const createPainting = (details, featuredImage, altImages) => {
    return async dispatch => {
        dispatch(updateLoading(true))
        const formData = new FormData();

        Object.entries(details).forEach(([key, value]) => {
            formData.append(`painting[${key}]`, value)
        })
        formData.append("painting[featured_image]", featuredImage);
        altImages.forEach(
            (altImage) => formData.append("painting[alt_images][]", altImage)
        );

        const response = await fetch('/paintings', {
            method: 'POST',
            processData: false,
            body: formData,
        })
        const paintingData = await response.json();
        if (response.status === 200) {
            dispatch(addPainting(paintingData))
            dispatch(updateLoading(false))
        }
    }
}

