import { UPDATE_PAINTINGS } from '../constants/paintings';

export const updatePaintings = (paintingsData) => ({
    type: UPDATE_PAINTINGS,
    payload: paintingsData,
});

export const fetchPaintings = () => {
    return async dispatch => {
        const response = await fetch('/paintings', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const paintingsData = await response.json();
        dispatch(updatePaintings(paintingsData));
    }
};