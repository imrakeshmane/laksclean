const initialState = null;

const SelecteCourseReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'SET_SELECTED_COURSE':
            // if (Array.isArray(action.payload) && action.payload.length > 0) {
            //     return action.payload
            // }
            if (action.payload) {
                return action.payload
            }
            return state;
        case 'RESET_SELECTED_COURSE':
            return initialState
        default:
            return state;
    }
}

export default SelecteCourseReducer;
