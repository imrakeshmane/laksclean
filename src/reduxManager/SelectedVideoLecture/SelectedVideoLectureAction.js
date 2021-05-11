import { getStore } from '../store/store';
store = getStore();
export const ActionTypes = {
    SET_LECTURE: 'SET_LECTURE',
    RESET_LECTURE: 'RESET_LECTURE'
}

const setLecture = (lecture) => {
    store.dispatch({ type: ActionTypes.SET_LECTURE, payload: lecture });
}

const resetLecture = () => {
    store.dispatch({ type: ActionTypes.RESET_LECTURE });
}
export default {
    setLecture,
    resetLecture,
}