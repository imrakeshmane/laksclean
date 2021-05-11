const initialState = null;

const LectureReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'SET_LECTURE':
            // if (Array.isArray(action.payload) && action.payload.length > 0) {
            //     return action.payload
            // }
            if (action.payload) {
                return action.payload
            }
            return state;
        case 'RESET_LECTURE':
            return initialState
        default:
            return state;
    }
}

export default LectureReducer;
