import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import UserReducer from './User/UserReducer';
import UserAuthenticationReducer from './UserAuthentication/UserAuthenticationReducer';
import SelecteCourseReducer  from './SelectedCourse/SelecteCourseReducer'
import LectureReducer from './SelectedVideoLecture/SelectedVideoLectureReducer';
// import WalletUserReducer from './WalletBalence/WalletUserReducer';

const reducers = combineReducers({
    userData: UserReducer,
    authDetails: UserAuthenticationReducer,
    selectedCourse : SelecteCourseReducer,
    Lecture:LectureReducer
    
    // walletBalence:WalletUserReducer
});

const persistConfig = {
    key: 'root',
    // storage: AsyncStorage,
    storage: FilesystemStorage
    // storage,
    // whitelist: ['searchHistories', 'appConfiguration']
}

const appReducer = persistReducer(persistConfig, reducers)

export default appReducer