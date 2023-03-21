import { SET_PAINTINGS, ADD_PAINTING } from '../constants/paintings';

export const setPaintings = (paintingsData) => ({
    type: SET_PAINTINGS,
    payload: paintingsData,
});

export const fetchPaintings = () => {
    return async dispatch => {
        const response = await fetch('/paintings', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
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
        const formData = new FormData();
        formData.append("painting[title]", details.title);
        formData.append("painting[dimensions]", details.dimensions);
        formData.append("painting[price]", details.price);
        formData.append("painting[medium]", details.medium);
        formData.append("painting[story]", details.story);
        formData.append("painting[featured_image]", featuredImage);
        altImages.forEach(
            (altImage) => formData.append("painting[alt_images][]", altImage)
        )

        const response = await fetch('/paintings', {
            method: 'POST',
            processData: false,
            body: formData,
        })
        const paintingData = await response.json();
        if (response.status === 200) {
            dispatch(addPainting(paintingData))
        }
    }
}

