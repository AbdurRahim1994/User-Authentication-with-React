import { configureStore } from "@reduxjs/toolkit"
import settingReducer from '../state-slice/setting-slice'
import profileReducer from '../state-slice/profile-slice'

export default configureStore({
    reducer: {
        setting: settingReducer,
        profile: profileReducer
    }
})