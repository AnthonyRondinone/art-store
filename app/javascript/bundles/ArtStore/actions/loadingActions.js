import { UPDATE_LOADING } from "../constants/loading";

export const updateLoading = (bool) => ({
    type: UPDATE_LOADING,
    payload: bool
})