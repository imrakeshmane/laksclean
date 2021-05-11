import { getStore } from '../store/store';
store = getStore();
export const ActionTypes = {
    SET_SELECTED_COURSE: 'SET_SELECTED_COURSE',
    RESET_SELECTED_COURSE: 'RESET_SELECTED_COURSE'
}

const setSelectedCourse = (course) => {
    store.dispatch({ type: ActionTypes.SET_SELECTED_COURSE, payload: course });
}

const resetSelectedCourse = () => {
    store.dispatch({ type: ActionTypes.RESET_SELECTED_COURSE });
}
export default {
    setSelectedCourse,
    resetSelectedCourse,
}