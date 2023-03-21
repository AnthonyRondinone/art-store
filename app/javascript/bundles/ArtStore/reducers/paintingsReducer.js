import { ADD_PAINTING, SET_PAINTINGS } from '../constants/paintings';

export const paintingsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PAINTINGS:
            return action.payload
        case ADD_PAINTING:
            return {
                ...state, 
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }
}