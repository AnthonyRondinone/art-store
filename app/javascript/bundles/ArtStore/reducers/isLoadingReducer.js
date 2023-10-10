import { UPDATE_LOADING } from '../constants/loading'

export const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case UPDATE_LOADING:
            return action.payload
        default:
            return state;
    }
}