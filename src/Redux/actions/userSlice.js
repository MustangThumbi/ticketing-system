import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    loggedIn(state){
        state.isLoggedIn=true;
    },
    loggedOut(state){
        state.isLoggedIn=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const userActions= userSlice.actions

export default userSlice.reducer