
import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   userName:null,
//   userEmail:null

// }

const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    setActiveUser:(state,action)=>{
     state.user=action.payload
    },
    setUserLogOutState: state=>{
      state.user=null;
    }
  }
});

export const {setActiveUser,setUserLogOutState} = userSlice.actions;

export const selectUser= state => state.user.user



export default userSlice.reducer