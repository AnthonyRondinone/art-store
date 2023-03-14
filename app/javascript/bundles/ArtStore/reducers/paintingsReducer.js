import { UPDATE_PAINTINGS } from '../constants/paintings';

export const paintingsReducer = (state = null, action) => {
    switch (action.type) {
        case UPDATE_PAINTINGS:
            return action.payload;
        default:
            return state;
    }
}