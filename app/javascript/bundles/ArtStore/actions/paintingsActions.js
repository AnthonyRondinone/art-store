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

export const createPainting = (detailRefs, featuredImage, altImages) => {
    return async dispatch => {
        const formData = new FormData();
        formData.append("painting[title]", detailRefs.title.current.value);
        formData.append("painting[dimensions]", detailRefs.dimensions.current.value);
        formData.append("painting[price]", detailRefs.price.current.value);
        formData.append("painting[medium]", detailRefs.medium.current.value);
        formData.append("painting[story]", detailRefs.story.current.value);
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
        }
    }
}

