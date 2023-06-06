import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        Profile: []
    },
    reducers: {
        SetProfile: (state, action) => {
            state.Profile = action.payload
        }
    }
})

export const { SetProfile } = profileSlice.actions
export default profileSlice.reducer